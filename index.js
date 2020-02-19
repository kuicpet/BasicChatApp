const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/',(req,res) => {
    //res.send('<h1>Welcome</h1>');
    res.sendFile(__dirname + '/index.html');
});
//socket connection
io.on('connection',(socket) => {
    socket.on('chat message',(msg) => {
        io.emit('chat message', msg);
    });
    console.log('a user is connected');
});



http.listen(4000,() => {
    console.log('listening on Port 4000');
})
