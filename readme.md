<!--
Creator: <Name>
Location: SF
-->

![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

## Project 0- Build a Racing Game!

My racing game has two cars that race across the screen. There's a begin button, and a reset button. You can't start racing until you click begin. The cars move in 20px increments and use a 150 ms animation to make it look a bit smoother. When a car makes it to the finish, its rank is appended in the DOM, so we see each rank when we're done.

## Technologies used

-HTML
-CSS
-Javascript
-Jquery
-Google fonts

## User story for racing game
 - users sees a screen with two car icons on it
 - users push begin to race
 - each player has a button they push to advance their car, the faster they push it, the faster it moves across the screen
    - in more advanced version, they will also control the direction of their car, and they race in 2 dimensions, on a 2-D track
- when a car reaches finish line, record the rank of that car
    -in more advanced version, include a running timer on the screen render the finishing time of each car

## Objects used

car - position - number
    - url for image
    - is the car currently racing?
    - method - drive - changes the position of the car
    - method - start - 'starts' the car by putting it at the starting line, setting isRacing to true, and rendering the car on the screen
    Later-
    - method - cannot pass, in 2 d, one car must go around the other to pass

Later-
track - length
      - width if 2-D track

game - score
     - method - reset the game/track
     - method - keep track of score and render

## Code example
### Car Object


```javascript
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
  $('#' + this.name).html(`<img src="${this.imageUrl}">`);

}

//variable to keep track of car ranks
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
        // console.log(this.name + " finished the race");
      }
    }
  }
}

//create two car objects
let car1 = new Car('Ferrari', 100, 'images/ferrari.png');
let car2 = new Car('Bug', 107, 'images/vw-blue.png');

```
