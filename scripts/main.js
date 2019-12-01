let bss = 0;



// let arr = ['','','',
//            '','','',
//            '','','']


           //o,
function checkX(){
    if ( $("#div1").text() === "X" && $("#div2").text() == "X" && $("#div3").text() == "X") {
        alert("You Win");
    } 
    else if ( $("#div1").text() === "X" && $("#div4").text() == "X" && $("#div7").text() == "X") {
        alert("Yow Win");
    }
    else if ( $("#div2").text() === "X" && $("#div5").text() == "X" && $("#div8").text() == "X") {
        alert("Yow Win");
    }
    else if ( $("#div3").text() === "X" && $("#div6").text() == "X" && $("#div9").text() == "X") {
        alert("Yow Win");
    }
    else if ( $("#div4").text() === "X" && $("#div5").text() == "X" && $("#div6").text() == "X") {
        alert("Yow Win");
    }
    else if ( $("#div7").text() === "X" && $("#div8").text() == "X" && $("#div9").text() == "X") {
        alert("Yow Win");
    }
    else if ( $("#div1").text() === "X" && $("#div5").text() == "X" && $("#div9").text() == "X") {
        alert("Yow Win");
    }
    else if ( $("#div3").text() === "X" && $("#div5").text() == "X" && $("#div7").text() == "X") {
        alert("Yow Win");
    }

}


function checkO(){
    if ( $("#div1").text() === "O" && $("#div2").text() == "O" && $("#div3").text() == "O") {
        alert("You Win");
    } 
    else if ( $("#div1").text() === "O" && $("#div4").text() == "O" && $("#div7").text() == "O") {
        alert("Yow Win");
    }
    else if ( $("#div2").text() === "O" && $("#div5").text() == "O" && $("#div8").text() == "O") {
        alert("Yow Win");
    }
    else if ( $("#div3").text() === "O" && $("#div6").text() == "O" && $("#div9").text() == "O") {
        alert("Yow Win");
    }
    else if ( $("#div4").text() === "O" && $("#div5").text() == "O" && $("#div6").text() == "O") {
        alert("Yow Win");
    }
    else if ( $("#div7").text() === "O" && $("#div8").text() == "O" && $("#div9").text() == "O") {
        alert("Yow Win");
    }
    else if ( $("#div1").text() === "O" && $("#div5").text() == "O" && $("#div9").text() == "O") {
        alert("Yow Win");
    }
    else if ( $("#div3").text() === "O" && $("#div5").text() == "O" && $("#div7").text() == "O") {
        alert("Yow Win");
    }

}



$(function () {

    $("#but1").click(function(){
       nam1 = prompt("Please enter your name", " ") + " " + "X"
       $("#but1").text(nam1)
    });

    $("#but2").click(function(){
        nam2 = prompt("Please enter your name", " ") + " " + "O" 
        $("#but2").text(nam2)
     });
    

    $("body > div > div.contButt > button:nth-child(1)").click(function (event) {
        // alert("h")
        $(event.target).input('')
    })

    $(".contGame div").click(function (event) {
        if (bss % 2 == 0) {
            $(event.target).text('X');
            $(event.target).off('');
            bss += 1;

        } else {
            $(event.target).text('O');
            $(event.target).off('');
            bss += 1;
        }
        checkX();
        checkO();
    })

    $('.contRest button').click(function(){
        $('.contGame div').text(" ")
    })

})

