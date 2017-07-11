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
  this.image = '';
  // this.racing = false;
  // this.position = 0;
  // this.rank = null;
}

Car.prototype.start = function(){
  this.position = 0;
  this.racing = false;
  // this.rank = null;
}

//car method that will be on all cars
Car.prototype.drive = function(){

  if (this.racing){
    console.log(this.name + "drives one unit!")
    this.position += 10;
    $('#' + this.name).css('left', this.position + 'px');
  }
  // else if (this.racing){
  //   // this.rank = rank;
  //   // rank += 1;
  //   this.racing = false;
  //   // console.log(`${this.name} is ranked #${this.rank}!`);
  // }

}
//we will return 1 for the global variable rank such that we can rank the cars as the race goes
//
// let rank = 1;

//create two car objects
let car1 = new Car('player1');
let car2 = new Car('player2');


let raceOn = false;

$(document).ready(function(){

  $('#begin').on('click', function(){
    raceOn = true;
    car1.start();
    car2.start();
    race();
  });

  $('#reset').on('click', function(){
    car1.start();
    car2.start();
    $('#' + car1.name).css('left', car1.position + 'px');
    $('#' + car2.name).css('left', car2.position + 'px');
  });

});

//could put all of this race function as method on each car object
function race(){
  console.log("Start your engines...race!");

  if (raceOn){
    car1.racing = true;
    car2.racing = true;

    //listen for keypresses
    $(document).on('keypress', function(event){
      if(raceOn){
        //if d pushed
        if(event.which === 100){
          if (car1.position < 100){
            car1.drive();
          }
          else{
            car1.racing = false;
            console.log("car 1 finished");
          }
        }
        //if l pushed
        if (event.keyCode === 108){
          if(car2.position < 100){
            car2.drive();
          }
          else{
            car2.racing = false;
            console.log("car 2 finished");
          }
        }
        if (!car1.racing && !car2.racing){
          raceOn = false;
          console.log("raceOn is " + raceOn);
        }
      }
    });
  }
  else{
    return;
  }
}
