function cardTouch(card, price1, name) {
    document.getElementById("btn-sell").addEventListener("click", function () {
        document.getElementById("coupon").value = "SELL200";
    });

    document.getElementById(card).addEventListener("click", function () {
        const prePrice = parseFloat(document.getElementById("price-normal").innerText);
        const priceStr = document.getElementById(price1).innerText;
        const price = parseFloat(priceStr) + prePrice;
        document.getElementById("price-normal").innerText = price.toFixed(2);

        let discount = 0;

        if (price >= 200) {
            document.getElementById("btn-apply").removeAttribute("disabled");
        }
        else {
            document.getElementById("btn-apply").setAttribute("disabled", true);
        }
        
        
        document.getElementById("btn-apply").addEventListener("click", function () {
            const coupon1 = document.getElementById('coupon').value;
            if (coupon1 === "SELL200") {
                const discount = price * 0.2;
                document.getElementById("discount").innerText = discount.toFixed(2);

                const total = price - discount;
                document.getElementById("price-total").innerText = total.toFixed(2);
            }
            else {
                discount = 0;
                const total = price - discount;
                document.getElementById("price-total").innerText = total.toFixed(2);
            }
        });

        const total = price - discount;
        document.getElementById("price-total").innerText = total.toFixed(2);


        if (price > 0) {
            document.getElementById("btn-purchase").removeAttribute("disabled");
        }
        document.getElementById("discount").innerText = "00.00";

        const summary = document.getElementById("summary");
        const p = document.createElement('p');
        const text = document.getElementById(name).innerText;
        const count = summary.childElementCount;
        p.innerHTML = `${count}. ${text}`;
        summary.appendChild(p);

    });
}