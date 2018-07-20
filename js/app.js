
//$(function() {

    let model = {
        currentCat: null;
        cats: [
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
        ]};


    let octopus = {

        init: function() {
            viewButtons.init();
        },

        catsArray: function() {
            return model;
        },

        setCurrentCat: function(cat) {
            model.currentCat = cat;
        }
    };


    let viewButtons = {
        init: function() {
            this.buttonArea = document.getElementById('catButtons');

            this.render();
        },

        render: function() {
            let i, cat, entry;
            this.buttonArea.innerHTML = '';
            let cats = octopus.catsArray();

            //remove model from view to octopus
            for(i=0; i<cats.length; i++) {
                cat = cats[i];
                entry = document.createElement('button');
                entry.textContent = cat.name;

                entry.addEventListener('click', (function(catCopy) {
                    return function() {
                        octopus.setCurrentCat(catCopy);
                        viewDisplay.render();
                    };
                })(cat));

                this.buttonArea.appendChild(entry);
            }
        }
    };


    let viewDisplay = {

    };


    octopus.init();
//}());
