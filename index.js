function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  
  if(string.toLowerCase() === 'hello'){
    return string;
  }else if(string.toUpperCase() === 'Hello'){
    return string;
  }else if(string === "I love you, Grandma."){
    return string;
  }
}

