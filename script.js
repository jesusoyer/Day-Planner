var today= moment();

var dayOfWeek = moment().format('dddd, ' + "LL");   
$("#currentDay").text(dayOfWeek);


var dayTime = moment().format('LT');
console.log(dayTime)

var timeOfDay = moment().subtract(1,"hour").format("h:a");
console.log(timeOfDay)
 

var startTime = moment(today).hour(9);//9am
console.log(startTime)

var nextHour = startTime.add(1,"hour") //10am
console.log(nextHour)

var nextHour2 = startTime.add(2,"hour")//11am
console.log(nextHour2)

var nextHour3 = startTime.add(3,"hour")//12am
console.log(nextHour3)

var nextHour4 = startTime.add(4,"hour")//12am
console.log(nextHour4)

// var future=moment().add(3, 'hour').format("h:a")
// console.log(future)


// var setTime = moment().set('hour:a', 5);
 
//  console.log(setTime)

if(dayTime>timeOfDay){
    $("#toDoList").css("background-color", "red")        
    console.log("it worked")
} 

// let classOfHour=""

// let rowHr = moment(today).hour(9); 
// console.log(rowHr)

// if (today.isBefore(rowHr, "hour")) {
//     classOfHour = "future"
//     console.log(classOfHour)
// } else if (today.isAfter(rowHr, "hour")) {
//     classOfHour = "past"
//     console.log(classOfHour)
// } else {
//     classOfHour = "present"
//     console.log(classOfHour)
// }

console.log()









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