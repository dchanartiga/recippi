$( document ).ready(function() {
    console.log( "ready!" );
    $('#modalButton').on('click', function(e){
        $('#exampleModal').modal(show);
    });

  $('.favorite').on('click', function(e){
    console.log('FAVORITE');

    const recipeId = $(e.target)[0].dataset.id
    console.log(recipeId);
    $.ajax ({
      method: "GET",
      url: `/favorite-recipe/${recipeId}`,
    })

  });
});
