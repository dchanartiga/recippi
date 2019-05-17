var Post = require('../models/Recippi.js')

exports.allPosts = function (req, res) {
  Post.find({}, function(err, docs) {
    console.log(docs)
    res.render('posts', {posts: docs})
    console.log('show posts')
    })
}

exports.newPost = function (req, res) {
  console.log('NEW POST')
  console.log(req.body)
  var data = new Post({
    title: req.body.title,
    ingredients: req.body.ingredients,
    type: req.body.type,
    time: req.body.time,
    servings: req.body.servings,
    calories: req.body.calories,
    description: req.body.description,
    notes: req.body.notes,

  });

  data.save(function (err) {
    if (err) {
      console.log(err);
      res.send('<h1> FILL OUT ALL FORMS </h1>')
      return
    }
    res.send('<h1> THANKS </h1>');
  })

}
