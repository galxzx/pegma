
//Started from https://github.com/DanialK/ReactJS-Realtime-Chat/blob/master/routes/socket.js
//Added rooms and private messaging
//Changed to es6 as much as practical
//No chat persistence


// Keep track of which names are used so that there are no duplicates
var userNames = (function () {
  var names = {};

  var claim = function (name) {
    if (!name || names[name]) {
      return false;
    } else {
      names[name] = true;
      return true;
    }
  };

  // find the lowest unused "guest" name and claim it
  // var getGuestName = function () {
  //   var name,
  //     nextUserId = 1;

  //   do {
  //     name = 'Guest ' + nextUserId;
  //     nextUserId += 1;
  //   } while (!claim(name));

  //   return name;
  // };

  // check the name and add a # if necessary
  const setId = (name, socketId) => {
    names[name] = socketId
  }

  const getId = (name) => {
    return names[name]
  }

  const checkName = (name) => {
    let idx = 1
    endName = name.slice();
    while(!claim(endName)){
      endName = name.slice() + idx
      idx++
    }
    return endName
  }

  // serialize claimed names as an array
  var get = function () {
    var res = [];
    for (user in names) {
      res.push(user);
    }

    return res;
  };

  var free = function (name) {
    if (names[name]) {
      delete names[name];
    }
  };

  return {
    claim,
    free,
    get,
    //getGuestName,
    checkName,
    setId,
    getId
  };
}());

// export function for listening to the socket
module.exports = function (socket) {
  // var name = userNames.getGuestName();


  //set name on connection
  const name = userNames.checkName(socket.handshake.query.name)

  //join room on connection
  let room = socket.handshake.query.room
  socket.join(room, () => {
    socket.to(room).emit('user:join', {
        name: name
      })
  })
  // send the new user their name and a list of users
  socket.emit('init', {
    users: userNames.get(),
    name
  });

  userNames.setId(name, socket)


  // broadcast a user's message to other users
  socket.on('send:message', function (data) {

    socket.broadcast.emit('send:message', data);
  });

  socket.on('send:privateMessage', (data) => {

    userNames.getId(data.to).emit('send:message', data)
  })

  // validate a user's name change, and broadcast it on success
  // socket.on('change:name', function (data) {
  //   console.log('name', data)
  //   if (userNames.claim(data.name)) {
  //     var oldName = name;
  //     userNames.free(oldName);

  //     name = data.name;

  //     // notify other clients that a new user has joined
  //     socket.broadcast.emit('user:join', {
  //       name: name
  //     });

  //   } else {
  //     return
  //   }
  // });

  // clean up when a user leaves, and broadcast it to other users
  socket.on('disconnect', function () {
    console.log('user left')
    socket.broadcast.emit('user:left', {
      name: name
    });
    userNames.free(name);
  });
};
