var today= moment();

var dayOfWeek = moment().format('dddd, ' + "LL");   
$("#currentDay").text(dayOfWeek);


var saveButton = document.querySelector("#button")

saveButton.addEventListener("click", function(event) {
    event.preventDefault();

    var name = document.querySelector("#toDoList").value;
    window.localStorage.setItem("todaysEvents", name);
    console.log(name)
    console.log(localStorage)
    console.log(name)
    renderLastRegistered();
});
   function renderLastRegistered(){
    var name2 = document.querySelector("#toDoList");
    var nameFromLocalStorage = window.localStorage.getItem("todaysEvents")
    name2.value = nameFromLocalStorage 
    console.log(name2)
    console.log(name2.textContent = nameFromLocalStorage)

    }

    renderLastRegistered();