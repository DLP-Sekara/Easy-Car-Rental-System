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
$(".driverManagement").css('display', 'block')
$(".dashboard").css('display', 'none')

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

})
$("#logOutBtn").click(function () {
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


//nav changes
$("#nav1").css('background-color', 'transparent')
$(".ManageBTN").css('display', 'none')
$("#AdminManageBTN").css('display', 'none')
$(".SignInForm").css('display', 'none')
$("#logOutBtn").click(function () {
    $("#ManageBTN").css('display', 'none')
    $("#logOutBtn").css('display', 'none')
    $("#logInBTN").css('display', 'block')
    $("#AdminManageBTN").css('display', 'none')
    $("#EmployeeBTN").css('display', 'block')
})
$("#logoutIcon").click(function () {
    window.location.href = "index.html"
})
$("#ManageBTN").css('display', 'none')
$("#logOutBtn").css('display', 'none')


/*customer login form functions*/
$(".custLogInBtn,.custSignInBtn").click(function () {
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

/*car click event*/
$(".carTab").click(function () {
    console.log("done done")
    $(".home").css('display', 'none')
    $(".firstPage").css('display', 'none')
    $(".secondPage").css('display', 'none')
    $(".thirdPage").css('display', 'none')

    $(".loginPage").css('display', 'none')
    $(".adminloginPage").css('display', 'none')
    $(".rentSection").css('display', 'block')
    $(".myBookings").css('display', 'none')
    $(".paymentSection").css('display', 'none')
    $(".carManagement").css('display', 'none')
    $(".driverManagement").css('display', 'none')
    $(".dashboard").css('display', 'none')
})
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
})