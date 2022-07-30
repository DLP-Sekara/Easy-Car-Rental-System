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
                    let row = `<tr><td>${rent.rentID}</td><td>${rent.customer.username}</td><td>${rent.date}</td><td>${rent.pickUpTime}</td><td><button class="returnBtn" style="border: 1px solid white;background-color: #ea9e41;border-radius: 6px; cursor: pointer">Return car</button></td></tr>`;
                    $(".allRentTable").append(row);
                }
            }
            allRentTableClick();
        }
    })
}
function allRentTableClick() {
    $(".allRentTable>tr").click(function () {
        temp_Rent_ID=$(this).children().eq(0).text();
        $("#rentID").text(temp_Rent_ID);
        console.log(temp_Rent_ID);
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

loadIncomeChart();
function loadIncomeChart() {

}