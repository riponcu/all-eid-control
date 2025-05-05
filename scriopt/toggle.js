document.getElementById("cashout-sec").style.display = "none";
document.getElementById('total-money').style.display = "none";
document.getElementById("total-cost").style.display = "none";

document.getElementById("add-money-box").addEventListener("click", function(){
    document.getElementById("cashout-sec").style.display = "none";
    document.getElementById("total-money").style.display =
    "none";
    document.getElementById("total-cost").style.display = "none";
    document.getElementById("add-money").style.display = "block";
})

document.getElementById("cashout-box").addEventListener("click",
    function () {
        document.getElementById("cashout-sec").style.display = "block";
        document.getElementById("add-money").style.display = "none";
        document.getElementById("total-money").style.display =
        "none"
        document.getElementById("total-cost").style.display = "none";
    })

document.getElementById("total").addEventListener("click",
    function () {
        document.getElementById("cashout-sec").style.display = "none";
        document.getElementById("add-money").style.display = "none";
        document.getElementById("total-cost").style.display = "none";
        document.getElementById("total-money").style.display =
        "block"
})

document.getElementById("total-cost2").addEventListener("click", function  () {
    document.getElementById("cashout-sec").style.display = "none";
        document.getElementById("add-money").style.display = "none";
        document.getElementById("total-cost").style.display = "block";
        document.getElementById("total-money").style.display =
        "none";
})