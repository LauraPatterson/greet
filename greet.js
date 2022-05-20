
function greet(name) {

    let greeting = '';

    if (typeof(name) === 'string' && name !== "") { 
        greeting = checkCase(name);
        return greeting;
    } else if (Array.isArray(name)) {
        greeting = sayHello(name.join(', '));
        return greeting;
    } else {
        return 'Hello there!'
    }
}

function shoutHello(name) {
    return 'HELLO ' + name + "!"
}

function sayHello(name){
    return 'Hello, ' + name;
}

function checkCase(name) {
    let greeting = ''
    
    if (name === name.toUpperCase()) {
        greeting = shoutHello(name);
    } else {
        greeting = sayHello(name);
    }
    
    return greeting;
}

module.exports = greet