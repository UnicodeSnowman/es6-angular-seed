import a from './dependency_one';
import thing from './dependency_two';

export class Test {

    constructor () {
        this.a = a;
        this.thing = thing;
    }

    doIt () {
        return { 
            dep: this.a 
        }
    }
}

var test = new Test()

console.log(test.doIt());
