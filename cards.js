document.getElementById("btn-sell").addEventListener("click", function () {
    document.getElementById("coupon").value = "SELL200";
});

cardTouch("card-1", "card-1-price", "name1");
cardTouch("card-2", "card-2-price", "name2");
cardTouch("card-3", "card-3-price", "name3");
cardTouch("card-4", "card-4-price", "name4");
cardTouch("card-5", "card-5-price", "name5");
cardTouch("card-6", "card-6-price", "name6");
cardTouch("card-7", "card-7-price", "name7");
cardTouch("card-8", "card-8-price", "name8");
cardTouch("card-9", "card-9-price", "name9");

document.getElementById("btn-home").addEventListener("click", function () {
    window.location.href = "index.html";
});