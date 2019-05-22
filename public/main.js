$( document ).ready(function() {
    console.log( "ready!" );
    $('#modalButton').on('click', function(e){
        $('#exampleModal').modal(show);
    });
