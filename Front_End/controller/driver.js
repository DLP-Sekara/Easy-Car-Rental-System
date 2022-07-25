addDriverToTable();
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