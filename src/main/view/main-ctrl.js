class Thing {}

export default ['$scope', 'MainSvc', function ($scope, MainSvc) {
    this.name = "MAIN";
    this.things = [];

    var thing = new Thing();

    var { a, b } = MainSvc;

    this.names = [for (obj of MainSvc.c) { nombre: obj.name }];

    // note, this function is AUTOMAGICALLY bound
    // to the `this` context of the controller, because
    // it is defined as an arrow function. as such, this.things
    // inside the function body points to this.things in the
    // controller. DANG.
    this.onClickName = (e) => {
        this.things.push(Math.random() * 100);
    }
}];
