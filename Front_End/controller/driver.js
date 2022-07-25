addDriverToTable();
tblClick1()
function tblClick1() {
    $("#driverTbl>Tr").click(function () {
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
            //tblClick1();
        }
    })
}
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
                tblClick1()
            }

        },
        error: function (ob) {
            console.log(ob.responseJSON.message);
        }
    })
})