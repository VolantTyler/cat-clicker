// let clickCounter = 0;
// let countField = $('#count');
$(function() {

    let model = [
        {
            name: 'Cat1',
            clickCount: 0,
            image: 'images/cat_picture1.jpg'
        },
        {
            name: 'Cat2',
            clickCount: 0,
            image: 'images/cat_picture2.jpg'
        },
        {
            name: 'Cat3',
            clickCount: 0,
            image: 'images/cat_picture3.jpg'
        },
        {
            name: 'Cat4',
            clickCount: 0,
            image: 'images/cat_picture4.jpg'
        },
        {
            name: 'Cat5',
            clickCount: 0,
            image: 'images/cat_picture5.jpg'
        }
        ];


    let octopus = {

        init: function() {
            viewButtons.init();
        }
    };


    let viewButtons = {
        init: function() {
            const buttonArea = $('#catButtons');
            //remove model from view to octopus
            for(let i=0; i<model.length; i++) {
                let cat = model[i];
                buttonArea.appendChild('<button id="'+cat.name+'">'+cat.name+'</button>');
            }

           // this.render();
        }
    };


    let viewDisplay = {

    };


    octopus.init();
}());


// // function addOne () {

// //     clickCounter = clickCounter + 1;
// //     countField.html(clickCounter);
// //     console.log(clickCounter);
// //     }

// // $('#cat').click(addOne);

// //new program:

// let Cat = function(number, image) {
//     this.name = 'Cat'+number;
//     this.count = 0;
//     this.image = image;
// };

// Cat.prototype.click = function() {
//     this.count += 1;
// };
// Cat.prototype.build = function () {
//     $('body').html(
//         '<p>'+this.name+'</p>'
//         //'<img src ="'+this.image+'">'
//         //'<p>You have clicked '+this.count+' times</p>'
//     );
// };

// const cat1 = new Cat(1, 'images/cat1.jpg');
// const cat2 = new Cat(2, 'images/cat2.jpg');
// let cats = [cat1, cat2];

// document.onload(function (){
//     cats.forEach(function (){
//         this.build();
//     });
// });