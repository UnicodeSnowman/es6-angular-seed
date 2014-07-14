import controllers from "./view/controllers";
import services from "./services/services";

angular.module('app', [
    controllers.name,
    services.name,
]).run(function () {
    console.log('App Start!');
});
