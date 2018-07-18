// let clickCounter = 0;
// let countField = $('#count');

// function addOne () {

//     clickCounter = clickCounter + 1;
//     countField.html(clickCounter);
//     console.log(clickCounter);
//     }

// $('#cat').click(addOne);

//new program:

let Cat = function(number, image) {
    this.name = 'Cat'+number;
    this.count = 0;
    this.image = image;
};

Cat.prototype.click = function() {
    this.count += 1;
};
Cat.prototype.build = function () {
    $('body').html(
        '<p>'+this.name+'</p>'
        //'<img src ="'+this.image+'">'
        //'<p>You have clicked '+this.count+' times</p>'
    );
};

const cat1 = new Cat(1, 'images/cat1.jpg');
const cat2 = new Cat(2, 'images/cat2.jpg');
let cats = [cat1, cat2];

document.onload(function (){
    cats.forEach(function (){
        this.build();
    });
});