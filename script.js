var today= moment();

var dayOfWeek = moment().format('dddd, ' + "LL");   
$("#currentDay").text(dayOfWeek);

var firstDiv = $("#toDoList")
var secondDiv = $("#toDoList2")
var thirdDiv = $("#toDoList3")







$("#button").click(function(event){
    event.preventDefault();
    var name = firstDiv.val();
    window.localStorage.setItem("todaysEvents", name);
    getValue();
});



function getValue(){
    var nameFromLocalStorage = window.localStorage.getItem("todaysEvents")
    firstDiv.val(nameFromLocalStorage)
    }




    getValue();