/*car  validation==============================================*/
/*$(".custLogInBtn").attr('disabled', true);
var custUsername = /^[A-z]{2,20}$/;
var custPassword = /^[A-z,0-9 _]{4,10}$/;

$('#customerUsername,#customerPassword').on('keydown', function (event) {
    if (event.key == "Tab") {
        event.preventDefault();
    }
});

$("#customerUsername").keyup(function (event) {
    let temp = checkUsername();
    btnAction2();
    if ("Enter" == event.key & temp == true) {
        $("#customerPassword").focus();
    }
})

function checkUsername() {
    let temp = $("#customerUsername").val();
    if (custUsername.test(temp)) {
        $("#customerUsername").css('border', '2px solid green');
        return true;
    } else {
        $("#customerUsername").css('border', '2px solid red');
    }
}

$("#customerPassword").keyup(function (event) {
    let temp = checkCustPassword();
    btnAction2();
    if ("Enter" == event.key & temp == true) {
        $(".custLogInBtn").focus();
    }
})

function checkCustPassword() {
    let temp = $("#customerPassword").val();
    if (custPassword.test(temp)) {
        $("#customerPassword").css('border', '2px solid green');
        return true;
    } else {
        $("#customerPassword").css('border', '2px solid red');
    }
}

function btnAction2() {
    let username = $("#customerUsername").val();
    if (custUsername.test(username)) {
        let tempPassword = $("#customerPassword").val();
        if (custPassword.test(tempPassword)) {
            $(".custLogInBtn").attr('disabled', false);
        } else {
            $(".custLogInBtn").attr('disabled', true);
            return false;
        }
    } else {
        $(".custLogInBtn").attr('disabled', true);
        return false;
    }
}*/

/*car tbl click event============================================*/
carTblClick();
function carTblClick() {
    $(".allCarsTbl>Tr").click(function () {
        console.log(" car tbl click")
        $(".carTblClick").attr('disabled', true);
        let carRegNo = $(this).children().eq(0).text();
        console.log(carRegNo)

        $.ajax({
            url: "http://localhost:8080/Course_work_war/car/"+carRegNo,
            method:"GET",
            success: function (resp) {
                console.log(resp.data)
                    $("#regNo").val(resp.data.car_reg_no);
                    $("#brand").val(resp.data.brand);
                    $("#color").val(resp.data.color);
                    $("#noOfPassengers").val(resp.data.no_of_passengers);
                    $("#type").val(resp.data.type);
                    $("#extraKmPrice").val(resp.data.extra_km_price);
                    $("#dailyPrice").val(resp.data.daily_price);
                    $("#monthlyPrice").val(resp.data.monthly_price);
                    $("#fuelType").val(resp.data.fuel_type);
                    $("#transmission_type").val(resp.data.transmission_type);
                    $("#status").val(resp.data.status);
            }
        })
       /* let Driving_License_no = $(this).children().eq(1).text();
        let driverNIC = $(this).children().eq(2).text();
        let driverName = $(this).children().eq(3).text();
        let status = $(this).children().eq(3).text();

        $("#driverID").val(driverID);
        $("#driverNic").val(driverNIC);
        $("#Driving_License_no").val(Driving_License_no);
        $("#driverName").val(driverName);
        $("#driverStatus").val(status);

        $(".updateBtn").attr('disabled', false);
        $(".dltBtn").attr('disabled', false);*/
    })
}

/*load all cars to table=========================================*/
addCarsToTable();
function addCarsToTable() {
    $.ajax({
        url: "http://localhost:8080/Course_work_war/car",
        method:"GET",
        success: function (resp) {
            $(".allCarsTbl").empty();
            console.log(resp.data)
            for (const car of resp.data) {
                let row = `<tr><td>${car.car_reg_no}</td><td>${car.brand}</td><td>${car.type}</td><td>${car.no_of_passengers}</td><td>${car.transmission_type}</td><td>${car.fuel_type}</td><td>${car.status}</td><td>${car.daily_price}</td></tr>`;
                $(".allCarsTbl").append(row);
            }
            carTblClick();
        }
    })
}

/*car save BtnEvent==============================================*/
$(".carSaveBtn").click(function () {
    checkCar()
})
function checkCar() {
    var serialize = $(".carManagementForm").serialize();
    console.log(serialize)
    $.ajax({
        url: "http://localhost:8080/Course_work_war/car",
        method: "POST",
        data: serialize,
        success: function (res) {
            if (res.code == 200) {
                alert(res.message);
                addCarsToTable()
            }
        },
        error: function (ob) {
            alert(ob.responseJSON.message)
            console.log(ob.responseJSON.message);
        }
    })
  /*  let tempCarRegNo = $("#regNoregNo").val();
    $.ajax({
        url: "http://localhost:8080/Course_work_war/car",
        method:"GET",
        success: function (resp) {
            console.log(resp.data)
            for (const car of resp.data) {
                if(car.car_reg_no!==tempCarRegNo){
                    var serialize = $(".carManagementForm").serialize();
                    console.log(serialize)
                    $.ajax({
                        url: "http://localhost:8080/Course_work_war/car",
                        method: "POST",
                        data: serialize,
                        success: function (res) {
                            if (res.code == 200) {
                                alert(res.message);
                            }
                        },
                        error: function (ob) {
                            console.log(ob.responseJSON.message);
                        }
                    })
                }else{
                    alert("car already exist")
                }
            }

            //tblClick1();
        }
    })*/
}

/*car update BtnEvent==============================================*/
$(".carUpdateBtn").click(function () {
    updateCar();
})
function updateCar() {
    var carOB={
        "car_reg_no":$("#regNo").val(),
        "brand":$("#brand").val(),
        "type":$("#type").val(),
        "color":$("#color").val(),
        "fuel_type":$("#fuelType").val(),
        "transmission_type":$("#transmissionType").val(),
        "status":$("#status").val(),
        "daily_price":$("#dailyPrice").val(),
        "monthly_price":$("#monthlyPrice").val(),
        "extra_km_price":$("#extraKmPrice").val(),
        "no_of_passengers":$("#noOfPassengers").val()
    }
    $.ajax({
        url: "http://localhost:8080/Course_work_war/car",
        method: "PUT",
        contentType:"application/json",
        data: JSON.stringify(carOB),
        success: function (resp) {
            if(resp.code==200){
                addCarsToTable();
                alert("successfully update");
            }
        },
        error:function (ob) {
            alert(ob.responseJSON.message);
        }
    })
}

/*car delete BtnEvent==============================================*/
$(".carDeleteBtn").click(function () {
    deleteCar();
})
function deleteCar() {
    var temp_CarRegNo = $("#regNo").val();
    $.ajax({
        url: "http://localhost:8080/Course_work_war/car?car_reg_no=" + temp_CarRegNo,
        method: "DELETE",
        success: function (resp) {
            if(resp.code==200){
                alert("successfully delete")
                addCarsToTable();
            }
        },
        error:function (ob) {
            alert(ob.responseJSON.message);
        }
    })
}