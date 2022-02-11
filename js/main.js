



function multi(num1, num2) {
    if (num1 == 20) {
        wartosc = true;
    } else if (num2 == 20) {
        wartosc = true;
    }
     else if (num1 + num2 == 20) {
        wartosc = true;
    } else if (num1 != 20 && num2 != 20) {
        wartosc = false;
    } else if (num1 + num2 != 20) {
        wartosc = false;
    }
    console.log(wartosc);
};


 multi(10, 10);