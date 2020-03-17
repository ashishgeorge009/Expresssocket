const socket = io.connect('http://localhost:3000');
const d = document;
const inputBox = d.getElementById("inputBox");
const sendBtn = d.getElementById("sendBtn");
const chatlist = d.querySelector(".chat-list");

sendBtn.addEventListener('click',function()
{
    const text = inputBox.value;
    if(text == "")
        return;
    const li = d.createElement("li");
    li.style.listStyle = "none";
    li.textContent=  `You : ${text}`;
    chatlist.appendChild(li);

    inputBox.value = "";

    const message = `Ashish1 : ${text}`;

    socket.emit("message",message);

})

socket.on("broadcast",function(message)
{
    const li = d.createElement("li");
    li.style.listStyle = 'none';
    li.textContent = message;
    chatlist.appendChild(li)
})