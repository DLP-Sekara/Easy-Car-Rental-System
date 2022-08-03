
/*car click event*/
$(".temp_RegNo").css('display','none');
$(".temp_DamageCost").css('display','none');

selectedCarClickEvent();
function selectedCarClickEvent() {
    $(".carTab").click(function () {
        //==========================================
        if(tempLoginStatus==="notNow"){
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
            temp_CarDamagePrice=$(this).children().eq(5).text();
            console.log(temp_CarRegNo2)
            console.log(temp_CarDamagePrice)
            $.ajax({
                url: "http://localhost:8080/Course_work_war/car/"+temp_CarRegNo2,
                method:"GET",
                success: function (resp) {
                    $("#selectedCar").text(resp.data.car_reg_no);
                    $("#vehicleGroup").text(resp.data.car_group);
                    $("#LossDamageCost").text(resp.data.damageCost);

                    //get customer values
                    $.ajax({
                        url: "http://localhost:8080/Course_work_war/customer/"+tempCustomerUsernameStatus,
                        method:"GET",
                        success: function (resp) {
                            $("#selectedCustomer").text(resp.data.username);
                            //var customer=resp.data();
                            //console.log(customer)
                        }
                    })
                }
            })
        }

        //==========================================

    })
}

//rent btn function
$(".rentBtn").click(function () {
    console.log("this is done")
    console.log($("#LossDamageCost").val());
    console.log($("#selectedCar").val());
    $.ajax({
        url: "http://localhost:8080/Course_work_war/customer/"+tempCustomerUsernameStatus,
        method:"GET",
        success: function (resp) {
            console.log(resp.data)

            //driver check box
            var tempCheckBoxValue;
            if($("#driverCheckBox").prop("checked") == true){
                console.log("Checkbox is checked.");
                tempCheckBoxValue=true;
            }else{
                tempCheckBoxValue=false;
            }

            let date = $("#startDate").val();
            let pickUpTime = $("#pickUpTime").val();
            let driver = tempCheckBoxValue;
            let cash_on_hand =temp_CarDamagePrice;
            let customer =resp.data;
            console.log("driver")
            console.log(driver)

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
                            "driver":driver,
                            "date":date,
                            "pickup_time":pickUpTime
                        }
                    ];

                    var rentOB = {
                        "rentID": rentID,
                        "date": date,
                        "pickUpTime": pickUpTime,
                        "driver": driver,
                        "status": "pending",
                        "cash_on_hand":temp_CarDamagePrice,
                        "customer":customer,
                        "rentDetails":rentDetails
                    }
                    console.log(rentOB)
                    $.ajax({
                        url: "http://localhost:8080/Course_work_war/rent",
                        method: "POST",
                        contentType: "application/json",
                        data: JSON.stringify(rentOB),
                        success: function (res) {
                            if (res.code == 200) {
                                alert(res.message);
                                loadAllCarsToHome();
                                addRentsToTable();

                                //update notification
                                $.ajax({
                                    url: "http://localhost:8080/Course_work_war/rent",
                                    method:"GET",
                                    success: function (resp) {
                                        var pendingRequestCount=[];
                                        pendingRequestCount.length=0;
                                        for (const rent of resp.data) {
                                            if(rent.status==="pending"){
                                                pendingRequestCount.push(rent);
                                            }
                                            $(".pendingReqCount").text(pendingRequestCount.length);
                                            if(pendingRequestCount.length!==0){
                                                $("#notifyIcon2_admin").css('background-color','rgb(229 162 66)');
                                            }
                                        }

                                    }
                                })

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





//car view btn function
$(".checkCarBtn").click(function () {
    $.ajax({
        url: "http://localhost:8080/Course_work_war/car/"+temp_CarRegNo2,
        method:"GET",
        success: function (resp) {
            console.log(resp.data)
            $("#carRegNo").text(resp.data.car_reg_no);
            $("#carBrand").text(resp.data.brand);
            $("#carType").text(resp.data.type);
            $("#carFuelType").text(resp.data.fuel_type);
            $("#passengersCount").text(resp.data.no_of_passengers);
            $("#carTransmissionType").text(resp.data.transmission_type);
            $("#carDailyPrice").text(resp.data.daily_price);
            $("#carMonthlyPrice").text(resp.data.monthly_price);
            $("#carExtraKmPrice").text(resp.data.extra_km_price);
        }
    })
})




//for customer booking page
addOngoingAndReturnedRents();
function addOngoingAndReturnedRents() {
    $.ajax({
        url: "http://localhost:8080/Course_work_war/rent",
        method:"GET",
        success: function (resp) {
            $(".customerUniqueRentsTbl").empty();
            console.log(resp.data)
            for (const rent of resp.data) {
                console.log(rent.customer.username)
                if(rent.customer.username===tempCustomerUsernameStatus) {
                    if(rent.status==="ongoing"){
                        let row = `<tr><td>${rent.rentID}</td><td>${rent.cash_on_hand}</td><td>${rent.date}</td><td>${rent.pickUpTime}</td><td>${rent.customer.username}</td><td style="color: green; font-weight: bold">${rent.status}</td></tr>`;
                        $(".customerUniqueRentsTbl").append(row);
                    }else if(rent.status==="pending"){
                        let row = `<tr><td>${rent.rentID}</td><td>${rent.cash_on_hand}</td><td>${rent.date}</td><td>${rent.pickUpTime}</td><td>${rent.customer.username}</td><td style="color: #ea9e41; font-weight: bold">${rent.status}</td></tr>`;
                        $(".customerUniqueRentsTbl").append(row);
                    }else if(rent.status==="rejected"){
                        let row = `<tr><td>${rent.rentID}</td><td>${rent.cash_on_hand}</td><td>${rent.date}</td><td>${rent.pickUpTime}</td><td>${rent.customer.username}</td><td style="color: red; font-weight: bold">${rent.status}</td></tr>`;
                        $(".customerUniqueRentsTbl").append(row);
                    }else{
                        let row = `<tr><td>${rent.rentID}</td><td>${rent.cash_on_hand}</td><td>${rent.date}</td><td>${rent.pickUpTime}</td><td>${rent.customer.username}</td><td>${rent.status}</td></tr>`;
                        $(".customerUniqueRentsTbl").append(row);
                    }
                }
            }
        }
    })
}

