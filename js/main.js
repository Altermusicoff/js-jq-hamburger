    //SOLUZIONE 1

// $('.fa-bars').click(function(){
//     $('.hamburger-menu').show();
//     });
// $('.fa-times').click(function(){
//     $('.hamburger-menu').hide();
//     });
    
    //SOLUZIONE 2
// $('.fa-bars,.fa-times').click(function () {
//     $('.hamburger-menu').toggle();
//     });

    //SOLUZIONE 2 ANIMAZIONE SE INSERISCO UNA STRINGA DENTRO TOGGLE
$('.fa-bars,.fa-times').click(function () {
    $('.hamburger-menu').toggle('');
});

