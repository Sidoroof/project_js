'use strict';
/* Первое задание
С помощью цикла for написать алгоритм для вывода чисел (выводите в консоль,
с помощью console.log) от 0 до 10 включительно, чтобы результат выглядел так:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
Для решения этой задачи используйте остаток от деления на 2
Решение */
console.log('Первое задание');
for (let i = 0; i < 11; i++) {
    if ((i % 2 == 0) && (i > 0)) {
        console.log(i + ' - четное число')
    }
    if ((i % 2 > 0)) {
        console.log(i + ' - нечетное число')
    }
    if (i == 0) {
        console.log(i + ' - это ноль')
    }
}
/////////////////////////////////////////////////////////////////////////////

/* Второе задание
Выведите в консоль значения, указанные рядом с комментариями:
const post = {
author: "John", //вывести этот текст
postId: 23,
comments: [
{
userId: 10,
userName: "Alex",
text: "lorem ipsum",
rating: {
likes: 10,
dislikes: 2 //вывести это число
}
},
{
userId: 5, //вывести это число
userName: "Jane",
text: "lorem ipsum 2", //вывести этот текст
rating: {
likes: 3,
dislikes: 1
}
},
]
};
Решение */
console.log('Второе задание');
const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]

};
console.log(post.author); // выводим значение элемента author массива объекта post
console.log(post.comments[0].rating.dislikes); /*выводим значение элемента dislikes объекта rating нулевого [0] элемента
массива comments массива объекта post */
console.log(post.comments[1].userId); /*выводим значение элемента userId первого [1] элемента
массива comments массива объекта post */
console.log(post.comments[1].text);/*выводим значение элемента text первого [1] элемента
массива comments массива объекта post */
///////////////////////////////////////////////////////////////////////////////////
/*Третье задание
 Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый
товар применить скидку 15%, можете использовать метод forEach https://mzl.la/1AOMMWX :
const products = [
{
id: 3,
price: 200,
},
{
id: 4,
price: 900,
},
{
id: 1,
price: 1000,
},
];
Решение */
console.log('Третье задание');
const products = [{ id: 3, price: 200 }, { id: 4, price: 900 }, { id: 1, price: 1000 }];
//products.forEach(element => console.log(element.price));
products.forEach(element => element.price = element.price - (element.price / 100 * 15))
for (let i = 0; i < products.length; i++) {
    console.log('товар id ' + products[i].id + '  - цена со cкидкой 15% равна ' + products[i].price);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
/* Четвертое задание
Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
1. Получить все товары, у которых есть фотографии, можете использовать метод filter
https://mzl.la/2qROQkT
2. Отсортируйте товары по цене (от низкой цены к высокой), можете использовать
метод sort https://mzl.la/2Y79hbZ , как устроен sort можно посмотреть например
здесь https://youtu.be/O2pusOp0gC0 или в дополнительных видео в материалах урока.
const products = [{id: 3,price: 127,photos: ["1.jpg","2.jpg",]},
{id: 5,price: 499,photos: []},
{id: 10,price: 26,photos: ["3.jpg"]},
{id: 8,price: 78,},];
В первом пункте у вас должен получиться такой массив из двух элементов https://yadi.sk/i/9IBcmLEP6nId9w
Во втором пункте массив должен стать таким https://yadi.sk/i/-xKIq_prDx3Txg
Решение*/
console.log("Четвертое задание");
const product = [{ id: 3, price: 127, photos: ["1.jpg", "2.jpg",] },
{ id: 5, price: 499, photos: [] },
{ id: 10, price: 26, photos: ["3.jpg"] },
{ id: 8, price: 78, },];

const result1 = product.filter(product => product.photos?.length > 0);
console.log(result1);
const result2 = product.sort(function (a, b) {
    return a.price - b.price;
}
);
console.log(result2);
////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Пятое задание
(По желанию, т.к. такая особенность практически не используется) Вывести с помощью цикла
for числа от 0 до 9, НЕ используя тело цикла. То есть выглядеть должно примерно так:
for(…){ здесь пусто }
Помните, что в первом, втором и третьем раздела цикла можно не только писать условия,
или увеличивать счетчик например на 1, допустимы любые выражения, например вызовы функций.
Решение*/
console.log("Пятое задание");

function inputNunber(i) {
    console.log(i);
}
for (let i = 0; i <= 9; inputNunber(i++)) { }

////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Шестое задание
Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке,
только у вашей горки должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx
Решение*/
console.log("Шестое задание");
let kolx = "";
for (let i = 0; i < 20; i++) {
    console.log(kolx += "x");
}
