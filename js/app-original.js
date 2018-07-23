

let model = {
    currentCat: null,
    cats: [
    {
        name: 'Cat1',
        clickCount: 0,
        //note first is .jpg, rest are .jpeg
        image: 'images/cat_picture1.jpg'
    },
    {
        name: 'Cat2',
        clickCount: 0,
        image: 'images/cat_picture2.jpeg'
    },
    {
        name: 'Cat3',
        clickCount: 0,
        image: 'images/cat_picture3.jpeg'
    },
    {
        name: 'Cat4',
        clickCount: 0,
        image: 'images/cat_picture4.jpeg'
    },
    {
        name: 'Cat5',
        clickCount: 0,
        image: 'images/cat_picture5.jpeg'
    }
    ]
};


let octopus = {

    init: function() {
        model.currentCat = model.cats[0];

        viewButtons.init();
        viewDisplay.init();
    },

    catsArray: function() {
        return model.cats;
    },

    setCurrentCat: function(cat) {
        model.currentCat = cat;
    },

    getCurrentCat: function() {
        return model.currentCat;
    },

    countPlusOne: function() {
        model.currentCat.clickCount++;
        viewDisplay.render();
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
    init: function() {
        this.displayCat = document.getElementById('catNow');
        this.displayName = document.getElementById('cat-name');
        this.displayImage = document.getElementById('cat-image');
        this.displayCount = document.getElementById('cat-count');

        this.displayImage.addEventListener('click', function() {
            octopus.countPlusOne();
        });
        
        this.render();
    },

    render: function() {
        let cat = octopus.getCurrentCat();

        this.displayName.textContent = cat.name;
        this.displayImage.src = cat.image;
        this.displayCount.textContent = cat.clickCount;

    }
};


octopus.init();
