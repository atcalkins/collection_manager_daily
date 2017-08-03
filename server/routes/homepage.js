const express = require("express");
const router = express.Router();
const users = require('../models/jerseys')


router.get("/", function(req, res) {
  users.find(data => {
    res.render("index", { users: data });
  });
});

router.post('/jerseys', function(req, res){
  new Jersey({}).save().
    then ((mongoObj) => {
      red.redirect(`/jerseys/${mongoObj._id}`)
    })
    console.log(request.body.user.name);
    console.log(request.body.user.email);
});


//create
// Recipe.create({name: "Pancakes"})
//   .then(handleSuccess)
//   .catch(handleError);

//findone
// Recipe.findOne({name: "Pancakes"})
//   .then(handleSuccess)
//   .catch(handleError);

//edit
// Recipe.updateOne({source: "Grandma"},
//   {$push: {steps: "Call Grandma and tell her how it was."}})

//delete
// Recipe.deleteOne({name: "Green Bean Casserole"})

module.exports = router;
