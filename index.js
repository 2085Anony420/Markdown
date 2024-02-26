function incrementCounter() {
   
    let counter = parseInt(document.getElementById('counter').value);
    
    counter++;
    
    document.getElementById('counter').value = counter;
}


function markAsSeen(button) {
    
    incrementCounter();
}
