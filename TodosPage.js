let themecheckbox = document.getElementById("switch");
let container = document.querySelector(".container");
let userGreeting = document.querySelector(".greeting")
let fullName = document.querySelector(".username")
let crossIcon = document.querySelector(".crossIcon")
let userName = localStorage.getItem("lastName")
let surName = localStorage.getItem("firstName")
let addButton = document.querySelector(".todoForm");
let todoInput = document.querySelector(".todoInput");
let todosList = document.querySelector(".todosList");
let displayContainer = document.querySelector(".displayContainer")

let todosConatiner = document.querySelector(".todosContainer")
let fitnessContainer = document.querySelector(".fitnessContainer")
let funZoneContainer = document.querySelector(".funZoneContainer")

let todoLi = document.getElementById("todos");
let fitnessLi = document.getElementById("fitness");
let funLi = document.getElementById("fun");

// ---------------------- pomodoro ---------------------
 
let logoBtn = document.querySelector(".pomodoro");

let pomodoroPopup = document.querySelector(".pomodoroPopup")

let pomoTimer = document.querySelector(".pomoTimer");

let minusBtn = document.querySelector(".closingMinus");

let closePomoBtn = document.querySelector(".pomoXIcon")

let pomoResetBtn = document.querySelector(".pomoResetBtn");

let pomoStartBtn = document.querySelector(".pomoStartBtn");


logoBtn.onclick = function(){
   
   pomodoroPopup.style.display = "flex"
}



minusBtn.onclick = function(){
    pomodoroPopup.style.display = "none"
}

closePomoBtn.onclick = function(){
    clicked = false
 clearInterval(counterId)
 pomoTimer.textContent = "00:00";
 counterNum = 1500;
  pomodoroPopup.style.display = "none"
}

let counterNum = 1500;

let counterId;

let clicked = false;

pomoStartBtn.onclick = function(){
    if(!clicked){ 
        clicked = true
    counterId = setInterval(() => {
               
               let minutes = Math.ceil(counterNum  / 60) -1 ;
                let seconds = counterNum % 60;
                let time = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                pomoTimer.textContent = time
                counterNum-=1
                if(counterNum === -1 ){
                clearInterval(counterId)
                pomoTimer.textContent = "00:00"
               }
    }, 1000);
   }else{
    document.querySelector(".pomoAlert").style.display ="block"
    setTimeout( () => {
      document.querySelector(".pomoAlert").style.display ="none"
    }, 5000)
   }
}


pomoResetBtn.onclick = function(){
 clicked = false
 clearInterval(counterId)
 pomoTimer.textContent = "25:00";
 counterNum = 1500;
}


let image = document.querySelector('.profile');
let fileInput = document.querySelector(".imageInput");

let userProfileImg = localStorage.getItem("userProfile")

if(userProfileImg){
    image.src = userProfileImg;
}

fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0]; 
    if (file) {
      const reader = new FileReader()

      reader.onload = (e) => {
        const imageString =  e.target.result;
        localStorage.setItem("userProfile" , imageString)
        image.src = imageString 
      }
      
      reader.readAsDataURL(file)
        
     }
     

});








todoLi.addEventListener("click", () => {
  todosConatiner.style.display = "block"
    fitnessContainer.style.display = "none"
    funZoneContainer.style.display = "none"

    todoLi.classList.add("active");
    fitnessLi.classList.remove("active");
    funLi.classList.remove("active");

    if (lightTheme) {
        container.style.backgroundImage = "url('/Images/backgroundImage.jpg')"
    }
    else{
        container.style.backgroundImage = "url('/Images/darkThemeImage.jpg')"
    }
})


let logoutBtn =  document.querySelector(".logoutBtn");
let logoutPopup = document.querySelector(".logoutPopup");
let closeBtn = document.querySelector(".activeBtn");
let confirmBtn = document.querySelector(".confirmBtn");

closeBtn.onclick = function(){
    logoutPopup.style.display = "none"
}

confirmBtn.onclick = function(){
    logoutPopup.style.display = "none"
    window.location.href = "loginPage.html"
    localStorage.setItem("loginStatus", "false")
}

let popup = false
logoutBtn.addEventListener("click", (e)=> {
    e.stopPropagation()
    if(popup){
        logoutPopup.style.display = "none"
        popup = false
    }
    else{
      logoutPopup.style.display = "block";
      popup = true
    }
})


let loginStatus = localStorage.getItem("loginStatus")

if(loginStatus === "false"){
    window.location.href = "loginPage.html"
}


fitnessLi.addEventListener("click" , () => {

  todosConatiner.style.display = "none"
    fitnessContainer.style.display = "block"
    funZoneContainer.style.display = "none"

    todoLi.classList.remove("active")
    fitnessLi.classList.add("active");
    funLi.classList.remove("active");
    container.style.backgroundImage = "radial-gradient(#fff, lightgreen, rgb(246, 245, 238))";
})
    
funLi.addEventListener("click", () => {
  todosConatiner.style.display = "none"
    fitnessContainer.style.display = "none"
    funZoneContainer.style.display = "flex"

    todoLi.classList.remove("active")
    fitnessLi.classList.remove("active");
    funLi.classList.add("active");
})
    


userGreeting.textContent = `hi ${userName} welcome back!`

fullName.textContent = surName + " " + userName



let lightTheme = true;
themecheckbox.addEventListener('change', function() {
    if (this.checked) {
        lightTheme = false;
        container.style.backgroundImage = "url('/Images/darkThemeImage.jpg')"
    }
    else{
        container.style.backgroundImage = "url('/Images/backgroundImage.jpg')"
        
        lightTheme = true;
    }
});


// Add functionality to add todo item


function getData() {
    let data = localStorage.getItem("todos");   
    if (data === null){
        return []
    }
    else{

        return JSON.parse(data)
    }
}

let ArrayList = getData();
function ondelete(id){
    ArrayList = ArrayList.filter((item) => item.id !== id)
    save();
    document.getElementById(id).remove();
}

function openPopUp(List){
    
    let popUpcontainer = document.createElement("div");
    popUpcontainer.classList.add("popUpContainer")
    popUpcontainer.style.display = "block"
    let flexCon = document.createElement("div");
    flexCon.classList.add("flexCon");
    popUpcontainer.appendChild(flexCon)
    let crossIcon = document.createElement("i");
    crossIcon.classList.add("fa-solid");
    crossIcon.classList.add("fa-xmark");
    crossIcon.classList.add("crossIcon");
    
    crossIcon.onclick = function(){
        popUpcontainer.style.display = "none"
    }
    popUpcontainer.appendChild(crossIcon)
    
    let alignCon = document.createElement("div")
    alignCon.classList.add("alignCon")

    let timerCon = document.createElement("div")
     
     timerCon.classList.add("timerCon");
     let timepara = document.createElement("p");
    timepara.textContent = "00:00:00"
    timerCon.appendChild(timepara)
    alignCon.appendChild(timerCon)
    
    
    let buttonsCon = document.createElement("div")
    buttonsCon.classList.add("buttonsCon")
    let stopWorkingBtn = document.createElement("button")
    stopWorkingBtn.classList.add("endBtn")
    stopWorkingBtn.textContent = "END"

    function saveStudyListitems(id, duration, dateTime){
        for (let item of ArrayList){
            if (item.id === id){
                let obj = {duration, dateTime}
                item.todoDetails.push(obj)
                break;
            }  
        }
        save()
    }   



    function createAndAppendHistoryItems(duration, dateTime){
        
        let historyitems = document.createElement("li")
        historyitems.textContent = `You worked for ${duration} on ${dateTime}`
        ul.appendChild(historyitems)
    }
    
    stopWorkingBtn.onclick = function(){
        let date = new Date()
        let dateTime = (`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} / ${date.getHours() < 12 ? (date.getHours() + 1) + " AM" : (date.getHours() - 12) + " PM"}`)
        timeCount = 0;
        clearInterval(timerId);
        playOrPause.textContent = "Play"
        createAndAppendHistoryItems(timepara.textContent, dateTime)
        saveStudyListitems(List.id, timepara.textContent, dateTime) 
        timepara.textContent = "00:00:00"
    }
    
    

    buttonsCon.appendChild(stopWorkingBtn)
     let playOrPause = document.createElement("button");
     playOrPause.classList.add("pauseBtn")
        playOrPause.textContent = "Pause"
        playOrPause.onclick = function(){
            if (playOrPause.textContent === "Pause"){
                clearInterval(timerId);
                playOrPause.textContent = "Play"
            }
            else{
                timerId = setInterval(() => {
                    timeCount+=1
                    let hours = Math.round(timeCount / 3600);
                let minutes = Math.round((timeCount % 3600) / 60);
                let seconds = timeCount % 60;
                let time = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                timepara.textContent = time
                }, 1000);
                playOrPause.textContent = "Pause"
            }
        }

     buttonsCon.appendChild(playOrPause)
    alignCon.appendChild(buttonsCon)
    flexCon.appendChild(alignCon)
     let ul = document.createElement("ul")
    ul.classList.add("historyList")
    ul.style.listStyleType = "none"
    ul.style.padding = "0"
    ul.style.marginTop = "20px"
    flexCon.appendChild(ul)


    displayContainer.appendChild(popUpcontainer)

    let timeCount = 0; // Example time count in seconds
    
    let timerId = setInterval(() => {
        timeCount+=1
        let hours = Math.round(timeCount / 3600);
    let minutes = Math.round((timeCount % 3600) / 60);
    let seconds = timeCount % 60;
    let time = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    timepara.textContent = time
    }, 1000);

        
    let listItemsData = List.todoDetails
    for (let item of listItemsData){
        createAndAppendHistoryItems(item.duration, item.dateTime)
    };

    let statusBtn = document.createElement("button");
        List.status === "completed" ? statusBtn.classList.add("statusBtnYellow"): statusBtn.classList.add("statusBtnGreen")
        List.status === "completed" ? statusBtn.textContent = "Mark as In Progress" :
        statusBtn.textContent = List.status !== "completed" ? "Mark as Completed" : "Mark as In Progress"
        statusBtn.onclick = function(){
                for (let item of ArrayList){
                    if (item.id === List.id){
                        if (item.status !== "completed"){
                            item.status = "completed"
                            
                            document.getElementById(List.id).children[1].textContent = "Completed"
                            document.getElementById(List.id).children[1].style.color = "green"
                            document.getElementById(List.id).children[0].style.textDecoration = "line-through"
                            statusBtn.textContent = "Mark as In Progress"
                            statusBtn.classList.remove("statusBtnGreen")
                            statusBtn.classList.add("statusBtnYellow")
                            save();
                        }
                        else{
                            document.getElementById(List.id).children[1].textContent = "In progress"
                            document.getElementById(List.id).children[1].style.color = "yellow"
                            document.getElementById(List.id).children[0].style.textDecoration = "none"
                            statusBtn.classList.add("statusBtnGreen")
                            statusBtn.classList.remove("statusBtnYellow")
                            item.status = "In progress"
                            statusBtn.textContent = "Mark as Completed"
                            save();
                        }
                        break;
                    }
        }
}
popUpcontainer.appendChild(statusBtn);
}


    



function CreateAppendTodo(List){
    let listItem = document.createElement("li")
    listItem.classList.add("listItem")
    listItem.id = List.id 
    listItem.onclick = function(){
        openPopUp(List)
    }
    let todo = document.createElement("p")
    todo.style.color = ""
    todo.style.width = "100%"
    todo.textContent = List.Todo
    listItem.appendChild(todo)
    let con = document.createElement("p");
    con.style.width = "100%"
    con.textContent = List.status !== "completed" ? List.todoDetails.length === 0 ? "Not Yet" : "In Progress" : "Completed"
    if (List.status === "completed"){
        con.style.color = "green"
        todo.style.textDecoration = "line-through"
    }   
    else if (List.todoDetails.length > 0){
        con.style.color = "yellow"
    }
    else{
        con.style.color = "red"
    }

    listItem.appendChild(con)
    let para = document.createElement("p")
    para.textContent = List.dateTime
    para.style.width= "45%"
    listItem.appendChild(para)
    let icon = document.createElement("i")
    icon.classList.add("fa-solid");
    icon.classList.add("fa-trash");
    icon.style.color = "red"    
    icon.onclick = function(e){
        e.stopPropagation(); 
        ondelete(List.id)
    }
    listItem.appendChild(icon)
    todosList.appendChild(listItem);
}

function save(){
    let strigyFaidarray = JSON.stringify(ArrayList)
    localStorage.setItem("todos", strigyFaidarray)

}
//localStorage.clear()
let num = 0;

addButton.addEventListener("submit", (e)=> {
    e.preventDefault();
    if (todoInput.value === ""){    
        alert("Please enter a task");
        return;
    }
    let date = new Date()
    let dateTime = (`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} / ${date.getHours() < 12 ? (date.getHours() + 1) + " AM" : (date.getHours() - 12) + " PM"}`)
    num+=1
    let NewTodo = {
        id:`todo${num}`,
        Todo: todoInput.value,
        status: "Not Yet",
        duration: "00:00:00",
        dateTime, 
        todoDetails:[],
    }

    ArrayList.push(NewTodo)
    CreateAppendTodo(NewTodo);
    todoInput.value = ""
    save();
})


function reLoad(){
    for (let item of ArrayList){
    CreateAppendTodo(item)
}
}


reLoad()

/*---------------------- Health ------------------------ */

let mainYogaCard = document.querySelector(".mainYogaCard");

let yogaPopup = document.querySelector(".yogaPopup");

let closeYogaBtn  = document.querySelector(".xIcon");

let videoCloseBtn  = document.querySelector(".videoXIcon")

let asanaXIcon = document.querySelector(".asanaXIcon");

let mediXIocn = document.querySelector(".mediVideoXIcon")

let pranayamaXIocn = document.querySelector(".pranayamaVideoXIcon")

let suryanamaskar = document.querySelector(".suryanamaskar")

let suryanamaskarVideoCon = document.querySelector(".suryanamaskarVideoCon")

let yogaAsanas = document.querySelector(".yogaAsanas")

let meditationCard = document.querySelector('.meditationCard')

let pranayamaCard = document.querySelector(".pranayamaCard")

let asanasPopup = document.querySelector(".asanasPopup")

let mediPopup = document.querySelector(".meditationPopup")

let pranayamaPopup = document.querySelector(".pranayamaPopup")

mainYogaCard.addEventListener("click", ()=> {
    yogaPopup.style.display = "flex";
});

closeYogaBtn.addEventListener("click" , (e) => {
    e.stopPropagation()
    yogaPopup.style.display = "none";
});

yogaAsanas.addEventListener("click", ()=>{
    asanasPopup.style.display = "flex"
})

suryanamaskar.addEventListener("click" , () => {

suryanamaskarVideoCon.style.display = "block"
    
})

videoCloseBtn.addEventListener("click", (e)=>{
    e.stopPropagation()
    suryanamaskarVideoCon.style.display = "none"
    // Pause the YouTube video
document.getElementById('ytplayer').contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
})


asanaXIcon.onclick = function(e){
    e.stopPropagation()
    asanasPopup.style.display = "none"
}

meditationCard.onclick = function(e){
    e.stopPropagation()
    mediPopup.style.display = "flex"
}

mediXIocn.onclick = function(e){
    e.stopPropagation()
    mediPopup.style.display ="none"
    const mediIframe = document.getElementById("mediVideo");
    mediIframe.src = mediIframe.src;
}

pranayamaXIocn.onclick = function(e){
    e.stopPropagation()
    pranayamaPopup.style.display = "none"
    const PranaIframe = document.getElementById("pranayamaVideo");
  PranaIframe.src = PranaIframe.src;
}

pranayamaCard.onclick = function(e){
    e.stopPropagation()
    pranayamaPopup.style.display = "flex"
}

// --------------autoscroll-----------------

const list = document.querySelectorAll(".asanam");
  let index = 0;

  let changeBtn = document.querySelector(".changeBtn")

  // Hide all items initially
  list.forEach(li => li.style.display = "none");

  function showNext() {
    
    // Hide all
    list.forEach(li => li.style.display = "none");
    // Show current
    list[index].style.display = "block";
    // Move to next
    index = (index + 1) % list.length;
  }

  // Start
  showNext();
  setInterval(showNext, 30500);

  changeBtn.onclick = function(){
    showNext();
  }

//--------------------------------testing--------------------