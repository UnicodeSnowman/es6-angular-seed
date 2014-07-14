export default ['$http', function ($http) {
    var a = 'AAAA';
    var b = 'BBBB';
    var c = [
        {
            id: 1,
            name: 'Adam'
        },
        {
            id: 2,
            name: 'Trevor'
        },
        {
            id: 3,
            name: 'Chris'
        }
    ];

    return { a, b, c };
}];
