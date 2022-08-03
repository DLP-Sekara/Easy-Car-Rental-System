/*load all rentals to table=========================================*/
addRentsToTable();
function addRentsToTable() {
    $.ajax({
        url: "http://localhost:8080/Course_work_war/rent",
        method:"GET",
        success: function (resp) {
            $(".allRentTable").empty();
            console.log(resp.data)
            for (const rent of resp.data) {
                if(rent.status==="ongoing") {
                    let row = `<tr><td class="rId">${rent.rentID}</td><td>${rent.customer.username}</td><td>${rent.date}</td><td>${rent.pickUpTime}</td>
                    <td><button class="returnBtn" style="border: 1px solid white;color: white; background-color: #ea9e41;border-radius: 6px; cursor: pointer">Return</button></td>
                    <td><button class="rejectBtn" style="border: 1px solid white;color: white; background-color: orangered;border-radius: 6px; cursor: pointer">Reject</button></td>
                    <td><button class="confirmBtn" style="display: none; border: 1px solid white;color: white; background-color: green;border-radius: 6px; cursor: pointer">Confirm</button></td></tr>`;
                    $(".allRentTable").append(row);
                }else if(rent.status==="pending"){
                    let row = `<tr><td class="rId">${rent.rentID}</td><td>${rent.customer.username}</td><td>${rent.date}</td><td>${rent.pickUpTime}</td>
                    <td><button class="returnBtn" style="display: none;border: 1px solid white;color: white; background-color: #ea9e41;border-radius: 6px; cursor: pointer">Return</button></td>
                    <td><button class="rejectBtn" style="border: 1px solid white;color: white; background-color: orangered;border-radius: 6px; cursor: pointer">Reject</button></td>
                    <td><button class="confirmBtn" style=" border: 1px solid white;color: white; background-color: green;border-radius: 6px; cursor: pointer">Confirm</button></td></tr>`;
                    $(".allRentTable").append(row);
                }
            }
            allRentTableClick();
            rentConfirmBtnClick();
            rentRejectBtnClick();
        }
    })
}

//rent btn click
function allRentTableClick() {
    $(".returnBtn").click(function () {
        //temp_Rent_ID=$(this).children().eq(0).text();
        temp_Rent_ID=$(this).closest("tr").find(".rId").text();

        $("#rentID").text(temp_Rent_ID);
        console.log("this is the final "+temp_Rent_ID);
        $.ajax({
            url: "http://localhost:8080/Course_work_war/rent/"+temp_Rent_ID,
            method:"GET",
            success: function (resp) {
                $("#damageCost2").val(resp.data.cash_on_hand);
                $("#startingDate").val(resp.data.date);
                console.log(resp.data.cash_on_hand)
                console.log(resp.data.driver)

                if(resp.data.driver==="true"){
                    $("#driverCost").val(1000);
                }else if(resp.data.driver==="false"){
                    $("#driverCost").val(0);
                }

                var tempRentDetails=resp.data.rentDetails;
                var tempCarRegNo3=null
                    for(var i=0;i<tempRentDetails.length;i++){
                        tempCarRegNo3=tempRentDetails[i].car_reg_no
                    }
                $.ajax({
                    url: "http://localhost:8080/Course_work_war/car/"+tempCarRegNo3,
                    method:"GET",
                    success: function (resp) {
                        var tempKmCost=resp.data.extra_km_price;
                        $("#distance").keyup(function () {
                            console.log("done");
                            var tempDistanceCost=$("#distance").val()*tempKmCost;
                            $("#distanceCost").val(tempDistanceCost);


                           var totalCost= $("#damageCost2").val()*1+$("#distanceCost").val()*1+$("#driverCost").val()*1
                            console.log(totalCost)
                            totalRentalCost=totalCost;
                            $("#totalCost").text(totalCost);
                        })


                    }
                })

            }
        })

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
}

//confirm btn click
function rentConfirmBtnClick() {
    $(".confirmBtn").click(function () {
        console.log("hello")
        temp_Rent_ID=$(this).closest("tr").find(".rId").text();
        //$(this).closest("tr").find(".returnBtn").css("display", "block");
        $.ajax({
            url: "http://localhost:8080/Course_work_war/rent/" + temp_Rent_ID,
            method: "GET",
            success: function (resp) {
                let tempRent=resp.data;
                var rentOB = {
                    "rentID": tempRent.rentID,
                    "date": tempRent.date,
                    "pickUpTime": tempRent.pickUpTime,
                    "driver": tempRent.driver,
                    "status": "ongoing",
                    "cash_on_hand":tempRent.cash_on_hand,
                    "customer":tempRent.customer,
                    "rentDetails":tempRent.rentDetails
                }
                console.log(rentOB)
                $.ajax({
                    url: "http://localhost:8080/Course_work_war/rent",
                    method: "PUT",
                    contentType: "application/json",
                    data: JSON.stringify(rentOB),
                    success: function (res) {
                        if (res.code == 200) {
                            alert("rent confirmed");
                            /*$(this).closest("tr").find(".returnBtn").css("display", "block");
                            $(this).closest("tr").find(".confirmBtn").css("display", "none");*/
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
        //$(this).closest("tr").find(".returnBtn").css("display", "block");
        //$(this).closest("tr").find(".confirmBtn").css("display", "none");
    })
}

//reject btn click
function rentRejectBtnClick() {
    $(".rejectBtn").click(function () {
        console.log("hello")
        temp_Rent_ID=$(this).closest("tr").find(".rId").text();
        //$(this).closest("tr").find(".returnBtn").css("display", "block");
        $.ajax({
            url: "http://localhost:8080/Course_work_war/rent/" + temp_Rent_ID,
            method: "GET",
            success: function (resp) {
                let tempRent=resp.data;
                var rentOB = {
                    "rentID": tempRent.rentID,
                    "date": tempRent.date,
                    "pickUpTime": tempRent.pickUpTime,
                    "driver": tempRent.driver,
                    "status": "rejected",
                    "cash_on_hand":tempRent.cash_on_hand,
                    "customer":tempRent.customer,
                    "rentDetails":tempRent.rentDetails
                }
                console.log(rentOB)
                $.ajax({
                    url: "http://localhost:8080/Course_work_war/rent",
                    method: "PUT",
                    contentType: "application/json",
                    data: JSON.stringify(rentOB),
                    success: function (res) {
                        if (res.code == 200) {
                            alert("rent rejected");
                            /*$(this).closest("tr").find(".returnBtn").css("display", "block");
                            $(this).closest("tr").find(".confirmBtn").css("display", "none");*/
                            addRentsToTable();
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
        /*$(this).closest("tr").find(".returnBtn").css("display", "block");
        $(this).closest("tr").find(".confirmBtn").css("display", "none");*/

    })
}





loadAllSummeryTags();
function loadAllSummeryTags() {
   //set customers
    $.ajax({
        url: "http://localhost:8080/Course_work_war/customer",
        method:"GET",
        success: function (resp) {
            var customerCount = [];
            customerCount.length = 0;
            for (var i = 0; i < resp.data.length; i++) {
                customerCount.push(resp.data[i]);
            }
            $(".customerCount").text(customerCount.length);
        }
    })

    //set available , rentd cars and maintains car
    $.ajax({
        url: "http://localhost:8080/Course_work_war/car",
        method:"GET",
        success: function (resp) {
            var availableCarCount = [];
            var rentedCarCount = [];
            var maintainsCarCount = [];
            availableCarCount.length = 0;
            rentedCarCount.length = 0;
            maintainsCarCount.length = 0;

            for (var i = 0; i < resp.data.length; i++) {
                if(resp.data[i].status==="Available"){
                    availableCarCount.push(resp.data[i]);
                }else if(resp.data[i].status==="Running"){
                    rentedCarCount.push(resp.data[i]);
                }else if(resp.data[i].status==="Under Maintenance"){
                    maintainsCarCount.push(resp.data[i]);
                }
            }

            $(".AvailableCarCount").text(availableCarCount.length);
            $(".rentedCarCount").text(rentedCarCount.length);
            $(".maintainsCount").text(rentedCarCount.length);


        }
    })

    //set driver tag
    $.ajax({
        url: "http://localhost:8080/Course_work_war/driver",
        method:"GET",
        success: function (resp) {
            var driverCount = [];
            driverCount.length = 0;
            for (var i = 0; i < resp.data.length; i++) {
                driverCount.push(resp.data[i]);
            }
            $(".driverCount").text(driverCount.length);
        }
    })

    //set rentals tag
    $.ajax({
        url: "http://localhost:8080/Course_work_war/rent",
        method:"GET",
        success: function (resp) {
            var rentalsCount = [];
            rentalsCount.length = 0;
            for (var i = 0; i < resp.data.length; i++) {
                if(resp.data[i].status==="ongoing"){
                    rentalsCount.push(resp.data[i]);
                }
            }
            $(".rentalsCount").text(rentalsCount.length);
        }
    })

}


loadIncomeChart();
function loadIncomeChart() {
//set all rentals
    $.ajax({
        url: "http://localhost:8080/Course_work_war/rent",
        method:"GET",
        success: function (resp) {
            var rentCount = [];
            rentCount.length = 0;
            for (var i = 0; i < resp.data.length; i++) {
                rentCount.push(resp.data[i]);
            }
            $("#totallyRentalValue1").text(rentCount.length);
        }
    })

    //set all rentals total income
    $.ajax({
        url: "http://localhost:8080/Course_work_war/payment",
        method:"GET",
        success: function (resp) {
            var total=0

            for (var i = 0; i < resp.data.length; i++) {
                total=total+resp.data[i].total_amount;
            }
            $("#totallyIncomeValue").text(total);
        }
    })
}


$(".searchIncomeBtn").click(function () {
    searchIncomeByDate()
})
function searchIncomeByDate() {
    var tempDate=$("#datepicker").val();
    var total=0;
    console.log(tempDate)
    $.ajax({
        url: "http://localhost:8080/Course_work_war/payment",
        method:"GET",
        success: function (resp) {
            var paymentCount = [];
            paymentCount.length = 0;
            for (var i = 0; i < resp.data.length; i++) {
                if(resp.data[i].date===tempDate){
                    paymentCount.push(resp.data[i]);
                    total=total+resp.data[i].total_amount;
                }
            }
            $("#totallyRentalValue2").text(paymentCount.length);
            $("#dailyIncomeValue").text(total);
        }
    })
}