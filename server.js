const express=require('express');
const socket=require('socket.io')
const path=require ('path')

const app=express();
app.use(express.static(path.join(__dirname,'public')))


const port =3000;
const server=app.listen(port,()=>{
    console.log('the server is running')
})
const io=socket(server);

io.on('connection',(socket)=>{
    console.log('A user connected');

   socket.on('join',(userName)=>{
    console.log('user joined:',userName);
    io.emit('join',userName)
   })
    socket.on('message',msg=>{
        console.log('received message from the client ',msg);
        io.emit('message',msg);
    })
    socket.on('disconnect',()=>{
        console.log('a user disconneted')
    })
})





