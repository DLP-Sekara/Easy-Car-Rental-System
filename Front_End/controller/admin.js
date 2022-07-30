/*validation==============================================*/
$(".adminLoginBtn").attr('disabled', true);
var adminEmail = /^[A-z]{2,20}[@][A-z]{2,10}[.][A-z]{2,20}$/;
var adminPassword = /^[A-z,0-9 _]{4,10}$/;

$('#inputAdminEmail,#inputAdminPassword').on('keydown', function (event) {
    if (event.key == "Tab") {
        event.preventDefault();
    }
});

$("#inputAdminEmail").keyup(function (event) {
    let temp = checkEmail();
    btnAction1();
    if ("Enter" == event.key & temp == true) {
        $("#inputAdminPassword").focus();
    }
})

function checkEmail() {
    let temp = $("#inputAdminEmail").val();
    if (adminEmail.test(temp)) {
        $("#inputAdminEmail").css('border', '2px solid green');
        return true;
    } else {
        $("#inputAdminEmail").css('border', '2px solid red');
    }
}

$("#inputAdminPassword").keyup(function (event) {
    let temp = checkPassword();
    btnAction1();
    if ("Enter" == event.key & temp == true) {
        $(".adminLoginBtn").focus();
    }
})

function checkPassword() {
    let temp = $("#inputAdminPassword").val();
    if (adminPassword.test(temp)) {
        $("#inputAdminPassword").css('border', '2px solid green');
        return true;
    } else {
        $("#inputAdminPassword").css('border', '2px solid red');
    }
}

function btnAction1() {
    let email = $("#inputAdminEmail").val();
    if (adminEmail.test(email)) {
        let password = $("#inputAdminPassword").val();
        if (adminPassword.test(password)) {
            $(".adminLoginBtn").attr('disabled', false);
        } else {
            $(".adminLoginBtn").attr('disabled', true);
            return false;
        }
    } else {
        $(".adminLoginBtn").attr('disabled', true);
        return false;
    }
}

/*BtnEvent==============================================*/
$(".adminLoginBtn").click(function () {
    checkAdmin()
})
function checkAdmin() {
    let tempEmail = $("#inputAdminEmail").val();
    let tempPassword = $("#inputAdminPassword").val();
    $.ajax({
        url: "http://localhost:8080/Course_work_war/admin",
        method:"GET",
        success: function (resp) {
            console.log(resp.data)
            for (const admin of resp.data) {
               if(admin.username===tempEmail & admin.password===tempPassword){

                   tempLoginStatus="availableNow";

                       $(".home").css('display', 'block')
                       $(".firstPage").css('display', 'block')
                       $(".secondPage").css('display', 'block')
                       $(".thirdPage").css('display', 'block')

                       $(".loginPage").css('display', 'none')
                       $(".adminloginPage").css('display', 'none')
                       $(".rentSection").css('display', 'none')
                       $(".myBookings").css('display', 'none')
                       $(".paymentSection").css('display', 'none')
                       $(".carManagement").css('display', 'none')
                       $(".driverManagement").css('display', 'none')
                       $(".dashboard").css('display', 'none')

                       $("#ManageBTN").css('display', 'none')
                       $("#customerBTN").css('display', 'none')
                       $("#logOutBtn").css('display', 'block')
                       $("#logInBTN").css('display', 'none')
                       $("#AdminManageBTN").css('display', 'block')
                       $("#EmployeeBTN").css('display', 'none')

                       $("#adminLoginWarningMsg").text("")
                       $("#inputAdminPassword").css('border', '2px solid #ced4da');
                       $("#inputAdminEmail").css('border', '2px solid #ced4da');
                       $("#inputAdminPassword").val("");
                       $("#inputAdminEmail").val("");
                       $(".adminLoginBtn").attr('disabled', true);
                       $(".carArea").css('pointer-events', 'none');

                   //$(".carArea").attr('disabled', true);

                   $(".carTab").disable(true);
                       return;
                   }else{
                       //alert("check emails or password")
                       $("#adminLoginWarningMsg").text("check email or password")
                       $("#inputAdminPassword").css('border', '2px solid #ced4da');
                       $("#inputAdminEmail").css('border', '2px solid #ced4da');

               }
               }


            //tblClick1();
        }
    })
}


