var today= moment();
console.log(today)
var dayOfWeek = moment().format('dddd, ' + "LL");   
$("#currentDay").text(dayOfWeek);


var dayTime = moment().format('LT');
console.log(dayTime)
 

var startTime = moment(today).hour(9);//9am
console.log(startTime)

var startTime2 = moment(today).hour(10);//9am
console.log(startTime2)

var startTime3 = moment(today).hour(11);//11am
console.log(startTime3)

var startTime4 = moment(today).hour(12);//12pm
console.log(startTime4)

var startTime5 = moment(today).hour(13);//1pm
console.log(startTime5)

var startTime6 = moment(today).hour(14);//2pm
console.log(startTime6)

var startTime7 = moment(today).hour(15);//3pm
console.log(startTime7)

var startTime8 = moment(today).hour(16);//4pm
console.log(startTime8)

var startTime9 = moment(today).hour(17);//5pm
console.log(startTime9)

function colorBlocks(){
    
if(moment(startTime).isSame(today)){
    $("#toDoList").css("background-color", "lightgrey")
} else if(moment(today).isAfter(startTime)){
    $("#toDoList").css("background-color", "red") 
} else{
    $("#toDoList").css("background-color", "green") 
}



if(moment(startTime2).isSame(today)){
    $("#toDoList2").css("background-color", "lightgrey")
} else if(moment(today).isAfter(startTime2)){
    $("#toDoList2").css("background-color", "red") 
} else{
    $("#toDoList2").css("background-color", "green") 
}


if(moment(startTime3).isSame(today)){
    $("#toDoList3").css("background-color", "lightgrey")
} else if(moment(today).isAfter(startTime3)){
    $("#toDoList3").css("background-color", "red") 
} else{
    $("#toDoList3").css("background-color", "green") 
}

if(moment(startTime4).isSame(today)){
    $("#toDoList4").css("background-color", "lightgrey")
} else if(moment(today).isAfter(startTime4)){
    $("#toDoList4").css("background-color", "red") 
} else{
    $("#toDoList4").css("background-color", "green") 
}


if(moment(startTime5).isSame(today)){
    $("#toDoList5").css("background-color", "lightgrey")
} else if(moment(today).isAfter(startTime5)){
    $("#toDoList5").css("background-color", "red") 
} else{
    $("#toDoList5").css("background-color", "green") 
}


if(moment(startTime6).isSame(today)){
    $("#toDoList6").css("background-color", "lightgrey")
} else if(moment(today).isAfter(startTime6)){
    $("#toDoList6").css("background-color", "red") 
} else{
    $("#toDoList6").css("background-color", "green") 
}


if(moment(startTime7).isSame(today)){
    $("#toDoList7").css("background-color", "lightgrey")
} else if(moment(today).isAfter(startTime7)){
    $("#toDoList7").css("background-color", "red") 
} else{
    $("#toDoList7").css("background-color", "green") 
}


if(moment(startTime8).isSame(today)){
    $("#toDoList8").css("background-color", "lightgrey")
} else if(moment(today).isAfter(startTime8)){
    $("#toDoList8").css("background-color", "red") 
} else{
    $("#toDoList8").css("background-color", "green") 
}


if(moment(startTime9).isSame(today)){
    $("#toDoList9").css("background-color", "lightgrey")
} else if(moment(today).isAfter(startTime9)){
    $("#toDoList9").css("background-color", "red") 
} else{
    $("#toDoList9").css("background-color", "green") 
}
}




var firstDiv = $("#toDoList")
var secondDiv = $("#toDoList2")
var thirdDiv = $("#toDoList3")
var fourthDiv = $("#toDoList4")
var fifthDiv = $("#toDoList5")
var sixthDiv = $("#toDoList6")
var seventhDiv = $("#toDoList7")
var eighthDiv = $("#toDoList8")
var ninthDiv = $("#toDoList9")





$("#button1").click(function(event){
    event.preventDefault();
    var name = firstDiv.val();
    window.localStorage.setItem("todaysEvents", name);
    getValue();
});

function getValue(){
    var nameFromLocalStorage = window.localStorage.getItem("todaysEvents")
    firstDiv.val(nameFromLocalStorage)
    }
//////////////////////////////////////////////////////////////////
    $("#button2").click(function(event){
        event.preventDefault();
        var name2 = secondDiv.val();
        window.localStorage.setItem("todaysEvents2", name2);
        getValue2();
    });
    function getValue2(){
        var nameFromLocalStorage2 = window.localStorage.getItem("todaysEvents2")
        secondDiv.val(nameFromLocalStorage2)
        }
//////////////////////////////////////////////////////////////////
        $("#button3").click(function(event){
            event.preventDefault();
            var name3 = thirdDiv.val();
            window.localStorage.setItem("todaysEvents3", name3);
            getValue3();
        });
        
        function getValue3(){
            var nameFromLocalStorage3 = window.localStorage.getItem("todaysEvents3")
            thirdDiv.val(nameFromLocalStorage3)
            }
///////////////////////////////////////////////////////////////////
$("#button4").click(function(event){
    event.preventDefault();
    var name4 = fourthDiv.val();
    window.localStorage.setItem("todaysEvents4", name4);
    getValue4();
});

function getValue4(){
    var nameFromLocalStorage4 = window.localStorage.getItem("todaysEvents4")
    fourthDiv.val(nameFromLocalStorage4)
    }
//////////////////////////////////////////////////////////////////
$("#button5").click(function(event){
    event.preventDefault();
    var name5 = fifthDiv.val();
    window.localStorage.setItem("todaysEvents5", name5);
    getValue5();
});

function getValue5(){
    var nameFromLocalStorage5 = window.localStorage.getItem("todaysEvents5")
    fifthDiv.val(nameFromLocalStorage5)
    }
//////////////////////////////////////////////////////////////
$("#button6").click(function(event){
    event.preventDefault();
    var name6 = sixthDiv.val();
    window.localStorage.setItem("todaysEvents6", name6);
    getValue5();
});

function getValue6(){
    var nameFromLocalStorage6 = window.localStorage.getItem("todaysEvents6")
    sixthDiv.val(nameFromLocalStorage6)
    }
////////////////////////////////////////////////////////////// 
$("#button7").click(function(event){
    event.preventDefault();
    var name7 = seventhDiv.val();
    window.localStorage.setItem("todaysEvents7", name7);
    getValue7();
});

function getValue7(){
    var nameFromLocalStorage7 = window.localStorage.getItem("todaysEvents7")
    seventhDiv.val(nameFromLocalStorage7)
    }
///////////////////////////////////////////////////////////////////
$("#button8").click(function(event){
    event.preventDefault();
    var name8 = eighthDiv.val();
    window.localStorage.setItem("todaysEvents8", name8);
    getValue8();
});

function getValue8(){
    var nameFromLocalStorage8 = window.localStorage.getItem("todaysEvents8")
    eighthDiv.val(nameFromLocalStorage8)
    }
 ////////////////////////////////////////////////////////////////   
 $("#button9").click(function(event){
    event.preventDefault();
    var name9 = ninthDiv.val();
    window.localStorage.setItem("todaysEvents9", name9);
    getValue9();
});

function getValue9(){
    var nameFromLocalStorage9 = window.localStorage.getItem("todaysEvents9")
    ninthDiv.val(nameFromLocalStorage9)
    }



    
    getValue();
    getValue2();
    getValue3();
    getValue4();
    getValue5();
    getValue6();
    getValue7();
    getValue8();
    getValue9();

    setInterval(colorBlocks,10000)
    colorBlocks();