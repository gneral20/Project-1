<!-- Heading Part -->
# Project: Tic Tac Toe

The project is a Tic Tac Toe game witch incolde two players
and they have to insert their names and it inclode a score bar showing how many winns for both players.



<!-- Unorder List -->
* js
* jquery

- Front End
    * HTML
    * CSS


<!-- Order List -->    
[Google](http://google.com)

<!-- images -->
![wireframne]()

---

### Rest function



# Project NAME_OF_GAME
## My Project Deployment
## Technologies used in the project
* Git
* Github
* HTML
* CSS
* JavaScript
* CSS
* jQuery
* Sweet Alert
* I made the website responsive to fit on mobiles screen.
## wireframes and user stories.
User Need:
I need to know whos turn in the game.
To have a score bar saving my scores for each game.
To have a button that reset the game if i want without effecting the scores.
I need some sounds and images effects.

## Planning and Development Process
* I plan my project on paper and drow some design.
* I satrte creating the project folder and inside it all my project folders and HTML file.
* I created my HTML page using Visual Studio.
* After that I design and improve my game page with CSS.
* Then i study the logic of my game and how it will be done.
* I start wroting the JavaScript code and adding some rolls, sunds and movment effects to the elments.
* The Game Is Ready.
# Describe any lines or function in the code
## Switching Players Function

```js

const startGame = function (event) {
    bss += 1;

    if (bss % 2 == 0) {
        audioX.play();
        $(event.target).text('X');
        arr[$(event.target).attr('id')] = "X";
        console.log(arr);
        $(event.target).css({
            color:"yellow",
            backgroundColor:'#935830',
        });
        $(event.target).off('');


    } else {
        audioX.play();
        $(event.target).text('O');
        arr[$(event.target).attr('id')] = "O";
        console.log(arr);
        $(event.target).css({
            color: 'yellow',
            backgroundColor:"#935830",
        });
        $(event.target).off('');

    }
    chickarr(); 

}

```
## Challenges
# Unsolved problems which would be fixed in future iterations.