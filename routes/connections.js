var express = require('express')
var router = express.Router();

// function Connections(){
//   return knex('connection')
// }


router.post('/new', function(req, res){
  res.send("OK!")
})

router.get('/', function(req, res){
  console.log("I heard a get all!")
  //TEST DATA
  res.json([{
      name: "Nellie",
      age: "Young",
      sex: "F",
      size: "L",
      description: "Nellie Labrador Retriever Female 2 years old 55 Lbs. Hi there! I’m Nellie, a fun-loving, young lady with a big heart and some of the most adorable facial expressions you’ll ever see! I think I may have learned to express myself early on in life. You see, I was wandering the streets of Colorado when I ended up spending a few months at a shelter where my needs for love and affection were not entirely met. Since my friends at PawsCo picked me up, I’ve found a new leash on life, and I’ve been smiling much, much more! PawsCo placed me with a great foster family, and I’m slowly learning to come out of my shell! They have been really good to me, and all I want to do is show them how much I appreciate their love. I’ve been experimenting with new kinds of expression lately, and I have been sneaking kisses to my foster mom and even wiggling my bum when she talks to me — I think she likes when I do these things! I live with another doggie, and we are both playful pups who have lots of fun running around the yard together. I am a huge fan of being outdoors, and I am potty trained, but I must say having a doggy door to let myself out would be nice. I feel safe with other dogs, and I’d love for my forever home to have at least one other confident canine that I can grow with. Even though we are quite different, I live with a cat now, and I am quite curious about him. I’m not sure if we’ll be friends yet, but I’m willing to try! As for humans, well, I’m learning to trust them. I just know I’ll do great when I find that patient person who will work with me on my anxiety and fear of the unknown. I’m a real smart gal, who wants to please. I just need the right human(s) to show me how! If you’d like to put a smile on both of our faces, and you think I may be the right fit for your loving home, please send an email to adopt@pawscoadoptions.org and fill out an adoption application on the PawsCo website.",
      petfinder_id: "30519898",
      photo: "http://photos.petfinder.com/photos/pets/30519898/1/?bust=1440196130&width=500&-x.jpg"
  }])
})

router.get('/:id', function(req, res){
  console.log("I heard a get one!")

})

router.put('/:id', function(req, res){
  console.log("I heard an update!")
})

module.exports = router;