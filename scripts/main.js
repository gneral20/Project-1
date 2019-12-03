let bss = 0;



let arr = ['', '', '',
    '', '', '',
    '', '', ''
]

const audioX = new Audio('../audio/click.mp3');
const audioY = new Audio('../audio/click.mp3');

const audioW = new Audio('../audio/');


let player1 = 0;
let player2 = 0;

let playerO = function (){
    $("#but1").click(function () {
        nam1 = prompt("Please enter your name", " ")
        $("#but1").text(nam1)
        $(".contNote > p:nth-child(1)").text(nam1)
    });

}

let playerX = function (){
    $("#but2").click(function () {
        nam2 = prompt("Please enter your name", " ")
        $("#but2").text(nam2)
        $(".contNote > p:nth-child(2)").text(nam2)
    });

}


playerO();
playerX();

function chickarr () {
    if (arr[0] == arr[1] && arr[0] == arr[2] && arr[0] != ""){
        setTimeout(function(){
            if (arr[0] == "O"){
                   player1 = player1 + 1;
                   console.log(player1);
                   $('div.res > p:nth-child(1)').text(player1)
                   alert($("#but1").text()+ " " + arr[0] + " " +"is the Winner");
            } else if (arr[0] == "X"){
                    player2 = player2 + 1;
                    console.log(player2);
                    $('div.res > p:nth-child(2)').text(player2)
                    alert($("#but2").text()+ " " + arr[0] + " " +"is the Winner");
            }
        },500)

    }else if(arr[0] == arr[3] && arr[0] == arr[6] && arr[0] != ""){
        setTimeout(function(){
            if (arr[0] == "O"){
                   player1 = player1 + 1;
                   console.log(player1);
                   $('div.res > p:nth-child(1)').text(player1)
                   alert($("#but1").text()+ " " + arr[0] + " " +"is the Winner");
            } else if (arr[0] == "X"){
                    player2 = player2 + 1;
                    console.log(player2);
                    $('div.res > p:nth-child(2)').text(player2)
                    alert($("#but2").text()+ " " + arr[0] + " " +"is the Winner");
            }
        },500)
    }else if(arr[0] == arr[4] && arr[0] == arr[8] && arr[0] != ""){
        setTimeout(function(){
            if (arr[0] == "O"){
                   player1 = player1 + 1;
                   console.log(player1);
                   $('div.res > p:nth-child(1)').text(player1)
                   alert($("#but1").text()+ " " + arr[0] + " " +"is the Winner");
            } else if (arr[0] == "X"){
                    player2 = player2 + 1;
                    console.log(player2);
                    $('div.res > p:nth-child(2)').text(player2)
                    alert($("#but2").text()+ " " + arr[0] + " " +"is the Winner");
            }
        },500)

    }else if(arr[1] == arr[4] && arr[1] == arr[7] && arr[1] != ""){
        setTimeout(function(){
            if (arr[1] == "O"){
                   player1 = player1 + 1;
                   console.log(player1);
                   $('div.res > p:nth-child(1)').text(player1)
                   alert($("#but1").text()+ " " + arr[1] + " " +"is the Winner");
            } else if (arr[1] == "X"){
                    player2 = player2 + 1;
                    console.log(player2);
                    $('div.res > p:nth-child(2)').text(player2)
                    alert($("#but2").text()+ " " + arr[1] + " " +"is the Winner");
            }
        },500)

    }else if(arr[2] == arr[5] && arr[2] == arr[8] && arr[2] != ""){
        setTimeout(function(){
            if (arr[2] == "O"){
                   player1 = player1 + 1;
                   console.log(player1);
                   $('div.res > p:nth-child(1)').text(player1)
                   alert($("#but1").text()+ " " + arr[2] + " " +"is the Winner");
            } else if (arr[2] == "X"){
                    player2 = player2 + 1;
                    console.log(player2);
                    $('div.res > p:nth-child(2)').text(player2)
                    alert($("#but2").text()+ " " + arr[2] + " " +"is the Winner");
            }
        },500)

    }else if(arr[2] == arr[4] && arr[2] == arr[6] && arr[2] != ""){
        setTimeout(function(){
            if (arr[2] == "O"){
                   player1 = player1 + 1;
                   console.log(player1);
                   $('div.res > p:nth-child(1)').text(player1)
                   alert($("#but1").text()+ " " + arr[2] + " " +"is the Winner");
            } else if (arr[2] == "X"){
                    player2 = player2 + 1;
                    console.log(player2);
                    $('div.res > p:nth-child(2)').text(player2)
                    alert($("#but2").text()+ " " + arr[2] + " " +"is the Winner");
            }
        },500)

    }else if(arr[3] == arr[4] && arr[3] == arr[5] && arr[3] != ""){
        setTimeout(function(){
            if (arr[3] == "O"){
                   player1 = player1 + 1;
                   console.log(player1);
                   $('div.res > p:nth-child(1)').text(player1)
                   alert($("#but1").text()+ " " + arr[3] + " " +"is the Winner");
            } else if (arr[3] == "X"){
                    player2 = player2 + 1;
                    console.log(player2);
                    $('div.res > p:nth-child(2)').text(player2)
                    alert($("#but2").text()+ " " + arr[3] + " " +"is the Winner");
            }
        },500)

    }else if(arr[6] == arr[7] && arr[6] == arr[8] && arr[6] != ""){
        setTimeout(function(){
            if (arr[6] == "O"){
                   player1 = player1 + 1;
                   console.log(player1);
                   $('div.res > p:nth-child(1)').text(player1)
                   alert($("#but1").text()+ " " + arr[6] + " " +"is the Winner");
            } else if (arr[6] == "X"){
                    player2 = player2 + 1;
                    console.log(player2);
                    $('div.res > p:nth-child(2)').text(player2)
                    alert($("#but2").text()+ " " + arr[6] + " " +"is the Winner");
            }
        },500)
    }
}

const startGame = function (event) {
    bss += 1;

    if (bss % 2 == 0) {
        audioX.play();
        $(event.target).text('X');
        arr[$(event.target).attr('id')] = "X";
        console.log(arr);
        $(event.target).css({
            color:"#935830",
            backgroundColor:'yellow',
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
$(function () {


    $(".contGame div").click(startGame)

    $('.contRest button').click(function () {
        arr = ['', '', '',
               '', '', '',
               '', '', ''
              ]

        $('.contGame div').text("");
        $('.contGame div').css({
            backgroundColor: "#935830",
        })
        $('.contGame div').off()
        $('.contGame div').on('click', startGame)


    });

    $('button.ci').click(function() {
        var i = $(this).attr('id').substring(1);           //get the index of button
        new Audio(baseUrl + audio[i - 1]).play();          //play corresponding audio
      });

})