// функция которая принимает число, которое будет этажномтью елочки
function f9() {

    let a = document.querySelector('.i-2').value;

    let out = '';
    let q = a - 2;
    let x = a - 2;
    let y = a - 2;

    for (i = 1; i < a; i++) {
        for (k = 0; k < (a + q); k++) {
            if (k < q || k > x) {
                out += "&nbsp;&nbsp;";
            } else {
                out += "*";
            }
        }
        q--;
        x++;
        out += "<br>";

    }
    for (i = 0; i < y; i++) {
        out += "&nbsp;&nbsp;";
    }
    out += "*";

    document.querySelector('.out-1').innerHTML = out;

}
document.querySelector('.b-7').onclick = f9;