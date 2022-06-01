'use strict';
/* Первое задание
Сделайте в стиле es5, а затем в стиле es6
(по аналогии из дополнительных видео -> 3 примеры наследования -> типы на es5 и es6),
конструктор Product, который принимает параметры name и price, сохраните их как
свойства объекта. Также объекты типа Product должны иметь метод make25PercentDiscount,
который будет уменьшать цену в объекте на 25%. Имейте в виду, что метод make25PercentDiscount
не должен быть внутри функции-конструктора, и также не нужно создавать отдельный объект-прототип
(как объект transport в уроке).
Решение
примеры наследования типа на es5*/
function Product(name, price) {
    this.name = name;
    this.price = price;
}
Product.prototype.make25PercentDiscount = function () {
    let resultatPrice = this.price - (this.price * 25 / 100);
    alert('стоимость ' + this.name + ' со скидкой 25 % равна ' + resultatPrice);
};
let Product1 = new Product('smartphone', 10000);
Product1.make25PercentDiscount();

//примеры наследования типа на es6

class Products {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        let resultatPrice = this.price - (this.price * 25 / 100);
        alert('стоимость ' + this.name + 'со скидкой 25 % равна ' + resultatPrice);
    }
}

let Product2 = new Products('tablet', 20000);
Product2.make25PercentDiscount();

/* Второе задание
Сделайте в стиле es5, а затем в стиле es6 (по
аналогии из дополнительных видео -> 3 примеры наследования -> механика наследования),
а) конструктор Post, который принимает параметры author, text, date и сохраняет
их как свойства объекта. Объекты типа Post должны иметь метод edit, который будет
принимать текст и записывать его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date.
Проинициализируйте эти свойства с помощью конструктора Post, чтобы не
дублировать код. Также в конструкторе AttachedPost должно создаваться свойство
highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted,
который будет назначать свойству highlighted значение true.
Решение
В стиле es5*/
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (author, text, date) {

    this.author = author;
    this.text = text;
    this.date = date;
};

function AttachedPost(author, text, date, parametr) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.edit = function () {
    console.log(this);
};
AttachedPost.prototype.makeTextHighlighted = function () {

    this.highlighted = true;
    console.log(this);
}

let resultat = new AttachedPost('Иванов Иван Иванович', 'Необходимая информация', '27.05.2022', false);
resultat.edit();
resultat.makeTextHighlighted();

//В стиле es5
class Post2 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;

    }

    edit() {
        console.log(this);;
    }
}

class AttachedPost2 extends Post2 {
    constructor(author, text, date, highlighted) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
        console.log(this);
    }
}

let resultat2 = new AttachedPost2('Петров Петр Петрович', 'Необходимая информация 2', '28.05.2022', false);
resultat2.edit();
resultat2.makeTextHighlighted();