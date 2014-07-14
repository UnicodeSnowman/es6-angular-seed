export default ['$scope', 'MainSvc', function ($scope, MainSvc) {
    this.name = "MAIN";
    this.things = [];

    var { a, b } = MainSvc;
    console.log(a, b);

    this.names = [for (obj of MainSvc.c) { nombre: obj.name }];

    // note, this function is AUTOMAGICALLY bound
    // to the `this` context of the controller, because
    // it is defined as an arrow function. as such, this.things
    // inside the function body points to this.things in the
    // controller. DANG.
    this.onClickName = (e) => {
        console.log('click', e);
        this.things.push(Math.random() * 100);
    }
}];
