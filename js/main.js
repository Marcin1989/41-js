



function multi(num1, num2) {

    let wartosc = false;

   /*  if (num1 == 20) {
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
    } */

    if (num1 === 20 || num2 == 20 || num1 + num2 <= 20) {
         wartosc = true;
    }
    return wartosc;
};


 console.log(multi(11, 20));
 console.log(multi(10, 5))
 console.log(multi(101, 5))
 console.log(multi(20, 5))