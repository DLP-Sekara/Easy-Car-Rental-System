/*car  validation==============================================*/
$(".carSaveBtn").attr('disabled', true);
$(".carUpdateBtn").attr('disabled', true);
$(".carDeleteBtn").attr('disabled', true);

var car_regNo = /^[A-z,0-9 -]{4,10}$/;
var car_brand = /^[A-z,0-9 _]{4,20}$/;
var car_color = /^[A-z]{2,20}$/;
var car_NoOfPassengers = /^[0-9]{1,10}$/;
var car_type =/^[A-z]{2,20}$/;
var car_ExtraKmPrice = /^[0-9]{1,10}$/;
var car_dailyPrice = /^[0-9]{1,10}$/;
var car_monthlyPrice = /^[0-9]{1,10}$/;
var car_damageCost =/^[0-9]{1,10}$/;

/*$('#regNo,#brand').on('keydown', function (event) {
    if (event.key == "Tab") {
        event.preventDefault();
    }
});*/

$("#regNo").keyup(function (event) {
    let temp = checkCarRegNo();
    btnAction4();
    if ("Enter" == event.key & temp == true) {
        $("#brand").focus();
    }
})
function checkCarRegNo() {
    let temp = $("#regNo").val();
    if (car_regNo.test(temp)) {
        $("#regNo").css('border', '2px solid green');
        return true;
    } else {
        $("#regNo").css('border', '2px solid red');
    }
}

$("#brand").keyup(function (event) {
    let temp = checkCarBrand();
    btnAction4();
    if ("Enter" == event.key & temp == true) {
        $("#color").focus();
    }
})
function checkCarBrand() {
    let temp = $("#brand").val();
    if (car_brand.test(temp)) {
        $("#brand").css('border', '2px solid green');
        return true;
    } else {
        $("#brand").css('border', '2px solid red');
    }
}

$("#color").keyup(function (event) {
    let temp = checkCarColor();
    btnAction4();
    if ("Enter" == event.key & temp == true) {
        $("#noOfPassengers").focus();
    }
})
function checkCarColor() {
    let temp = $("#color").val();
    if (car_color.test(temp)) {
        $("#color").css('border', '2px solid green');
        return true;
    } else {
        $("#color").css('border', '2px solid red');
    }
}

$("#noOfPassengers").keyup(function (event) {
    let temp = checkCarNoOfPassengers();
    btnAction4();
    if ("Enter" == event.key & temp == true) {
        $("#type").focus();
    }
})
function checkCarNoOfPassengers() {
    let temp = $("#noOfPassengers").val();
    if (car_NoOfPassengers.test(temp)) {
        $("#noOfPassengers").css('border', '2px solid green');
        return true;
    } else {
        $("#noOfPassengers").css('border', '2px solid red');
    }
}

$("#type").keyup(function (event) {
    let temp = checkCarType();
    btnAction4();
    if ("Enter" == event.key & temp == true) {
        $("#extraKmPrice").focus();
    }
})
function checkCarType() {
    let temp = $("#type").val();
    if (car_type.test(temp)) {
        $("#type").css('border', '2px solid green');
        return true;
    } else {
        $("#type").css('border', '2px solid red');
    }
}

$("#extraKmPrice").keyup(function (event) {
    let temp = checkCarExtraKmPrice();
    btnAction4();
    if ("Enter" == event.key & temp == true) {
        $("#dailyPrice").focus();
    }
})
function checkCarExtraKmPrice() {
    let temp = $("#extraKmPrice").val();
    if (car_ExtraKmPrice.test(temp)) {
        $("#extraKmPrice").css('border', '2px solid green');
        return true;
    } else {
        $("#extraKmPrice").css('border', '2px solid red');
    }
}

$("#dailyPrice").keyup(function (event) {
    let temp = checkCarDailyPrice();
    btnAction4();
    if ("Enter" == event.key & temp == true) {
        $("#monthlyPrice").focus();
    }
})
function checkCarDailyPrice() {
    let temp = $("#dailyPrice").val();
    if (car_dailyPrice.test(temp)) {
        $("#dailyPrice").css('border', '2px solid green');
        return true;
    } else {
        $("#dailyPrice").css('border', '2px solid red');
    }
}

$("#monthlyPrice").keyup(function (event) {
    let temp = checkCarMonthlyPrice();
    btnAction4();
    if ("Enter" == event.key & temp == true) {
        $("#fuelType").focus();
    }
})
function checkCarMonthlyPrice() {
    let temp = $("#monthlyPrice").val();
    if (car_monthlyPrice.test(temp)) {
        $("#monthlyPrice").css('border', '2px solid green');
        return true;
    } else {
        $("#monthlyPrice").css('border', '2px solid red');
    }
}

/*$("#fuelType").keyup(function (event) {
    let temp = checkCarFuelType();
    btnAction4();
    if ("Enter" == event.key & temp == true) {
        $("#lostDamageCost").focus();
    }
})
function checkCarFuelType() {
    let temp = $("#fuelType").val();
    if (temp==="Petrol" || temp==="Diesel") {
        $("#fuelType").css('border', '2px solid green');
        return true;
    } else {
        $("#fuelType").css('border', '2px solid red');
    }
}*/

$("#lostDamageCost").keyup(function (event) {
    let temp = checkCarDamageCost();
    btnAction4();
    if ("Enter" == event.key & temp == true) {
        $("#car_group").focus();
    }
})
function checkCarDamageCost() {
    let temp = $("#lostDamageCost").val();
    if (car_damageCost.test(temp)) {
        $("#lostDamageCost").css('border', '2px solid green');
        return true;
    } else {
        $("#lostDamageCost").css('border', '2px solid red');
    }
}

/*$("#car_group").keyup(function (event) {
    let temp = checkCarGroup();
    btnAction4();
    if ("Enter" == event.key & temp == true) {
        $("#transmissionType").focus();
    }
})
function checkCarGroup() {
    let temp = $("#car_group").val();
    if (temp==="Premium" || temp==="General" || temp==="Luxury") {
        $("#car_group").css('border', '2px solid green');
        return true;
    } else {
        $("#car_group").css('border', '2px solid red');
    }
}

$("#transmissionType").keyup(function (event) {
    let temp = checkCarTransmissionType();
    btnAction4();
    if ("Enter" == event.key & temp == true) {
        $("#status").focus();
    }
})
function checkCarTransmissionType() {
    let temp = $("#transmissionType").val();
    if (temp==="Manual" || temp==="Auto") {
        $("#transmissionType").css('border', '2px solid green');
        return true;
    } else {
        $("#transmissionType").css('border', '2px solid red');
    }
}

$("#status").keyup(function (event) {
    let temp = checkCarStatus();
    btnAction4();
    if ("Enter" == event.key & temp == true) {
        $(".carSaveBtn").focus();
    }
})
function checkCarStatus() {
    let temp = $("#status").val();
    if (temp==="Available" || temp==="Under Maintenance" || temp==="Running") {
        $("#status").css('border', '2px solid green');
        return true;
    } else {
        $("#status").css('border', '2px solid red');
    }
}*/

function btnAction4() {
    let val_regNo = $("#regNo").val();
    if (car_regNo.test(val_regNo)) {
        let val_brand = $("#brand").val();
        if (car_brand.test(val_brand)) {
            let val_color = $("#color").val();
            if (car_color.test(val_color)) {
                let val_NoOfPassengers = $("#noOfPassengers").val();
                if (car_NoOfPassengers.test(val_NoOfPassengers)) {
                    let val_type = $("#type").val();
                    if (car_type.test(val_type)) {
                        let val_ExtraKmPrice = $("#extraKmPrice").val();
                        if (car_ExtraKmPrice.test(val_ExtraKmPrice)) {
                            let val_dailyPrice = $("#dailyPrice").val();
                            if (car_dailyPrice.test(val_dailyPrice)) {
                                let val_monthlyPrice = $("#monthlyPrice").val();
                                if (car_monthlyPrice.test(val_monthlyPrice)) {
                                        let val_lostDamageCost = $("#lostDamageCost").val();
                                        if (car_damageCost.test(val_lostDamageCost)) {
                                                        $(".carSaveBtn").attr('disabled', false);
                                                    } else {
                                                        $(".carSaveBtn").attr('disabled', true);
                                                        return false;
                                                    }
                                                } else {
                                                    $(".carSaveBtn").attr('disabled', true);
                                                    return false;
                                                }
                                            }
                            } else {
                                $(".carSaveBtn").attr('disabled', true);
                                return false;
                            }
                        } else {
                            $(".carSaveBtn").attr('disabled', true);
                            return false;
                        }
                    } else {
                        $(".carSaveBtn").attr('disabled', true);
                        return false;
                    }
                } else {
                    $(".carSaveBtn").attr('disabled', true);
                    return false;
                }
            } else {
                $(".carSaveBtn").attr('disabled', true);
                return false;
            }
        } else {
            $(".carSaveBtn").attr('disabled', true);
            return false;
        }

}

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
                     $("#lostDamageCost").val(resp.data.damageCost);
                     $("#car_group").val(resp.data.car_group);
                    $("#transmission_type").val(resp.data.transmission_type);
                    $("#status").val(resp.data.status);

                $(".carUpdateBtn").attr('disabled', false);
                $(".carDeleteBtn").attr('disabled', false);
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
                loadAllCarsToHome();
                $( '.carManagementForm' ).each(function(){
                    this.reset();
                    $('input').css('border','2px solid #ced4da')
                });
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
        "car_group":$("#car_group").val(),
        "damageCost":$("#lostDamageCost").val(),
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
                $( '.carManagementForm' ).each(function(){
                    this.reset();
                });
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
                $( '.carManagementForm' ).each(function(){
                    this.reset();
                });
            }
        },
        error:function (ob) {
            alert(ob.responseJSON.message);
        }
    })
}