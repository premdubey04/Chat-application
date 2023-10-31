const socket = io(); 
const chat =document.querySelector('.chat');
const btn=document.querySelector('.btn');


socket.on('join',(userName)=>{
    const li=document.createElement('li')
    li.textContent=`${userName} has joined the chat `;
    li.classList.add('system-message');
    chat.appendChild(li);
})
socket.on('message',msg=>{
    const li=document.createElement('li')
    li.textContent=msg;
    chat.appendChild(li);

}); 


    const userName=prompt('please enter your name')
    socket.emit('join',userName);



btn.addEventListener('click',()=>{
    const input=document.querySelector('.input');
    const msg=input.value;
    socket.emit('message',msg);
    input.value='';
    });