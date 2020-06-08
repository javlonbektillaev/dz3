let num1 = +prompt('vvedite pervoye chislo')
let num2 = +prompt('vvedite vtorey chislo')
let num3 = +prompt('vvedite tretie chislo')

if ((num1 > num2 && num1 < num3) || (num1 < num2 && num1 > num3)) {
    console.log('sredneye chislo ' + num1);

} else if ((num2 > num1 && num2 < num3) || (num2 < num1 && num2 > num3)) {
    console.log('sredneye chislo ' + num2);

} else if ((num3 > num1 && num3 < num2) || (num3 < num1 && num3 > num2)) {
    console.log('sredneye chislo ' + num3);

} else {
    console.log('vi vveli ravnie chisla');

}