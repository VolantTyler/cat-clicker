let clickCounter = 0;

function addOne () {
    //event.preventDefault();

    clickCounter = clickCounter + 1;
    //$('span #count').html(clickCounter);
    $('span #count').replaceWith('<span id="count">'+clickCounter+'</span>');
    window.alert(clickCounter);
    console.log(clickCounter);
    }

$('#button').on('click', addOne());