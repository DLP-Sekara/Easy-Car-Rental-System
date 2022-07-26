/*customer login validation==============================================*/
$(".custLogInBtn").attr('disabled', true);
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
}

/*customer login BtnEvent==============================================*/
$(".custLogInBtn").click(function () {
    checkCustomer()
})
function checkCustomer() {
    let tempUsername = $("#customerUsername").val();
    let tempCustPassword = $("#customerPassword").val();
    $.ajax({
        url: "http://localhost:8080/Course_work_war/customer",
        method:"GET",
        success: function (resp) {
            console.log(resp.data)
            for (const customer of resp.data) {
                if(customer.username===tempUsername & customer.password===tempCustPassword){
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

                        $("#ManageBTN").css('display', 'block')
                        $("#logOutBtn").css('display', 'block')
                        $("#logInBTN").css('display', 'none')
                        $("#AdminManageBTN").css('display', 'none')

                        $("#customerLoginWarningMsg").text("")
                        $("#customerUsername").css('border', '2px solid #ced4da');
                        $("#customerPassword").css('border', '2px solid #ced4da');
                        $("#customerUsername").val("");
                        $("#customerPassword").val("");

                        $(".custLogInBtn").attr('disabled', true);
                        return;
                    }else{
                        //alert("check emails or password")
                        $("#customerLoginWarningMsg").text("check email or password")
                        $("#customerUsername").css('border', '2px solid #ced4da');
                        $("#customerPassword").css('border', '2px solid #ced4da');

                    }
                }

            //tblClick1();
        }
    })
}


//======================sign in form ========================================================

/*customer signin validation==============================================*/
/*$(".custSignInBtn").attr('disabled', true);
var cust_Username = /^[A-z]{2,20}$/;
var cust_Password = /^[A-z,0-9 _]{4,10}$/;
var cust_Email =/^[A-z]{2,20}[@][A-z]{2,10}[.][A-z]{2,20}$/;
var cust_Address = /^[A-z,0-9 _]{4,10}$/;
var cust_Contact = /^[0-9]{5,20}$/;
var cust_DLicenseNo = /^[0-9]{5,20}$/;
var cust_NIC = /^[0-9]{5,20}$/;

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

/*customer login BtnEvent==============================================*/
$(".custSignInBtn").click(function () {
    availableCustomer()
})
function availableCustomer() {
    let tempUsername2 = $("#inputCustomerUsername").val();
    let tempCustPassword2 = $("#inputCustomerPassword").val();
    $.ajax({
        url: "http://localhost:8080/Course_work_war/customer?username="+tempUsername2+"&"+"password="+tempCustPassword2,
        method:"GET",
        success: function (resp) {
            console.log(resp.data)
            var status=resp.data;

            if(status===false){
                var serialize = $(".signinForm").serialize();
                console.log(serialize)
                $.ajax({
                    url: "http://localhost:8080/Course_work_war/customer",
                    method: "POST",
                    data: serialize,
                    success: function (res) {
                        if (res.code == 200) {
                            alert(res.message);
                        }

                    },
                    error: function (ob) {
                        //console.log(ob.responseJSON.message);
                    }
                })
            }else {
                alert("customer already exist")
            }
            }

            //tblClick1();

    })
}



//======================customer manage form ========================================================

/*customer management validation==============================================*/
/*$(".custSignInBtn").attr('disabled', true);
var cust_Username = /^[A-z]{2,20}$/;
var cust_Password = /^[A-z,0-9 _]{4,10}$/;
var cust_Email =/^[A-z]{2,20}[@][A-z]{2,10}[.][A-z]{2,20}$/;
var cust_Address = /^[A-z,0-9 _]{4,10}$/;
var cust_Contact = /^[0-9]{5,20}$/;
var cust_DLicenseNo = /^[0-9]{5,20}$/;
var cust_NIC = /^[0-9]{5,20}$/;

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


/*customer tbl click event============================================*/
customerTblClick();
function customerTblClick() {
    $(".customerTbl>Tr").click(function () {
        let customerUsername = $(this).children().eq(0).text();
        console.log(customerUsername)

        $.ajax({
            url: "http://localhost:8080/Course_work_war/customer/"+customerUsername,
            method:"GET",
            success: function (resp) {
                console.log(resp.data)
                $("#CustomerUsernameMng").val(resp.data.username);
                $("#CustomerPasswordMng").val(resp.data.password);
                $("#CustomerEmailMng").val(resp.data.email);
                $("#CustomerAddressMng").val(resp.data.address);
                $("#CustomerDLicenseNoMng").val(resp.data.Driving_License_No);
                $("#CustomerContactMng").val(resp.data.contact);
                $("#CustomerNICMng").val(resp.data.nic);
                $("#CustomerStatusMng").val(resp.data.status);
            }
        })

    })
}

/*load all customer to table=========================================*/
addCustomerToTable();
function addCustomerToTable() {
    $.ajax({
        url: "http://localhost:8080/Course_work_war/customer",
        method:"GET",
        success: function (resp) {
            $(".customerTbl").empty();
            console.log(resp.data)
            for (const customer of resp.data) {
                let row = `<tr><td>${customer.username}</td><td>${customer.email}</td><td>${customer.address}</td><td>${customer.contact}</td><td>${customer.status}</td></tr>`;
                $(".customerTbl").append(row);
            }
            customerTblClick();
        }
    })
}

/*customer update BtnEvent==============================================*/
$(".customerUpdateBtn").click(function () {
    updateCustomer();
})
function updateCustomer() {
    var customerOB={
        "username":$("#CustomerUsernameMng").val(),
        "password":$("#CustomerPasswordMng").val(),
        "nic":$("#CustomerNICMng").val(),
        "email":$("#CustomerEmailMng").val(),
        "address":$("#CustomerAddressMng").val(),
        "contact":$("#CustomerContactMng").val(),
        "Driving_License_No":$("#CustomerDLicenseNoMng").val(),
        "status":$("#CustomerStatusMng").val()

    }
    $.ajax({
        url: "http://localhost:8080/Course_work_war/customer",
        method: "PUT",
        contentType:"application/json",
        data: JSON.stringify(customerOB),
        success: function (resp) {
            if(resp.code==200){
                addCustomerToTable();
                alert("successfully update");
            }
        },
        error:function (ob) {
            alert(ob.responseJSON.message);
        }
    })
}

/*customer delete BtnEvent==============================================*/
$(".customerDeleteBtn").click(function () {
    deleteCustomer();
})
function deleteCustomer() {
    var temp_CustomerUsername = $("#CustomerUsernameMng").val();
    $.ajax({
        url: "http://localhost:8080/Course_work_war/customer?username=" + temp_CustomerUsername,
        method: "DELETE",
        success: function (resp) {
            if(resp.code==200){
                alert("successfully delete")
                addCustomerToTable();
            }
        },
        error:function (ob) {
            alert(ob.responseJSON.message);
        }
    })
}