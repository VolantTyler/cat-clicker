let clickCounter = 0;
let countField = $('#count');

function addOne () {

    clickCounter = clickCounter + 1;
    countField.html(clickCounter);
    console.log(clickCounter);
    }

$('#cat').click(addOne);

