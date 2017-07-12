/*
To add:
**begin button event listener
  **run the race only after it's pushed
  **keep doing it while position is still below threshold
**when there's a win, stop the race
**reset button event listener- returns us to before we clicked begin
**add animate to drive


add images for cars, and css to indicate a track
tell players on screen how to players
add to readme
commit, push
gh pages branch
add to personal site

if time be sure the buttons are only active when the're supposed to be active

****more advanced later*****
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
//use this to also set the url for the image
function Car(name, key, imageUrl){
  this.name = name;
  this.key = key;
  this.imageUrl = imageUrl;
}

//start method that will be on all cars
//put the car image into the DOM here
Car.prototype.start = function(){
  this.position = 0;
  this.racing = true;
  console.log(this.name + "started");
  $('#' + this.name).html(`<img src="${this.imageUrl}">`);
// $('#player1').html('<img src="images/ferrari.png">');

}

//drive method that will be on all cars
Car.prototype.drive = function(key){

  if(key === this.key){
    if (this.position < 820){
      console.log(this.name + "drives one unit!")
      this.position += 20;
      console.log(this.position);
      $('#' + this.name).animate({left: '+=20px'}, 200);
    }
    else{
      this.racing = false;
      console.log(this.name + " finished the race");
    }
  }
}

//create two car objects
let car1 = new Car('player1', 100, 'images/ferrari.png');
let car2 = new Car('player2', 108, 'images/vw-blue.png');

//global variable for whether race is going or not
let raceOn = false;

$(document).ready(function(){

  //listen for user keypress
  $(document).on('keypress', function(event){
    // console.log("key is pressed")
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
  car1.start();
  car2.start();
  $('#begin').on('click', function(){
    console.log("The race is on, raceOn is " + true);
    raceOn = true;
  });
}
