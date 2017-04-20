var app = angular.module('customModule', []);

app.controller('PersonCtrl', function () {
    this.friends = [{
        position: 1,
        name: 'Andrew'        
    }, {
        position: 2,
        name: 'Will'
    }, {
        position: 3,
        name: 'Mark'
    }, {
        position: 4,
        name: 'Alice'
    }, {
        position: 5,
        name: 'Todd'
    }];
});