var Recippi = require('../models/Recippi.js')

exports.favoritePosts = function (req, res) {
  Recippi.find({favorite: true}, function(err, favorites) {
    console.log(favorites)
    res.render('recipe', {recipes: favorites})
    console.log('show favorite recipes')
    })
}


exports.favoriteRecipes = function (req, res) {
  Recippi.findById(req.params.id, function(err, recipe) {
    if (err) {
      console.log(err)
    }

    recipe.favorite = true

    recipe.save(function(err, savedRecipe) {
      if (err) {
        console.log(err)
        res.send("RECIPE NOT SAVED")
      }

      res.send("RECIPE SAVED SUCCESFULLY")
    })



    })
  }
