/*
Added-
**begin button event listener
  **run the race only after it's pushed
  **keep letting both cars race while positions are still below threshold
**animate drive
**add images for cars, and css to indicate a track
**tell players on screen how to play
**say who wins/ranking- append in the DOM
**readme
**ensure buttons are only active when the're supposed to be active
add to personal site

****more advanced, to add later*****
-use timer that displays during race
-find the time it took each player to finish and render in DOM
-increment score of the winning player
-allow for car to change orientation
So there will be 3 buttons for each player- forward, rotate left, rotate right
the drive method will need to change based on what orientation is used at any given point
-add a circular track
-make it impossible for cars to overlap
*/

console.log("sanity check");

//car constructor
//set name (will be element id), key to push, image URL
function Car(name, key, imageUrl){
  this.name = name;
  this.key = key;
  this.imageUrl = imageUrl;
  // this.winner = null;
}

//start method that will be on all cars
//put the car image into the DOM
Car.prototype.start = function(){
  this.position = 0;
  this.racing = true;
  $('#' + this.name).html(`<img src="${this.imageUrl}">`);

}

//to count the ranks of the cars as they finish
let countRank = 1;

//drive method that will be on all cars
Car.prototype.drive = function(key){
  if(this.racing){
    if(key === this.key){
      if (this.position < 820){
        this.position += 20;
        console.log(this.position);
        $('#' + this.name).animate({left: '+=20px'}, 150);
      }
      else{
        this.racing = false;
        $('#message').append(`<p>${this.name} is ranked #${countRank}</p>`)
        countRank += 1;
      }
    }
  }
}

//create two car objects
let car1 = new Car('Ferrari', 100, 'images/ferrari.png');
let car2 = new Car('Bug', 107, 'images/vw-blue.png');

//global variable for whether race is going or not
let raceOn = false;

$(document).ready(function(){

  //listen for user keypress
  $(document).on('keypress', function(event){
    if(raceOn){
      if(car1.racing || car2.racing){
        car1.drive(event.which);
        car2.drive(event.which);
      }
      else {
        raceOn = false;
        $('#begin').off();
        console.log("race is over, raceOn is " + raceOn, "remove begin btn event listener");
      }
    }
  });

  setupCars();

  $('#reset').on('click', function(){
    $('#' + car1.name).css('left', 0 + 'px');
    $('#' + car2.name).css('left', 0 + 'px');
    setupCars();
    console.log("RESET position of cars to 0");
  });

});

function setupCars(){
  countRank = 1;
  $('#message').html("<p>Ferrari drives by pushing d, Bug drives by pushing K</p><p>Push Begin when you're ready to race!</p>");
  car1.start();
  car2.start();
  $('#begin').on('click', function(){
    console.log("The race is on, raceOn is " + true);
    $('#message').text("Race!");
    raceOn = true;
  });
}
