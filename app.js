/*
To add:
**begin button event listener
  **run the race only after it's pushed
  **keep doing it while position is still below threshold
**when there's a win, stop the race
*reset button event listener- returns us to before we clicked begin
find the time it took each player to finish
increment score of the winning player

use timer that displays during race
record finishing times and put them in the DOM

Tomorrow as time allows

-add images for cars, and css to indicate a track
-allow for car to change orientation
So there will be 3 buttons for each player- forward, rotate left, rotate right
the drive method will need to change based on what orientation is used at any given point
-add a circular track
-make it impossible for cars to overlap
*/

console.log("sanity check");

//car constructor
function Car(name){
  this.name = name;
  this.position = 0;
  this.image = '';
  this.rank = null;
}

//global variable rank for keeping track of the ranks of the cars
// let rank = 1;

//car method that will be on all cars
Car.prototype.drive = function(){

  if (this.position < 100){
    console.log(this.name + "drove the car!")
    this.position += 10;
    $('#' + this.name).css('left', this.position + 'px');
  }
  else if (this.racing){
    this.rank = rank;
    rank += 1;
    this.racing = false;
    console.log(`${this.name} is ranked #${this.rank}!`);
  }

}

Car.prototype.start = function(){
  this.position = 0;
  this.rank = null;
}

//we will return 1 for the global variable rank such that we can rank the cars as the race goes
//
let rank = 1;

//create two car objects
let car1 = new Car('player1');
let car2 = new Car('player2');


function race(){
  console.log("Start your engines...race!");

  car1.racing = true;
  car2.racing = true;
  //listen for keypresses
    $(document).on('keypress', function(event){
      //if d pushed
      if (event.which === 100){
        car1.drive();
      }
      //if l pushed
      if (event.keyCode === 108){
        car2.drive();
      }
    });
}

$(document).ready(function(){
  car1.start();
  car2.start();
  $('#begin').on('click', function(){
    race();
  });

  $('#reset').on('click', function(){
    car1.start();
    car2.start();
    $('#' + car1.name).css('left', car1.position + 'px');
    $('#' + car2.name).css('left', car2.position + 'px');
  });
});
