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

                        tempLoginStatus="availableNow";
                    tempCustomerUsernameStatus=tempUsername;
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
                        $("#customerBTN").css('display', 'none')
                        $("#EmployeeBTN").css('display', 'none')
                        $("#logOutBtn").css('display', 'block')
                        $("#logInBTN").css('display', 'none')
                        $("#AdminManageBTN").css('display', 'none')

                    $("#notifyIcon1_customer").css('display', 'block')
                    $("#notifyIcon2_admin").css('display', 'none')

                        $("#customerLoginWarningMsg").text("")
                        $("#customerUsername").css('border', '2px solid #ced4da');
                        $("#customerPassword").css('border', '2px solid #ced4da');
                        $("#customerUsername").val("");
                        $("#customerPassword").val("");

                    $(".onlineTxt").text("Hi "+tempCustomerUsernameStatus+" ")
                    $(".onlineTxt").css('display', 'block')
                    $(".onlineIcon").css('display', 'block')

                        $(".custLogInBtn").attr('disabled', true);

                    //selectedCarClickEvent();
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
$(".custSignInBtn").attr('disabled', true);
var cust_Username = /^[A-z]{2,20}$/;
var cust_Password = /^[A-z,0-9 _]{4,10}$/;
var cust_Email =/^[A-z,0-9]{2,20}[@][A-z]{2,10}[.][A-z]{2,20}$/;
var cust_Address = /^[A-z,0-9 _]{4,10}$/;
var cust_Contact = /^[0-9]{5,20}$/;
var cust_DLicenseNo = /^[0-9]{5,20}$/;
var cust_NIC = /^[0-9]{5,20}$/;

$('#inputCustomerUsername,#inputCustomerPassword').on('keydown', function (event) {
    if (event.key == "Tab") {
        event.preventDefault();
    }
});

$("#inputCustomerUsername").keyup(function (event) {
    let temp = checkUsername3();
    btnAction3();
    if ("Enter" == event.key & temp == true) {
        $("#inputCustomerPassword").focus();
    }
})
function checkUsername3() {
    let temp = $("#inputCustomerUsername").val();
    if (cust_Username.test(temp)) {
        $("#inputCustomerUsername").css('border', '2px solid green');
        return true;
    } else {
        $("#inputCustomerUsername").css('border', '2px solid red');
    }
}

$("#inputCustomerPassword").keyup(function (event) {
    let temp = checkCustPassword3();
    btnAction3();
    if ("Enter" == event.key & temp == true) {
        $("#inputCustomerEmail").focus();
    }
})
function checkCustPassword3() {
    let temp = $("#inputCustomerPassword").val();
    if (cust_Password.test(temp)) {
        $("#inputCustomerPassword").css('border', '2px solid green');
        return true;
    } else {
        $("#inputCustomerPassword").css('border', '2px solid red');
    }
}

$("#inputCustomerEmail").keyup(function (event) {
    let temp = checkCustEmail();
    btnAction3();
    if ("Enter" == event.key & temp == true) {
        $("#inputCustomerAddress").focus();
    }
})
function checkCustEmail() {
    let temp = $("#inputCustomerEmail").val();
    if (cust_Email.test(temp)) {
        $("#inputCustomerEmail").css('border', '2px solid green');
        return true;
    } else {
        $("#inputCustomerEmail").css('border', '2px solid red');
    }
}

$("#inputCustomerAddress").keyup(function (event) {
    let temp = checkCustAddress();
    btnAction3();
    if ("Enter" == event.key & temp == true) {
        $("#inputCustomerDrivingLicenseNo").focus();
    }
})
function checkCustAddress() {
    let temp = $("#inputCustomerAddress").val();
    if (cust_Address.test(temp)) {
        $("#inputCustomerAddress").css('border', '2px solid green');
        return true;
    } else {
        $("#inputCustomerAddress").css('border', '2px solid red');
    }
}

$("#inputCustomerDrivingLicenseNo").keyup(function (event) {
    let temp = checkCustDLicenseNo();
    btnAction3();
    if ("Enter" == event.key & temp == true) {
        $("#inputCustomerContact").focus();
    }
})
function checkCustDLicenseNo() {
    let temp = $("#inputCustomerDrivingLicenseNo").val();
    if (cust_DLicenseNo.test(temp)) {
        $("#inputCustomerDrivingLicenseNo").css('border', '2px solid green');
        return true;
    } else {
        $("#inputCustomerDrivingLicenseNo").css('border', '2px solid red');
    }
}

$("#inputCustomerContact").keyup(function (event) {
    let temp = checkCustContact();
    btnAction3();
    if ("Enter" == event.key & temp == true) {
        $("#inputCustomerNic").focus();
    }
})
function checkCustContact() {
    let temp = $("#inputCustomerContact").val();
    if (cust_Contact.test(temp)) {
        $("#inputCustomerContact").css('border', '2px solid green');
        return true;
    } else {
        $("#inputCustomerContact").css('border', '2px solid red');
    }
}

$("#inputCustomerNic").keyup(function (event) {
    let temp = checkCustNic();
    btnAction3();
    if ("Enter" == event.key & temp == true) {
        $(".custSignInBtn").focus();
    }
})
function checkCustNic() {
    let temp = $("#inputCustomerNic").val();
    if (cust_NIC.test(temp)) {
        $("#inputCustomerNic").css('border', '2px solid green');
        return true;
    } else {
        $("#inputCustomerNic").css('border', '2px solid red');
    }
}

function btnAction3() {
    let temp_Username=$("#inputCustomerUsername").val();
    if(cust_Username.test(temp_Username)){
        let temp_Password=$("#inputCustomerPassword").val();
        if(cust_Password.test(temp_Password)){
            let temp_Email=$("#inputCustomerEmail").val();
            if(cust_Email.test(temp_Email)){
                let temp_Address=$("#inputCustomerAddress").val();
                if(cust_Address.test(temp_Address)){
                    let temp_DLicenseNo=$("#inputCustomerDrivingLicenseNo").val();
                    if(cust_DLicenseNo.test(temp_DLicenseNo)){
                        let temp_contact=$("#inputCustomerContact").val();
                        if(cust_Contact.test(temp_contact)){
                            let temp_NIC=$("#inputCustomerNic").val();
                            if(cust_NIC.test(temp_NIC)){
                                $(".custSignInBtn").attr('disabled', false);
                            }else{
                                $(".custSignInBtn").attr('disabled', true);
                                return false;
                            }
                        }else{
                            $(".custSignInBtn").attr('disabled', true);
                            return false;
                        }
                    }else{
                        $(".custSignInBtn").attr('disabled', true);
                        return false;
                    }
                }else{
                    $(".custSignInBtn").attr('disabled', true);
                    return false;
                }
            }else{
                $(".custSignInBtn").attr('disabled', true);
                return false;
            }
        }else{
            $(".custSignInBtn").attr('disabled', true);
            return false;
        }
    }else{
        $(".custSignInBtn").attr('disabled', true);
        return false;
    }
}

/*customer sign in BtnEvent==============================================*/
$(".custSignInBtn").click(function () {
    availableCustomer()
})
function availableCustomer() {
    let tempUsername2 = $("#inputCustomerUsername").val()
    var serialize = $(".signinForm").serialize();
    console.log(serialize)
    $.ajax({
        url: "http://localhost:8080/Course_work_war/customer",
        method: "POST",
        data: serialize,
        success: function (res) {
            if (res.code == 200) {

                tempLoginStatus="availableNow";
                tempCustomerUsernameStatus=tempUsername2;
                alert(res.message);


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
                $("#customerBTN").css('display', 'none')
                $("#EmployeeBTN").css('display', 'none')
                $("#logOutBtn").css('display', 'block')
                $("#logInBTN").css('display', 'none')
                $("#AdminManageBTN").css('display', 'none')

                $("#notifyIcon1_customer").css('display', 'block')
                $("#notifyIcon2_admin").css('display', 'none')

                $(".onlineTxt").text("Hi "+tempCustomerUsernameStatus+" ")
                $(".onlineTxt").css('display', 'block')
                $(".onlineIcon").css('display', 'block')

                $( '.signinForm' ).each(function(){
                    this.reset();
                    $('input').css('border','2px solid #ced4da')
                });

                loadAllSummeryTags();
                //selectedCarClickEvent();
            }
        },
        error: function (ob) {
            console.log(ob.responseJSON.message);
            alert(ob.responseJSON.message);
        }
    })
    /*let tempUsername2 = $("#inputCustomerUsername").val();
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

                            tempLoginStatus="availableNow";
                            tempCustomerUsernameStatus=tempUsername2;
                            alert(res.message);
                        }

                    },
                    error: function (ob) {
                        console.log(ob.responseJSON.message);
                    }
                })
            }else {
                alert("customer already exist")
            }
            }

            //tblClick1();

    })*/
}



//======================customer manage form ========================================================

/*customer management validation==============================================*/
$(".customerUpdateBtn").attr('disabled', true);
var custManage_Username = /^[A-z]{2,20}$/;
var custManage_Password = /^[A-z,0-9 _]{4,10}$/;
var custManage_Email =/^[A-z]{2,20}[@][A-z]{2,10}[.][A-z]{2,20}$/;
var custManage_Address = /^[A-z,0-9 _]{4,10}$/;
var custManage_Contact = /^[0-9]{5,20}$/;
var custManage_DLicenseNo = /^[0-9]{5,20}$/;
var custManage_NIC = /^[0-9]{5,20}$/;

$('#CustomerUsernameMng,#CustomerPasswordMng').on('keydown', function (event) {
    if (event.key == "Tab") {
        event.preventDefault();
    }
});

$("#CustomerUsernameMng").keyup(function (event) {
    let temp = checkUsername2();
    btnAction6();
    if ("Enter" == event.key & temp == true) {
        $("#CustomerPasswordMng").focus();
    }
})
function checkUsername2() {
    let temp = $("#CustomerUsernameMng").val();
    if (custManage_Username.test(temp)) {
        $("#CustomerUsernameMng").css('border', '2px solid green');
        return true;
    } else {
        $("#CustomerUsernameMng").css('border', '2px solid red');
    }
}

$("#CustomerPasswordMng").keyup(function (event) {
    let temp = checkCustPassword2();
    btnAction6();
    if ("Enter" == event.key & temp == true) {
        $("#CustomerEmailMng").focus();
    }
})
function checkCustPassword2() {
    let temp = $("#CustomerPasswordMng").val();
    if (custManage_Password.test(temp)) {
        $("#CustomerPasswordMng").css('border', '2px solid green');
        return true;
    } else {
        $("#CustomerPasswordMng").css('border', '2px solid red');
    }
}

$("#CustomerEmailMng").keyup(function (event) {
    let temp = checkCustEmail2();
    btnAction6();
    if ("Enter" == event.key & temp == true) {
        $("#CustomerAddressMng").focus();
    }
})
function checkCustEmail2() {
    let temp = $("#CustomerEmailMng").val();
    if (custManage_Email.test(temp)) {
        $("#CustomerEmailMng").css('border', '2px solid green');
        return true;
    } else {
        $("#CustomerEmailMng").css('border', '2px solid red');
    }
}

$("#CustomerAddressMng").keyup(function (event) {
    let temp = checkCustAddress2();
    btnAction6();
    if ("Enter" == event.key & temp == true) {
        $("#CustomerDLicenseNoMng").focus();
    }
})
function checkCustAddress2() {
    let temp = $("#CustomerAddressMng").val();
    if (custManage_Address.test(temp)) {
        $("#CustomerAddressMng").css('border', '2px solid green');
        return true;
    } else {
        $("#CustomerAddressMng").css('border', '2px solid red');
    }
}

$("#CustomerDLicenseNoMng").keyup(function (event) {
    let temp = checkCustDLicenseNo2();
    btnAction6();
    if ("Enter" == event.key & temp == true) {
        $("#CustomerContactMng").focus();
    }
})
function checkCustDLicenseNo2() {
    let temp = $("#CustomerDLicenseNoMng").val();
    if (custManage_DLicenseNo.test(temp)) {
        $("#CustomerDLicenseNoMng").css('border', '2px solid green');
        return true;
    } else {
        $("#CustomerDLicenseNoMng").css('border', '2px solid red');
    }
}

$("#CustomerContactMng").keyup(function (event) {
    let temp = checkCustContact2();
    btnAction6();
    if ("Enter" == event.key & temp == true) {
        $("#CustomerNICMng").focus();
    }
})
 function checkCustContact2() {
    let temp = $("#CustomerContactMng").val();
    if (custManage_Contact.test(temp)) {
        $("#CustomerContactMng").css('border', '2px solid green');
        return true;
    } else {
        $("#CustomerContactMng").css('border', '2px solid red');
    }
}

$("#CustomerNICMng").keyup(function (event) {
    let temp = checkCustNic2();
    btnAction6();
    if ("Enter" == event.key & temp == true) {
        $(".customerUpdateBtn").focus();
    }
})
function checkCustNic2() {
    let temp = $("#CustomerNICMng").val();
    if (custManage_NIC.test(temp)) {
        $("#CustomerNICMng").css('border', '2px solid green');
        return true;
    } else {
        $("#CustomerNICMng").css('border', '2px solid red');
    }
}

function btnAction6() {
    let temp_Username2=$("#CustomerUsernameMng").val();
    if(custManage_Username.test(temp_Username2)){
        let temp_Password2=$("#CustomerPasswordMng").val();
        if(custManage_Password.test(temp_Password2)){
            let temp_Email2=$("#CustomerEmailMng").val();
            if(custManage_Email.test(temp_Email2)){
                let temp_Address2=$("#CustomerAddressMng").val();
                if(custManage_Address.test(temp_Address2)){
                    let temp_DLicenseNo2=$("#CustomerDLicenseNoMng").val();
                    if(custManage_DLicenseNo.test(temp_DLicenseNo2)){
                        let temp_contact2=$("#CustomerContactMng").val();
                        if(custManage_Contact.test(temp_contact2)){
                            let temp_NIC2=$("#CustomerNICMng").val();
                            if(custManage_NIC.test(temp_NIC2)){
                                $(".customerUpdateBtn").attr('disabled', false);
                            }else{
                                $(".customerUpdateBtn").attr('disabled', false);
                                return false;
                            }
                        }else{
                            $(".customerUpdateBtn").attr('disabled', false);
                            return false;
                        }
                    }else{
                        $(".customerUpdateBtn").attr('disabled', false);
                        return false;
                    }
                }else{
                    $(".customerUpdateBtn").attr('disabled', false);
                    return false;
                }
            }else{
                $(".customerUpdateBtn").attr('disabled', false);
                return false;
            }
        }else{
            $(".customerUpdateBtn").attr('disabled', false);
            return false;
        }
    }else{
        $(".customerUpdateBtn").attr('disabled', false);
        return false;
    }
}


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
                $(".customerUpdateBtn").attr('disabled', false);
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
                $( '.updateForm' ).each(function(){
                    this.reset();
                });
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
                $( '.updateForm' ).each(function(){
                    this.reset();
                });
            }
        },
        error:function (ob) {
            alert(ob.responseJSON.message);
        }
    })
}