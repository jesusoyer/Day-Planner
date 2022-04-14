var today= moment();


/// assigning variables to ID's from html documents
var firstDiv = $("#toDoList")
var secondDiv = $("#toDoList2")
var thirdDiv = $("#toDoList3")
var fourthDiv = $("#toDoList4")
var fifthDiv = $("#toDoList5")
var sixthDiv = $("#toDoList6")
var seventhDiv = $("#toDoList7")
var eighthDiv = $("#toDoList8")
var ninthDiv = $("#toDoList9")





//Displaying day of week and date at the top of page
var dayOfWeek = moment().format('dddd, ' + "LL");   
$("#currentDay").text(dayOfWeek);


 // function houses the conditionals for th input blocks
function colorBlocks(){

// conditional for the 9am input block    
if(moment(moment(today).hour(9)).isSame(today)){
    $("#toDoList").css("background-color", "lightgrey")
    $("#toDoList").css("color", "black")
} else if(moment(today).isAfter(moment(today).hour(9))){
    $("#toDoList").css("background-color", "red") 
    $("#toDoList").css("color", "white")
} else{
    $("#toDoList").css("background-color", "green")
    $("#toDoList").css("color", "white")
}


// conditional for the 10am input block
if(moment(moment(today).hour(10)).isSame(today)){
    $("#toDoList2").css("background-color", "lightgrey")
    $("#toDoList2").css("color", "black")
} else if(moment(today).isAfter(moment(today).hour(10))){
    $("#toDoList2").css("background-color", "red") 
    $("#toDoList2").css("color", "white")
} else{
    $("#toDoList2").css("background-color", "green")
    $("#toDoList2").css("color", "white")
}

// conditional for the 11am input block
if(moment(moment(today).hour(11)).isSame(today)){
    $("#toDoList3").css("background-color", "lightgrey")
    $("#toDoList3").css("color", "black")
} else if(moment(today).isAfter(moment(today).hour(11))){
    $("#toDoList3").css("background-color", "red")
    $("#toDoList3").css("color", "white")
} else{
    $("#toDoList3").css("background-color", "green") 
    $("#toDoList3").css("color", "white")
}
// conditional for the 12pm input block  
if(moment(moment(today).hour(12)).isSame(today)){
    $("#toDoList4").css("background-color", "lightgrey")
    $("#toDoList4").css("color", "black")
} else if(moment(today).isAfter(moment(today).hour(12))){
    $("#toDoList4").css("background-color", "red") 
    $("#toDoList4").css("color", "white")
} else{
    $("#toDoList4").css("background-color", "green")
    $("#toDoList4").css("color", "white")
}

// conditional for the 1pm input block  
if(moment(moment(today).hour(13)).isSame(today)){
    $("#toDoList5").css("background-color", "lightgrey")
    $("#toDoList5").css("color", "black")
} else if(moment(today).isAfter(moment(today).hour(13))){
    $("#toDoList5").css("background-color", "red")
    $("#toDoList5").css("color", "white")
} else{
    $("#toDoList5").css("background-color", "green")
    $("#toDoList5").css("color", "white")
}

// conditional for the 2pm input block 
if(moment(moment(today).hour(14)).isSame(today)){
    $("#toDoList6").css("background-color", "lightgrey")
    $("#toDoList6").css("color", "black")
} else if(moment(today).isAfter(moment(today).hour(14))){
    $("#toDoList6").css("background-color", "red") 
    $("#toDoList6").css("color", "white")
} else{
    $("#toDoList6").css("background-color", "green")
    $("#toDoList6").css("color", "white")
}

// conditional for the 3pm input block 
if(moment(moment(today).hour(15)).isSame(today)){
    $("#toDoList7").css("background-color", "lightgrey")
    $("#toDoList7").css("color", "black")
} else if(moment(today).isAfter(moment(today).hour(15))){
    $("#toDoList7").css("background-color", "red") 
    $("#toDoList7").css("color", "white")
} else{
    $("#toDoList7").css("background-color", "green")
    $("#toDoList7").css("color", "white")
}

// conditional for the 4pm input block 
if(moment(moment(today).hour(16)).isSame(today)){
    $("#toDoList8").css("background-color", "lightgrey")
    $("#toDoList8").css("color", "black")
} else if(moment(today).isAfter(moment(today).hour(16))){
    $("#toDoList8").css("background-color", "red") 
    $("#toDoList8").css("color", "white")
} else{
    $("#toDoList8").css("background-color", "green")
    $("#toDoList8").css("color", "white")
}

// conditional for the 5pm input block 
if(moment(moment(today).hour(17)).isSame(today)){
    $("#toDoList9").css("background-color", "lightgrey")
    $("#toDoList9").css("color", "black")
} else if(moment(today).isAfter(moment(today).hour(17))){
    $("#toDoList9").css("background-color", "red") 
    $("#toDoList9").css("color", "white")
} else{
    $("#toDoList9").css("background-color", "green") 
    $("#toDoList9").css("color", "white")
}
}








// storing and getting local storage item for the first input Div
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
// storing and getting local storage item for the second input Div
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
// storing and getting local storage item for the third input Div
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
// storing and getting local storage item for the fourth input Div
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
// storing and getting local storage item for the fifth input Div
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
// storing and getting local storage item for the sixth input Div
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
// storing and getting local storage item for the seventh input Div
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
// storing and getting local storage item for the eighth input Div
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
   // storing and getting local storage item for the ninth input Div
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


        // resets the entire day planner input area by clicking the reset button
    $("#reset").click(function(){
        
        localStorage.removeItem("todaysEvents");
        var removedsavedInput = window.localStorage.getItem("todaysEvents")
        firstDiv.val(removedsavedInput)

        localStorage.removeItem("todaysEvents2");
        var removedsavedInput2 = window.localStorage.getItem("todaysEvents2")
        secondDiv.val(removedsavedInput2)

        localStorage.removeItem("todaysEvents3");
        var removedsavedInput3 = window.localStorage.getItem("todaysEvents3")
        thirdDiv.val(removedsavedInput3)

        localStorage.removeItem("todaysEvents4");
        var removedsavedInput4 = window.localStorage.getItem("todaysEvents4")
        fourthDiv.val(removedsavedInput4)

        localStorage.removeItem("todaysEvents5");
        var removedsavedInput5 = window.localStorage.getItem("todaysEvents5")
        fifthDiv.val(removedsavedInput5)

        localStorage.removeItem("todaysEvents6");
        var removedsavedInput6 = window.localStorage.getItem("todaysEvents6")
        sixthDiv.val(removedsavedInput6)

        localStorage.removeItem("todaysEvents7");
        var removedsavedInput7 = window.localStorage.getItem("todaysEvents7")
        seventhDiv.val(removedsavedInput7)

        localStorage.removeItem("todaysEvents8");
        var removedsavedInput8 = window.localStorage.getItem("todaysEvents8")
        eighthDiv.val(removedsavedInput8)

        localStorage.removeItem("todaysEvents9");
        var removedsavedInput9 = window.localStorage.getItem("todaysEvents9")
        ninthDiv.val(removedsavedInput9)
        


    });




    // calls local storage functions to display on page
    getValue();
    getValue2();
    getValue3();
    getValue4();
    getValue5();
    getValue6();
    getValue7();
    getValue8();
    getValue9();

    //calls on the color block function to update every 10000 of a second
    setInterval(colorBlocks,10000)
    // calls the function that stores conditionals to be displayed on the page
    colorBlocks();