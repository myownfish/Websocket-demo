//create new websocket connection
var ws = new WebSocket("ws://localhost:9999");

ws.onopen = function (e) {
    console.log("Connection open...");
    console.log("WebSocket readyState: ", ws.readyState);
    // setInterval(function() {
    //     ws.send("Hello Kitty");
    // }, 5000);
    
    
};

ws.binaryType = "arraybuffer";
ws.onmessage = function (e) {
    if (typeof e.data === "string") {
        console.log("String message received", e, e.data);
    } else if (e.data instanceof ArrayBuffer) {
        console.log("ArrayBuffer message received", e, e.data);
        var a = new Uint8Array(e.data);
    }
    console.log("WebSocket readyState: ", ws.readyState);
};

ws.onerror = function(e) {
    console.log("WebSocket Error:", e);
    console.log("WebSocket readyState: ", ws.readyState);
}

ws.onclose = function(e) {
    console.log("Connection closed", e);
    console.log("WebSocket readyState: ", ws.readyState);
}




