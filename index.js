function logShout(shout) {
    console.log(shout.toUpperCase())
}

function logWhisper(whisper) {
    console.log(whisper.toLowerCase())
}

function sayHiToHeadphonedRoommate(message) {
    switch(true) {
        case message === message.toLowerCase():
            return "I can't hear you!";
        case message === message.toUpperCase():
            return "YES INDEED!";
        case message === "Let's have dinner together!":
            return "I would love to!"
    }
    
}

function shout(message) {
    let shout = message.toUpperCase();
   
    console.log(shout);
    return shout;
}

function whisper(message) {
    let whisper = message.toLowerCase();
   
    console.log(whisper);
    return whisper;
}
