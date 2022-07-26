
/*car click event*/
$(".temp_RegNo").css('display','none');
$(".carTab").click(function () {
    //==========================================
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
    $(".customerManagement").css('display', 'none')

    //function behaviour
    temp_CarRegNo2=$(this).children().eq(2).text();
    temp_CarDamagePrice=$(this).children().eq(4).text();
    console.log(temp_CarRegNo2);
    console.log(temp_CarDamagePrice);
    $.ajax({
        url: "http://localhost:8080/Course_work_war/car/"+temp_CarRegNo2,
        method:"GET",
        success: function (resp) {
            console.log(resp.data)
            $("#selectedCar").text(resp.data.car_reg_no);
            $("#vehicleGroup").text(resp.data.car_group);
            $("#LossDamageCost").text(resp.data.damageCost);

            //get customer values
            $.ajax({
                url: "http://localhost:8080/Course_work_war/customer/"+tempCustomerUsernameStatus,
                method:"GET",
                success: function (resp) {
                    console.log(resp.data)
                    $("#selectedCustomer").text(resp.data.username);
                    //var customer=resp.data();
                    //console.log(customer)
                }
            })
        }
    })

    //==========================================


    /*if(tempLoginStatus=="notNow"){
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
    }else {
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
        $(".customerManagement").css('display', 'none')
    }*/
})

$(".rentBtn").click(function () {
    console.log($("#LossDamageCost").val());
    console.log($("#selectedCar").val());
    $.ajax({
        url: "http://localhost:8080/Course_work_war/customer/"+tempCustomerUsernameStatus,
        method:"GET",
        success: function (resp) {
            console.log(resp.data)


            let date = $("#startDate").val();
            let pickUpTime = $("#pickUpTime").val();
            let cash_on_hand =temp_CarDamagePrice;
            let customer =resp.data;


            $.ajax({
                url: "http://localhost:8080/Course_work_war/rent",
                method:"GET",
                success: function (resp) {
                    var rentCount =[];
                    rentCount.length=0;
                    for(var i = 0; i < resp.data.length; i++){
                        rentCount.push(resp.data[i]);
                    }
                    let rentID = "Rent - "+rentCount.length++;
                    let rentDetails = [
                        {
                            "rentID":rentID,
                            "car_reg_no":temp_CarRegNo2,
                            "date":date,
                            "pickup_time":pickUpTime
                        }
                    ];

                    var rentOB = {
                        "rentID": rentID,
                        "date": date,
                        "pickUpTime": pickUpTime,
                        "cash_on_hand":cash_on_hand,
                        "customer":customer,
                        "rentDetails":rentDetails
                    }
                    $.ajax({
                        url: "http://localhost:8080/Course_work_war/rent",
                        method: "POST",
                        contentType: "application/json",
                        data: JSON.stringify(rentOB),
                        success: function (res) {
                            if (res.code == 200) {
                                alert(res.message);
                            } else {
                                alert(res.data);
                            }
                        },
                        error: function (ob) {
                            //console.log(ob);

                        }
                    })

                }
            })




        }
    })


})

