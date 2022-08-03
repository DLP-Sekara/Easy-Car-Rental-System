/*Driver login validation==============================================*/
$(".driverSaveBtn").attr('disabled', true);
var driverID = /^[A-z,0-9 _]{4,10}$/;
var driverNic = /^[0-9 _]{4,10}$/;
var driverLicenseNo = /^[0-9 _]{4,10}$/;
var driverName = /^[A-z]{3,10}$/;
var driverStatus = /^[A-z,0-9 _]{4,10}$/;
$('#driverID,#driverNic').on('keydown', function (event) {
    if (event.key == "Tab") {
        event.preventDefault();
    }
});

$("#driverID").keyup(function (event) {
    let temp = checkDriverID();
    btnAction5();
    if ("Enter" == event.key & temp == true) {
        $("#driverNic").focus();
    }
})
function checkDriverID() {
    let temp = $("#driverID").val();
    if (driverID.test(temp)) {
        $("#driverID").css('border', '2px solid green');
        return true;
    } else {
        $("#driverID").css('border', '2px solid red');
    }
}

$("#driverNic").keyup(function (event) {
    let temp = checkDriverNic();
    btnAction5();
    if ("Enter" == event.key & temp == true) {
        $("#Driving_License_no").focus();
    }
})
function checkDriverNic() {
    let temp = $("#driverNic").val();
    if (driverNic.test(temp)) {
        $("#driverNic").css('border', '2px solid green');
        return true;
    } else {
        $("#driverNic").css('border', '2px solid red');
    }
}

$("#Driving_License_no").keyup(function (event) {
    let temp = checkDriverLicenseNo();
    btnAction5();
    if ("Enter" == event.key & temp == true) {
        $("#driverName").focus();
    }
})
function checkDriverLicenseNo() {
    let temp = $("#Driving_License_no").val();
    if (driverLicenseNo.test(temp)) {
        $("#Driving_License_no").css('border', '2px solid green');
        return true;
    } else {
        $("#Driving_License_no").css('border', '2px solid red');
    }
}

$("#driverName").keyup(function (event) {
    let temp = checkDriverName();
    btnAction5();
    if ("Enter" == event.key & temp == true) {
        $("#driverStatus").focus();
    }
})
function checkDriverName() {
    let temp = $("#driverName").val();
    if (driverName.test(temp)) {
        $("#driverName").css('border', '2px solid green');
        return true;
    } else {
        $("#driverName").css('border', '2px solid red');
    }
}

$("#driverStatus").keyup(function (event) {
    let temp = checkDriverStatus();
    btnAction5();
    if ("Enter" == event.key & temp == true) {
        $(".driverSaveBtn").focus();
    }
})
function checkDriverStatus() {
    let temp = $("#driverStatus").val();
    if (temp ==="Available" || temp ==="Working") {
        $("#driverStatus").css('border', '2px solid green');
        return true;
    } else {
        $("#driverStatus").css('border', '2px solid red');
    }
}

function btnAction5() {
    let temp_driverID = $("#driverID").val();
    if (driverID.test(temp_driverID)) {
        let temp_driverNic = $("#driverNic").val();
        if (driverNic.test(temp_driverNic)) {
            let temp_Driving_License_no = $("#Driving_License_no").val();
            if (driverLicenseNo.test(temp_Driving_License_no)) {
                let temp_driverName = $("#driverName").val();
                if (driverName.test(temp_driverName)) {
                    $(".driverSaveBtn").attr('disabled', false);
                } else {
                    $(".driverSaveBtn").attr('disabled', true);
                    return false;
                }
            } else {
                $(".driverSaveBtn").attr('disabled', true);
                return false;
            }
        } else {
            $(".driverSaveBtn").attr('disabled', true);
            return false;
        }
    } else {
        $(".driverSaveBtn").attr('disabled', true);
        return false;
    }
}

DriverTblClick()
function DriverTblClick() {
    $(".driverTbl>Tr").click(function () {
        console.log("tbl click")
        $(".driverSaveBtn").attr('disabled', true);
        let driverID = $(this).children().eq(0).text();
        let Driving_License_no = $(this).children().eq(1).text();
        let driverNIC = $(this).children().eq(2).text();
        let driverName = $(this).children().eq(3).text();
        let status = $(this).children().eq(3).text();

        $("#driverID").val(driverID);
        $("#driverNic").val(driverNIC);
        $("#Driving_License_no").val(Driving_License_no);
        $("#driverName").val(driverName);
        $("#driverStatus").val(status);

        $(".updateBtn").attr('disabled', false);
        $(".dltBtn").attr('disabled', false);
    })
}


/*driver  get all BtnEvent==============================================*/
addDriverToTable();
function addDriverToTable() {
    $.ajax({
        url: "http://localhost:8080/Course_work_war/driver",
        method:"GET",
        success: function (resp) {
            $(".driverTbl").empty();
            console.log(resp.data)
            for (const driver of resp.data) {
                let row = `<tr><td>${driver.driverID}</td><td>${driver.driving_License_no}</td><td>${driver.driverNIC}</td><td>${driver.driverName}</td><td>${driver.status}</td></tr>`;
                $(".driverTbl").append(row);
            }
            DriverTblClick();
        }
    })
}

/*driver  save BtnEvent==============================================*/
$(".driverSaveBtn").click(function () {
    var serialize = $("#driverForm").serialize();
    console.log(serialize)
    $.ajax({
        url: "http://localhost:8080/Course_work_war/driver",
        method: "POST",
        data: serialize,
        success: function (res) {
            if (res.code == 200) {
                alert(res.message);
                addDriverToTable()
                DriverTblClick()
            }

        },
        error: function (ob) {
            alert(ob.responseJSON.message)
            console.log(ob.responseJSON.message);
        }
    })
})

/*driver update BtnEvent==============================================*/
$(".driverUpdateBtn").click(function () {
    updateDriver();
})
function updateDriver() {
    var driverOB={
        "driverID":$("#driverID").val(),
        "driverNIC":$("#driverNic").val(),
        "driverName":$("#driverName").val(),
        "Driving_License_no":$("#Driving_License_no").val(),
        "status":$("#driverStatus").val(),
    }
    $.ajax({
        url: "http://localhost:8080/Course_work_war/driver",
        method: "PUT",
        contentType:"application/json",
        data: JSON.stringify(driverOB),
        success: function (resp) {
            if(resp.code==200){
                addDriverToTable();
                alert("successfully update");
            }
        },
        error:function (ob) {
            alert(ob.responseJSON.message);
        }
    })
}

/*driver delete BtnEvent==============================================*/
$(".driverDeleteBtn").click(function () {
    deleteDriver();
})
function deleteDriver() {
    var temp_DriverID = $("#driverID").val();
    $.ajax({
        url: "http://localhost:8080/Course_work_war/driver?driverID=" + temp_DriverID,
        method: "DELETE",
        success: function (resp) {
            if(resp.code==200){
                alert("successfully delete")
                addDriverToTable();
            }
        },
        error:function (ob) {
            alert(ob.responseJSON.message);
        }
    })
}