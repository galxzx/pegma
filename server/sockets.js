
//Started from https://github.com/DanialK/ReactJS-Realtime-Chat/blob/master/routes/socket.js
//Added rooms and private messaging
//Changed to es6 as much as practical
//No chat persistence


// Keep track of which names are used so that there are no duplicates
const userFunc = (function () {
  const names = {}
  const rooms = {}

  const claim = name => {
    if (!name || names[name]) {
      return false
    } else {
      names[name] = true
      return true
    }
  }



  //set the socket on the name in the names object
  const setSocket = (name, socket) => {
    names[name] = socket
  }

  //gets the associated socket from the names object
  const getSocket = (name) => {
    return names[name]
  }

  //adds # name if already taken
  const checkName = (name) => {
    if(!name) return Guest
      let idx = 1
      endName = name.slice();
      while(!claim(endName)){
        endName = name.slice() + idx
        idx++
      }
    return endName
  }


  const free = name => {
    if (names[name]) {
      delete names[name];
    }
    for (let room in rooms){
      let index = rooms[room].indexOf(name)
      if (index > -1){
        rooms[room].splice(index, 1)
      }
    }
  };

  const addToRoom = (room, name) => {
    if(!rooms[room]) rooms[room] = []
    rooms[room].push(name)
  }

  const getUsersInRoom = room => {
    return rooms[room];
  }


  return {
    claim,
    free,
    checkName,
    setSocket,
    getSocket,
    addToRoom,
    getUsersInRoom,
  };
}());

// export function for listening to the socket
module.exports = function (socket) {
  // var name = userFunc.getGuestName();


  //set name on connection
  const name = userFunc.checkName(socket.handshake.query.name)

  //join room on connection
  let room = socket.handshake.query.room

  //add user to rooms object
  userFunc.addToRoom(room, name)

  //join user to room and emit event to everyone in room
  socket.join(room, () => {
    socket.broadcast.to(room).emit('user:join', {
        name: name
      })
  })
  // send the new user their name and a list of users
  socket.emit('init', {
    users: userFunc.getUsersInRoom(room),
    name
  });

  //save socket in names object
  userFunc.setSocket(name, socket)


  // broadcast a user's message to other users in room
  socket.on('send:message', data => {
    socket.broadcast.to(room).emit('send:message', data)
  })

  //get socket from names and emit to that socket
  socket.on('send:privateMessage', (data) => {

    userFunc.getSocket(data.to).emit('send:message', data)
  })



  // clean up when a user leaves, and broadcast it to other users
  socket.on('disconnect',  () => {
    socket.broadcast.to(room).emit('user:left', {
      name: name
    });
    userFunc.free(name);
  });
};
