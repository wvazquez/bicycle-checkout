$(document).ready(function(){

    $('#cart-info').on('click', function(){
        $('#cart').toggle();
    });

    $('.card').on('click', function(event){
        console.log(event)
        // event.currentTarget
    });
});