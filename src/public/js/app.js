const messageList = document.querySelector("ul");
const messageForm = document.querySelector("form");
const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener("open", ()=> {
    console.log("Connected to Server");
})

socket.addEventListener("message", (message) => {
    console.log("Just got this:",message.data, "from the server");   
})

socket.addEventListener("close", () => {
    console.log("Disconnected from Server");
})

function handleSubmit(event){
    console.log("handleSubmit");
    event.preventDefault();
    const input = messageForm.querySelector("input");
    console.log(input.value);
    socket.send(input.value);
    input.value = "";
}

messageForm.addEventListener("submit", handleSubmit);