const greet = require('./greet.js')
describe('test greet()', () => {
    
    //test greet works
    test('Should greet Elizabeth',() => {
        expect(greet('Elizabeth')).toBe('Hello, Elizabeth');
    });

    //test if name null
    test('Should say Hello There',() => {
        expect(greet(null)).toBe('Hello there!');
    });

     //test if name is CAPS
     test('Should SHOUT back',() => {
        expect(greet('JOSE')).toBe('HELLO JOSE!');
    });

    //test 2 names in Array
    test('Should greet 2 people',() => {
        expect(greet(['Jose','Pep'])).toBe('Hello, Jose, Pep');
    });

    //test multiple names in Array
    test('Should greet everyone',() => {
        expect(greet(['Alex','Arsene','Jose','Zidane'])).toBe('Hello, Alex, Arsene, Jose, Zidane');
    });

});