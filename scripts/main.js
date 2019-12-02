let bss = 0;



let arr = ['', '', '',
    '', '', '',
    '', '', ''
]






// function checkX() {
//     if ($("#0").text() === "X" && $("#1").text() == "X" && $("#2").text() == "X") {
//         $("#div1, #div2, #div3").css("color", "red");
//         setTimeout(function () {
//             alert("Player1 is Win")
//         }, 500);
       
//     } else if ($("#0").text() === "X" && $("#3").text() == "X" && $("#6").text() == "X") {
//         setTimeout(function () {
//             alert("Player1 is Win")
//         }, 500);
//     } else if ($("#1").text() === "X" && $("#4").text() == "X" && $("#7").text() == "X") {
//         setTimeout(function () {
//             alert("Player1 is Win")
//         }, 500);
//     } else if ($("#2").text() === "X" && $("#5").text() == "X" && $("#8").text() == "X") {
//         setTimeout(function () {
//             alert("Player1 is Win")
//         }, 500);
//     } else if ($("#3").text() === "X" && $("#4").text() == "X" && $("#5").text() == "X") {
//         setTimeout(function () {
//             alert("Player1 is Win")
//         }, 500);
//     } else if ($("#6").text() === "X" && $("#7").text() == "X" && $("#8").text() == "X") {
//         setTimeout(function () {
//             alert("Player1 is Win")
//         }, 500);
//     } else if ($("#0").text() === "X" && $("#4").text() == "X" && $("#8").text() == "X") {
//         setTimeout(function () {
//             alert("Player1 is Win")
//         }, 500);
//     } else if ($("#2").text() === "X" && $("#4").text() == "X" && $("#6").text() == "X") {
//         setTimeout(function () {
//             alert("Player1 is Win")
//         }, 500);
//     }

// }


// function checkO() {
//     if ($("#div1").text() === "O" && $("#div2").text() == "O" && $("#div3").text() == "O") {
//         setTimeout(function () {
//             alert("Player 2 Won")
//         }, 500);
//     } else if ($("#div1").text() === "O" && $("#div4").text() == "O" && $("#div7").text() == "O") {
//         setTimeout(function () {
//             alert("Player 2 Won")
//         }, 500);
//     } else if ($("#div2").text() === "O" && $("#div5").text() == "O" && $("#div8").text() == "O") {
//         setTimeout(function () {
//             alert("Player 2 Won")
//         }, 500);
//     } else if ($("#div3").text() === "O" && $("#div6").text() == "O" && $("#div9").text() == "O") {
//         setTimeout(function () {
//             alert("Player 2 Won")
//         }, 500);
//     } else if ($("#div4").text() === "O" && $("#div5").text() == "O" && $("#div6").text() == "O") {
//         setTimeout(function () {
//             alert("Player 2 Win")
//         }, 500);
//     } else if ($("#div7").text() === "O" && $("#div8").text() == "O" && $("#div9").text() == "O") {
//         alert("Yow Win");
//     } else if ($("#div1").text() === "O" && $("#div5").text() == "O" && $("#div9").text() == "O") {
//         alert("Yow Win");
//     } else if ($("#div3").text() === "O" && $("#div5").text() == "O" && $("#div7").text() == "O") {
//         alert("Yow Win");
//     }

// }
let playerO = function (){
    $("#but1").click(function () {
        nam1 = prompt("Please enter your name", " ")
        $("#but1").text(nam1)
    });

}

let playerX = function (){
    $("#but2").click(function () {
        nam2 = prompt("Please enter your name", " ")
        $("#but2").text(nam2)
    });

}


playerO();
playerX();

function chickarr () {
    if (arr[0] == arr[1] && arr[0] == arr[2] && arr[0] != ""){
        setTimeout(function(){
            if ($("#but1").text()){
                Swal.fire(
                   'Good Job!'+ $("#but1").text(),
                   'You Won the Game',
                   )
            } else if ($("#but2").text()){
                Swal.fire(
                    'Good Job!'+ $("#but2").text(),
                    'You Won the Game',
                    )} 
        },500)
    }else if(arr[0] == arr[3] && arr[0] == arr[6] && arr[0] != ""){
        setTimeout(function(){
            if ($("#but1").text()){
                Swal.fire(
                   'Good Job!'+ $("#but1").text(),
                   'You Won the Game',
                   )
            } else if ($("#but2").text()){
                Swal.fire(
                    'Good Job!'+ $("#but2").text(),
                    'You Won the Game',
                    )} 
        },500)
    }else if(arr[0] == arr[4] && arr[0] == arr[8] && arr[0] != ""){
        setTimeout(function(){
            if ($("#but1").text()){
                Swal.fire(
                   'Good Job!'+ $("#but1").text(),
                   'You Won the Game',
                   )
            } else if ($("#but2").text()){
                Swal.fire(
                    'Good Job!'+ $("#but2").text(),
                    'You Won the Game',
                    )} 
        },500)
    }else if(arr[1] == arr[4] && arr[1] == arr[7] && arr[1] != ""){
        setTimeout(function(){
            if ($("#but1").text()){
                Swal.fire(
                   'Good Job!'+ $("#but1").text(),
                   'You Won the Game',
                   )
            } else if ($("#but2").text()){
                Swal.fire(
                    'Good Job!'+ $("#but2").text(),
                    'You Won the Game',
                    )} 
        },500)
    }else if(arr[2] == arr[5] && arr[2] == arr[8] && arr[2] != ""){
        setTimeout(function(){
            if ($("#but1").text()){
                Swal.fire(
                   'Good Job!'+ $("#but1").text(),
                   'You Won the Game',
                   )
            } else if ($("#but2").text()){
                Swal.fire(
                    'Good Job!'+ $("#but2").text(),
                    'You Won the Game',
                    )} 
        },500)
    }else if(arr[2] == arr[4] && arr[2] == arr[6] && arr[2] != ""){
        setTimeout(function(){
            if ($("#but1").text()){
                Swal.fire(
                   'Good Job!'+ $("#but1").text(),
                   'You Won the Game',
                   )
            } else if ($("#but2").text()){
                Swal.fire(
                    'Good Job!'+ $("#but2").text(),
                    'You Won the Game',
                    )} 
        },500)
    }else if(arr[3] == arr[4] && arr[3] == arr[5] && arr[3] != ""){
        setTimeout(function(){
            if ($("#but1").text()){
                Swal.fire(
                   'Good Job!'+ $("#but1").text(),
                   'You Won the Game',
                   )
            } else if ($("#but2").text()){
                Swal.fire(
                    'Good Job!'+ $("#but2").text(),
                    'You Won the Game',
                    )} 
        },500)
    }else if(arr[6] == arr[7] && arr[6] == arr[8] && arr[6] != ""){
        setTimeout(function(){
            if ($("#but1").text()){
                Swal.fire(
                   'Good Job!'+ $("#but1").text(),
                   'You Won the Game',
                   )
            } else if ($("#but2").text()){
                Swal.fire(
                    'Good Job!'+ $("#but2").text(),
                    'You Won the Game',
                    )} 
        },500)
    }
}

const startGame = function (event) {
    bss += 1;

    if (bss % 2 == 0) {
        $(event.target).text('X');
        arr[$(event.target).attr('id')] = "X";
        console.log(arr);
        $(event.target).css({
            color:"#935830",
            backgroundColor:'yellow',
        });
        $(event.target).off('');


    } else {
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

    // checkX();
    // checkO();
    // chickarr();
}
$(function () {

    // $("#but1").click(function () {
    //     nam1 = prompt("Please enter your name", " ") + " " + "X"
    //     $("#but1").text(nam1)
    // });

    // $("#but2").click(function () {
    //     nam2 = prompt("Please enter your name", " ") + " " + "O"
    //     $("#but2").text(nam2)
    // });


    $("body > div > div.contButt > button:nth-child(1)").click(function (event) {
        $(event.target).input('')
    })


    $(".contGame div").click(startGame)

    $('.contRest button').click(function () {
        arr = []
        $('.contGame div').text("");
        $('.contGame div').off()
        $('.contGame div').on('click', startGame)


    });

})