'use strict';
/* Первое задание
1. Задать температуру в градусах по Цельсию. Вывести в alert соответствующую
температуру в градусах по Фаренгейту. Подсказка: расчёт идёт по формуле:
Tf = (9 / 5) * Tc + 32;
где Tf – температура по Фаренгейту, Tc – температура по Цельсию
Решение */
let tempC = prompt('Введите градус по Цельсию');
let tempF = (9 / 5) * tempC + 32;
alert('Температура ' + tempC + ' градуса по Цельзию = ' + tempF + ' градуса по Фарингейту');
/* Второе задание
 Объявить две переменные: admin и name. Записать в name строку
"Василий". Скопировать значение из name в admin. Вывести в
консоль переменную admin (должно вывести "Василий").
Решение */
let nams = 'Василий';
let admin = nams;
console.log(admin);
/* Третье задание
 Вывести в консоль значения выражений и объяснить почему получились такие
значения используя комментарии к каждому выражению:
10 + 10 + "10";
10 + "10" + 10;
10 + 10 + +"10"; (обратите внимание на пробелы, пишите также)
10 / -"";
10 / +"2,5"; (да здесь запятая, это не опечатка)
Решение */
let expression1 = 10 + 10 + "10";
console.log(expression1);
/*  в результате получается 2010 т. к.
сначала складываются два числа 10+10 получается 20 затем
т. к. складывается число и стока, то число 20 переводится в строковое значение и происходит склейка 20 и 10
поэтому получается 2010 и присваеваем значение переменной expression1
с помощью console.log выводим expression1 в консоль
*/
let expression2 = 10 + "10" + 10;
console.log(expression2);
/*  в результате получается 101010 т. к.
т. к. складывается число 10  и стока "10", то число 10 переводится в строковое значение и происходит склейка 10 и 10
следующее действие т. к. складывается  стока "1010" и число 10 , то число 10 переводится в строковое значение и происходит склейка 1010 и 10
поэтому получается 101010 и присваеваем значение переменной expression2
с помощью console.log выводим expression2 в консоль
*/
let expression3 = 10 + 10 + +"10"
console.log(expression3);
/*  в результате получается 30 т. к.
в первом действии складываются  числа 10 и 10 получаем 20
следующее действие с помощью унарного плюса строка "10" преобразуется в число 10 и мы складываем полученное чило в первом дейтвии 20 и 10
поэтому получается 30 и присваеваем значение переменной expression3
с помощью console.log выводим expression3 в консоль
*/
