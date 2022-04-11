// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    let catsCopy = [...cats];
    catsCopy.push(name);
    return catsCopy;
}

function prependCat(name){
    let catsCopy = [...cats];
    catsCopy.unshift(name);
    return catsCopy;
}

function removeLastCat(){
    let catsCopy = [...cats];
    catsCopy.pop();
    return catsCopy;
}

function removeFirstCat(){
    let catsCopy = [...cats];
    catsCopy.shift();
    return catsCopy;
}