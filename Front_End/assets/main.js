
//$(".carTab").prop('disabled',true);
//main functions======================================
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
$(".dashboard").css('display', 'block')
$(".customerManagement").css('display', 'none')

$(".onlineTxt").css('display', 'none')
$(".onlineIcon").css('display', 'none')

/* nav button functions*/
$("#homeBtn").click(function () {
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
    $(".customerManagement").css('display', 'none')

    $("#homeBtn>a").css('color', 'black')
    //$("#homeBtn").css('border-bottom','4px solid red')
    $("#logInBTN>a").css('color', 'black')
    $("#logInBTN").css('border-bottom', 'none')
    $("#EmployeeBTN>a").css('color', 'black')
    $("#EmployeeBTN").css('border-bottom', 'none')
    $("#customerBTN>a").css('color', 'black')
    $("#customerBTN").css('border-bottom', 'none')
    $("#ManageBTN>a").css('color', 'black')
    $("#ManageBTN").css('border-bottom', 'none')
    $("#logOutBtn>a").css('color', 'black')
    $("#logOutBtn").css('border-bottom', 'none')
    $("#nav").css('background-color', 'transparent')

    loadAllCarsToHome()
})
$("#customerBTN").click(function () {
    $(".home").css('display', 'none')
    $(".firstPage").css('display', 'none')
    $(".secondPage").css('display', 'none')
    $(".thirdPage").css('display', 'none')

    $(".loginPage").css('display', 'block')
    $(".adminloginPage").css('display', 'none')
    $(".rentSection").css('display', 'none')
    $(".myBookings").css('display', 'none')
    $(".paymentSection").css('display', 'none')
    $(".carManagement").css('display', 'none')
    $(".driverManagement").css('display', 'none')
    $(".dashboard").css('display', 'none')
    $(".customerManagement").css('display', 'none')

    $("#homeBtn>a").css('color', 'black')
    $("#homeBtn").css('border-bottom', 'none')
    $("#customerBTN>a").css('color', 'red')
    $("#customerBTN").css('border-bottom', '4px solid red')
    $("#EmployeeBTN>a").css('color', 'black')
    $("#EmployeeBTN").css('border-bottom', 'none')
    $("#logInBTN>a").css('color', 'black')
    $("#logInBTN").css('border-bottom', 'none')
    $("#ManageBTN>a").css('color', 'black')
    $("#ManageBTN").css('border-bottom', 'none')
    $("#logOutBtn>a").css('color', 'black')
    $("#logOutBtn").css('border-bottom', 'none')

    $("#customerLoginWarningMsg").text("")
    $("#customerUsername").val("");
    $("#customerPassword").val("");
})
$("#EmployeeBTN").click(function () {
    $(".home").css('display', 'none')
    $(".firstPage").css('display', 'none')
    $(".secondPage").css('display', 'none')
    $(".thirdPage").css('display', 'none')

    $(".loginPage").css('display', 'none')
    $(".adminloginPage").css('display', 'block')
    $(".rentSection").css('display', 'none')
    $(".myBookings").css('display', 'none')
    $(".paymentSection").css('display', 'none')
    $(".carManagement").css('display', 'none')
    $(".driverManagement").css('display', 'none')
    $(".dashboard").css('display', 'none')
    $(".customerManagement").css('display', 'none')

    $("#homeBtn>a").css('color', 'black')
    $("#homeBtn").css('border-bottom', 'none')
    $("#EmployeeBTN>a").css('color', 'red')
    $("#EmployeeBTN").css('border-bottom', '4px solid red')
    $("#customerBTN>a").css('color', 'black')
    $("#customerBTN").css('border-bottom', 'none')
    $("#logInBTN>a").css('color', 'black')
    $("#logInBTN").css('border-bottom', 'none')
    $("#ManageBTN>a").css('color', 'black')
    $("#ManageBTN").css('border-bottom', 'none')
    $("#logOutBtn>a").css('color', 'black')
    $("#logOutBtn").css('border-bottom', 'none')

    $("#adminLoginWarningMsg").text("")
    $("#inputAdminPassword").val("");
    $("#inputAdminEmail").val("");
})
$("#logInBTN").click(function () {
    $(".home").css('display', 'none')
    $(".firstPage").css('display', 'none')
    $(".secondPage").css('display', 'none')
    $(".thirdPage").css('display', 'none')

    $(".loginPage").css('display', 'block')
    $(".adminloginPage").css('display', 'none')
    $(".rentSection").css('display', 'none')
    $(".myBookings").css('display', 'none')
    $(".paymentSection").css('display', 'none')
    $(".carManagement").css('display', 'none')
    $(".driverManagement").css('display', 'none')
    $(".dashboard").css('display', 'none')
    $(".customerManagement").css('display', 'none')

    $("#homeBtn>a").css('color', 'black')
    $("#homeBtn").css('border-bottom', 'none')
    $("#logInBTN>a").css('color', 'red')
    $("#logInBTN").css('border-bottom', '4px solid red')
    $("#EmployeeBTN>a").css('color', 'black')
    $("#EmployeeBTN").css('border-bottom', 'none')
    $("#customerBTN>a").css('color', 'black')
    $("#customerBTN").css('border-bottom', 'none')
    $("#ManageBTN>a").css('color', 'black')
    $("#ManageBTN").css('border-bottom', 'none')
    $("#logOutBtn>a").css('color', 'black')
    $("#logOutBtn").css('border-bottom', 'none')
    $("#customerLoginWarningMsg").text("")
})
$("#logOutBtn").click(function () {

    tempLoginStatus="notNow";
    tempCustomerUsernameStatus=null;
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
    $(".customerManagement").css('display', 'none')

    $("#ManageBTN").css('display', 'none')
    $("#logOutBtn").css('display', 'none')
    $("#logInBTN").css('display', 'block')
    $("#AdminManageBTN").css('display', 'none')

    $("#logOutBtn>a").css('color', 'black')
    //$("#logOutBtn").css('border-bottom','4px solid red')
    $("#logInBTN>a").css('color', 'black')
    $("#logInBTN").css('border-bottom', 'none')
    $("#EmployeeBTN>a").css('color', 'black')
    $("#EmployeeBTN").css('border-bottom', 'none')
    $("#customerBTN>a").css('color', 'black')
    $("#customerBTN").css('border-bottom', 'none')
    $("#ManageBTN>a").css('color', 'black')
    $("#ManageBTN").css('border-bottom', 'none')
    $("#nav").css('background-color', 'transparent')

    $(".onlineTxt").css('display', 'none')
    $(".onlineIcon").css('display', 'none')

})
$(".returnNowBtn,.bookingBtn").click(function () {
    $(".home").css('display', 'none')
    $(".firstPage").css('display', 'none')
    $(".secondPage").css('display', 'none')
    $(".thirdPage").css('display', 'none')

    $(".loginPage").css('display', 'none')
    $(".adminloginPage").css('display', 'none')
    $(".rentSection").css('display', 'none')
    $(".myBookings").css('display', 'block')
    $(".paymentSection").css('display', 'none')
    $(".carManagement").css('display', 'none')
    $(".driverManagement").css('display', 'none')
    $(".dashboard").css('display', 'none')
    $(".customerManagement").css('display', 'none')

    $("#ManageBTN>a").css('color', 'black')
    $("#ManageBTN").css('border-bottom','4px solid red')
    $("#logInBTN>a").css('color', 'black')
    $("#logInBTN").css('border-bottom', 'none')
    $("#EmployeeBTN>a").css('color', 'black')
    $("#EmployeeBTN").css('border-bottom', 'none')
    $("#customerBTN>a").css('color', 'black')
    $("#customerBTN").css('border-bottom', 'none')
    $("#logOutBtn>a").css('color', 'black')
    $("#logOutBtn").css('border-bottom', 'none')
    $("#nav").css('background-color', 'transparent')
    addOngoingAndReturnedRents()
})
$(".addCarBtn").click(function () {
    $(".home").css('display', 'none')
    $(".firstPage").css('display', 'none')
    $(".secondPage").css('display', 'none')
    $(".thirdPage").css('display', 'none')

    $(".loginPage").css('display', 'none')
    $(".adminloginPage").css('display', 'none')
    $(".rentSection").css('display', 'none')
    $(".myBookings").css('display', 'none')
    $(".paymentSection").css('display', 'none')
    $(".carManagement").css('display', 'block')
    $(".driverManagement").css('display', 'none')
    $(".dashboard").css('display', 'none')
    $(".customerManagement").css('display', 'none')

    $("#ManageBTN>a").css('color', 'black')
    $("#ManageBTN").css('border-bottom','4px solid red')
    $("#logInBTN>a").css('color', 'black')
    $("#logInBTN").css('border-bottom', 'none')
    $("#EmployeeBTN>a").css('color', 'black')
    $("#EmployeeBTN").css('border-bottom', 'none')
    $("#customerBTN>a").css('color', 'black')
    $("#customerBTN").css('border-bottom', 'none')
    $("#logOutBtn>a").css('color', 'black')
    $("#logOutBtn").css('border-bottom', 'none')
    $("#nav").css('background-color', 'transparent')

})
$(".addDriverBtn").click(function () {
    $(".home").css('display', 'none')
    $(".firstPage").css('display', 'none')
    $(".secondPage").css('display', 'none')
    $(".thirdPage").css('display', 'none')

    $(".loginPage").css('display', 'none')
    $(".adminloginPage").css('display', 'none')
    $(".rentSection").css('display', 'none')
    $(".myBookings").css('display', 'none')
    $(".paymentSection").css('display', 'none')
    $(".carManagement").css('display', 'none')
    $(".driverManagement").css('display', 'block')
    $(".dashboard").css('display', 'none')
    $(".customerManagement").css('display', 'none')

    $("#ManageBTN>a").css('color', 'black')
    $("#ManageBTN").css('border-bottom','4px solid red')
    $("#logInBTN>a").css('color', 'black')
    $("#logInBTN").css('border-bottom', 'none')
    $("#EmployeeBTN>a").css('color', 'black')
    $("#EmployeeBTN").css('border-bottom', 'none')
    $("#customerBTN>a").css('color', 'black')
    $("#customerBTN").css('border-bottom', 'none')
    $("#logOutBtn>a").css('color', 'black')
    $("#logOutBtn").css('border-bottom', 'none')
    $("#nav").css('background-color', 'transparent')

})
$(".manageCustomerBtn").click(function () {
    $(".home").css('display', 'none')
    $(".firstPage").css('display', 'none')
    $(".secondPage").css('display', 'none')
    $(".thirdPage").css('display', 'none')

    $(".loginPage").css('display', 'none')
    $(".adminloginPage").css('display', 'none')
    $(".rentSection").css('display', 'none')
    $(".myBookings").css('display', 'none')
    $(".paymentSection").css('display', 'none')
    $(".carManagement").css('display', 'none')
    $(".driverManagement").css('display', 'none')
    $(".dashboard").css('display', 'none')
    $(".customerManagement").css('display', 'block')

    $("#ManageBTN>a").css('color', 'black')
    $("#ManageBTN").css('border-bottom','4px solid red')
    $("#logInBTN>a").css('color', 'black')
    $("#logInBTN").css('border-bottom', 'none')
    $("#EmployeeBTN>a").css('color', 'black')
    $("#EmployeeBTN").css('border-bottom', 'none')
    $("#customerBTN>a").css('color', 'black')
    $("#customerBTN").css('border-bottom', 'none')
    $("#logOutBtn>a").css('color', 'black')
    $("#logOutBtn").css('border-bottom', 'none')
    $("#nav").css('background-color', 'transparent')

})
$(".viewBtn").click(function () {
    $(".home").css('display', 'none')
    $(".firstPage").css('display', 'none')
    $(".secondPage").css('display', 'none')
    $(".thirdPage").css('display', 'none')

    $(".loginPage").css('display', 'none')
    $(".adminloginPage").css('display', 'none')
    $(".rentSection").css('display', 'none')
    $(".myBookings").css('display', 'none')
    $(".paymentSection").css('display', 'none')
    $(".carManagement").css('display', 'none')
    $(".driverManagement").css('display', 'none')
    $(".dashboard").css('display', 'block')
    $(".customerManagement").css('display', 'none')

    $("#ManageBTN>a").css('color', 'black')
    $("#ManageBTN").css('border-bottom','4px solid red')
    $("#logInBTN>a").css('color', 'black')
    $("#logInBTN").css('border-bottom', 'none')
    $("#EmployeeBTN>a").css('color', 'black')
    $("#EmployeeBTN").css('border-bottom', 'none')
    $("#customerBTN>a").css('color', 'black')
    $("#customerBTN").css('border-bottom', 'none')
    $("#logOutBtn>a").css('color', 'black')
    $("#logOutBtn").css('border-bottom', 'none')
    $("#nav").css('background-color', 'transparent')

    addRentsToTable();
})


//nav changes
$("#nav1").css('background-color', 'transparent')
$(".ManageBTN").css('display', 'none')
$("#AdminManageBTN").css('display', 'none')
$(".SignInForm").css('display', 'none')
$("#logOutBtn").click(function () {
    $("#ManageBTN").css('display', 'none')
    $("#logOutBtn").css('display', 'none')
    $("#logInBTN").css('display', 'block')
    $("#customerBTN").css('display', 'block')
    $("#EmployeeBTN").css('display', 'block')
    $("#AdminManageBTN").css('display', 'none')
    $("#EmployeeBTN").css('display', 'block')
    $(".carArea").css('pointer-events', '');
})
$("#logoutIcon").click(function () {
    window.location.href = "index.html"
})
$("#ManageBTN").css('display', 'none')
$("#logOutBtn").css('display', 'none')


/*customer login form functions*/
$(".custLogInBtn,.custSignInBtn").click(function () {
    /*$(".home").css('display', 'block')
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
    $("#AdminManageBTN").css('display', 'none')*/
})
$("#lbl2").click(function () {
    $(".logInForm").css('display', 'none')
    $(".customerPanel").css('display', 'none')
    $(".SignInForm").css('display', 'block')
})
$("#lbl4").click(function () {
    $(".logInForm").css('display', 'block')
    $(".customerPanel").css('display', 'block')
    $(".SignInForm").css('display', 'none')
})

/*admin login form functions*/
$(".adminLoginBtn").click(function () {
   /* $(".home").css('display', 'block')
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
    $("#logOutBtn").css('display', 'block')
    $("#logInBTN").css('display', 'none')
    $("#AdminManageBTN").css('display', 'block')*/
})

/*all rent click event*/
$(".allRentTable>tr").click(function () {
    $(".home").css('display', 'none')
    $(".firstPage").css('display', 'none')
    $(".secondPage").css('display', 'none')
    $(".thirdPage").css('display', 'none')

    $(".loginPage").css('display', 'none')
    $(".adminloginPage").css('display', 'none')
    $(".rentSection").css('display', 'none')
    $(".myBookings").css('display', 'none')
    $(".paymentSection").css('display', 'block')
    $(".carManagement").css('display', 'none')
    $(".driverManagement").css('display', 'none')
    $(".dashboard").css('display', 'none')
    $(".customerManagement").css('display', 'none')
})


/*payment back event*/
$(".backImg1").click(function () {
    $(".home").css('display', 'none')
    $(".firstPage").css('display', 'none')
    $(".secondPage").css('display', 'none')
    $(".thirdPage").css('display', 'none')

    $(".loginPage").css('display', 'none')
    $(".adminloginPage").css('display', 'none')
    $(".rentSection").css('display', 'none')
    $(".myBookings").css('display', 'none')
    $(".paymentSection").css('display', 'none')
    $(".carManagement").css('display', 'none')
    $(".driverManagement").css('display', 'none')
    $(".dashboard").css('display', 'block')
    $(".customerManagement").css('display', 'none')
})
$(".backImg2").click(function () {
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
    $(".customerManagement").css('display', 'none')
})


/*rentPageModelClose*/
$(".rentPageModelCloseBtn").click(function () {
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
    $(".customerManagement").css('display', 'none')
    addRentsToTable();
})
$(".paymentPageModelCloseBtn").click(function () {
    $(".home").css('display', 'none')
    $(".firstPage").css('display', 'none')
    $(".secondPage").css('display', 'none')
    $(".thirdPage").css('display', 'none')

    $(".loginPage").css('display', 'none')
    $(".adminloginPage").css('display', 'none')
    $(".rentSection").css('display', 'none')
    $(".myBookings").css('display', 'none')
    $(".paymentSection").css('display', 'none')
    $(".carManagement").css('display', 'none')
    $(".driverManagement").css('display', 'none')
    $(".dashboard").css('display', 'block')
    $(".customerManagement").css('display', 'none')
    addRentsToTable();
})

/*loadAllCars function*/
loadAllCarsToHome()
function loadAllCarsToHome() {

    var imgArray=["v1.png","v2.png","v3.png","v4.png","v5.png","v6.png","v7.png","v8.png","v9.png","v10.png","v11.png","v12.png"];
    $.ajax({
        url: "http://localhost:8080/Course_work_war/car",
        method:"GET",
        success: function (resp) {
            $(".carArea").empty();
            var imgCount = [];
            imgCount.length = 0;
            for (const car of resp.data) {
                if(car.status==="Available") {
                    let newCar = `<div class="carTab">
                            <img  class="carImg" src="">
                            <pre  class="carBrand">${car.brand}</pre>
                            <pre style="display: none" class="temp_RegNo">${car.car_reg_no}</pre>
                            <pre class="temp_CarGroup">${car.car_group}</pre>
                            <pre style="display: none" class="temp_Carstatus">${car.status}</pre>
                            <pre style="display: none" class="temp_DamageCost">${car.damageCost}</pre>
                            <pre  class="temp_perKmCost">${car.extra_km_price} LKR Per Km</pre>
                            </div>`;
                    imgCount.push(car);
                    $(".carArea").append(newCar)
                }
                $(".carImg").attr("src","assets/images/cars/"+imgArray[imgCount.length]);
                selectedCarClickEvent();
            }

        }
    })
}


