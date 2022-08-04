/*payment validation*/

$(".submitBtn").attr('disabled', true);
var distance = /^[0-9]{2,20}$/;

$("#distance").keyup(function (event) {
    let temp = checkDistance();
    btnAction7();
    if ("Enter" == event.key & temp == true) {
        $(".submitBtn").focus();
    }
})

function checkDistance() {
    let temp = $("#distance").val();
    if (distance.test(temp)) {
        $("#distance").css('border', '2px solid green');
        return true;
    } else {
        $("#distance").css('border', '2px solid red');
    }
}

function btnAction7() {
    let distance1 = $("#distance").val();
    if (distance.test(distance1)) {
        $(".submitBtn").attr('disabled', false);
    } else {
        $(".submitBtn").attr('disabled', true);
        return false;
    }
}

/*payement */
$(".submitBtn").click(function () {
    makePayment();
})
function makePayment() {

    $.ajax({
        url: "http://localhost:8080/Course_work_war/rent/" + temp_Rent_ID,
        method: "GET",
        success: function (resp) {

            let rent = resp.data;

            $.ajax({
                url: "http://localhost:8080/Course_work_war/payment",
                method: "GET",
                success: function (resp) {
                    var paymentCount = [];
                    paymentCount.length = 0;
                    for (var i = 0; i < resp.data.length; i++) {
                        paymentCount.push(resp.data[i]);
                    }
                    let paymentId = "Payment-" + paymentCount.length++;
                    let date = $("#endDate").val();
                    let returnTime = $("#returnTime").val();
                    let damage_cost = $("#damageCost2").val();
                    let distance_cost = $("#distanceCost").val();
                    let total_amount = $("#damageCost2").val()*1+$("#distanceCost").val()*1+$("#driverCost").val()*1;


                    var paymentOB = {
                        "paymentId": paymentId,
                        "date": date,
                        "returnTime": returnTime,
                        "damage_cost": damage_cost,
                        "distance_cost": distance_cost,
                        "total_amount": total_amount,
                        "rent": rent
                    }
                    $.ajax({
                        url: "http://localhost:8080/Course_work_war/payment",
                        method: "POST",
                        contentType: "application/json",
                        data: JSON.stringify(paymentOB),
                        success: function (res) {
                            if (res.code == 200) {
                                //alert(res.message);
                                $( '.paymentForm' ).each(function(){
                                    this.reset();
                                    $('input').css('border','2px solid #ced4da')
                                });
                                loadAllCarsToHome();
                                loadAllSummeryTags();
                                loadIncomeChart();
                                //saveOrderDetail(oid)
                                //clearOrderDetails();

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
}


//confirm btn function
