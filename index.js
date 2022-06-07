//Declare let variables//
let services = [];
let amount = 0;
let car = "";
let lawn = "";
let weed = "";

//Set DOM manipulation to const variable//
const washCar = document.querySelector("#washcar");
const mowLawn = document.querySelector("#mowlawn");
const pullWeeds = document.querySelector("#pullweeds");
const selectedTask = document.querySelector("#selected-task");
const payOptions = document.querySelector("#pay-options");
const totalAmounts = document.querySelector("#total-amt");
const sendInvoice = document.querySelector("#send-invoice");

//Display payment option below Note in DOM//
let renderNotes = () => {
    if (payOptions.innerHTML === "") {
        payOptions.innerHTML = `We accept cash, credit card, or PayPal`;
    }   
}

//Display Total Amount//
let renderAmt = () => {
    totalAmounts.innerHTML = "$" + amount;
}

//Reset Invoice//
sendInvoice.addEventListener("click", () => {
    services = [];
    amount = 0;
    selectedTask.innerHTML = "";
    payOptions.innerHTML = "";
    totalAmounts.innerHTML = "$0";
});

//Remove Car Entry//
let removeCar = () => {
    //Find index of value "car" in services array and set to index variable//
    let index = services.indexOf(car);

    //Check if index exists in "services" array -> If exist, remove the value of index from "services" array//
    if (index !== -1){
        services.splice(index, 1);
    } 

    //Resets tasks displayed in browser to empty string//
    selectedTask.innerHTML = "";

    //Loop through "services" array and display new list of task in DOM//
    for (let i = 0; i < services.length; i++) {
        selectedTask.innerHTML += services[i];
    }

    //Reduce amount and render in DOM//
    amount -= 10;
    renderAmt();
}

//Remove Lawn Entry//
let removeLawn = () => {
    //Find index of value "lawn" in services array and set to index variable//
    let index = services.indexOf(lawn);

    //Check if index exists in "services" array -> If exist, remove the value of index from "services" array//
    if (index !== -1){
        services.splice(index, 1);
    } 

    //Resets tasks displayed in browser to empty string//
    selectedTask.innerHTML = "";

    //Loop through "services" array and display new list of task in DOM//
    for (let i = 0; i < services.length; i++) {
        selectedTask.innerHTML += services[i];
    }

    //Reduce amount and render in DOM//
    amount -= 20;
    renderAmt();
}

//Remove Weeds Entry//
let removeWeeds = () => {
    //Find index of value "weeds" in services array and set to index variable//
    let index = services.indexOf(weed);

    //Check if index exists in "services" array -> If exist, remove the value of index from "services" array//
    if (index !== -1){
        services.splice(index, 1);
    }

    //Resets tasks displayed in browser to empty string//
    selectedTask.innerHTML = "";

    //Loop through "services" array and display new list of task in DOM//
    for (let i = 0; i < services.length; i++) {
        selectedTask.innerHTML += services[i];
    }

    //Reduce amount and render in DOM//
    amount -= 30;
    renderAmt();
}

//Render Car Entry//
washCar.addEventListener("click", () => { 
    //Declare task variable and set value to car task for display in DOM//
    const task = `<div class="cont-align">
                    <div>Wash Car<span onclick="removeCar()">Remove</span></div>
                    <div>$10</div>
                </div>`;

    //Check if task exists in "services" array -> if task does not exist, push task in to "services" array, display task in DOM, increment amount, and set value of task into "car" variable//
    if (services.indexOf(task) === -1) {
        services.push(task);
        selectedTask.innerHTML += task;
        amount += 10;
        car = task;
    }
    
    renderNotes();
    renderAmt();
});

//Render Lawn Entry//
mowLawn.addEventListener("click", () => { 
    //Declare task variable and set value to lawn task for display in DOM//     
    const task = `<div class="cont-align">
                    <div>Mow Lawn<span onclick="removeLawn()">Remove</span></div>
                    <div>$20</div>
                </div>`;
    
    //Check if task exists in "services" array -> if task does not exist, push task in to "services" array, display task in DOM, increment amount, and set value of task into "lawn" variable//
    if (services.indexOf(task) === -1) {
        services.push(task);
        selectedTask.innerHTML += task;
        amount += 20;
        lawn = task;
    }
    
    renderNotes();
    renderAmt();
});

//Render Weed Entry//
pullWeeds.addEventListener("click", () => { 
    //Declare task variable and set value to weed task for display in DOM//      
    const task = `<div class="cont-align">
                    <div>Pull Weeds<span onclick="removeWeeds()">Remove</span></div>
                    <div>$30</div>
                </div>`;
    
    //Check if task exists in "services" array -> if task does not exist, push task in to "services" array, display task in DOM, increment amount, and set value of task into "weed" variable//
    if (services.indexOf(task) === -1) {
        services.push(task);
        selectedTask.innerHTML += task;
        amount += 30;
        weed = task;
    }

    renderNotes();
    renderAmt();
});




