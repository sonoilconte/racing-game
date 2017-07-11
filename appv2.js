/*
To add:
**begin button event listener
  **run the race only after it's pushed
  **keep doing it while position is still below threshold
**when there's a win, stop the race
**reset button event listener- returns us to before we clicked begin
find the time it took each player to finish
increment score of the winning player

use timer that displays during race
record finishing times and put them in the DOM

add images for cars, and css to indicate a track
if time be sure the buttons are only active when the're supposed to be active

****more advanced later*****
-allow for car to change orientation
So there will be 3 buttons for each player- forward, rotate left, rotate right
the drive method will need to change based on what orientation is used at any given point
-add a circular track
-make it impossible for cars to overlap
*/

console.log("sanity check");

//car constructor
function Car(name, key){
  this.name = name;
  this.key = key;
  this.image = '';
}

//start method that will be on all cars
Car.prototype.start = function(){
  this.position = 0;
  this.racing = true;
}

//drive method that will be on all cars
Car.prototype.drive = function(key){

  if(key === this.key){
    if (this.position < 100){
      console.log(this.name + "drives one unit!")
      this.position += 10;
      $('#' + this.name).css('left', this.position + 'px');
    }
    else{
      this.racing = false;
      console.log(this.name + " finished the race");
    }
  }
}

//create two car objects
let car1 = new Car('player1', 100);
let car2 = new Car('player2', 108);

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
  $('#begin').on('click', function(){
    console.log("The race is on, raceOn is " + true);
    raceOn = true;
    car1.start();
    car2.start();
  });
}

//could put all of this race function as method on each car object

//
// function race(){
//   console.log("Start your engines...race!");
//
//   if (raceOn){
//     car1.racing = true;
//     car2.racing = true;
//
//     //listen for keypresses
//     $(document).on('keypress', function(event){
//       if(raceOn){
//         //if d pushed
//         if (!car1.racing && !car2.racing){
//           raceOn = false;
//           console.log("raceOn is " + raceOn);
//         }
//       }
//     });
//   }
//   else{
//     return;
//   }
// }
