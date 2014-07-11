import a from './dependency_one';
import thing from './dependency_two';

export class Test {

    constructor () {
        this.a = a;
    }
}

console.log(a, thing, Test);
