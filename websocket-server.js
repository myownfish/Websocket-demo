var websocket = require("./websocket-example");
var i = 0;
//use this array to keep all connection which will be used to broadcast message to all clients
var connectionArray = new Array();
websocket.listen(9999, "localhost", function(conn) {
    console.log("connection opened");
    connectionArray.push(conn);
    
    conn.on("data", function(opcode, data) {
        console.log("message:", data);
        for (i in connectionArray) {
            connectionArray[i].send(data);
        }
        
        // setInterval(function() {
        //    conn.send("Send from server: " + i++);
        // }, 5000);
    });
    
    conn.on("close", function(code, reason){
       console.log("Connection closed:", code, reason); 
    });
    
// setInterval(function() {
//        conn.send("Send from server: " + i++);
//     }, 5000);
    
});


    
    