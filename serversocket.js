const express = require('express');
const app = express()
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static("client"));
io.on('connection',function(socket){
    // console.log(socket.id)
    socket.on('message',function(message){
        console.log(message)
        socket.broadcast.emit('broadcast',message)

    });
});

 server.listen(3000,function(req,res){
     console.log("Server has started 3000")
    })
// // WARNING: app.listen(80) will NOT work here!

// app.get('/', function (req, res) {
//   res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', function (socket) {
//   socket.emit('news', { hello: 'world' });
//   socket.on('my other event', function (data) {
//     console.log(data);
//   });
// });