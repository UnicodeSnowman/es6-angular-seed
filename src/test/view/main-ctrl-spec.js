import controllers from '../../main/view/controllers';
import services from '../../main/services/services';

var controller,
    $controller,
    $scope,
    $rootScope;

describe('MainCtrl', function () {
    beforeEach (function () {
        module(controllers.name, services.name)

        inject(function ($injector, _$controller_, _$rootScope_) {
            $controller = _$controller_;
            $rootScope = _$rootScope_;
            $scope = $rootScope.$new();
        });

        controller = $controller('MainCtrl', { $scope: $scope });
    });

    it('should set the name property', function () {
        expect(controller.name).toEqual('MAIN');
    });

    it('should set things to an empty array', function () {
        expect(controller.things).toEqual([]);
    });

    describe('onClickName', function () {
        it('should add a random number to the list', function () {
            expect(controller.things.length).toEqual(0);
            controller.onClickName();
            expect(controller.things[0]).toEqual(jasmine.any(Number));
            expect(controller.things.length).toEqual(1);
        });
    });

    it('should set the names (with a comprehension! yowza!)', function () {
        expect(controller.names).toEqual([
            { nombre: 'Adam' },
            { nombre: 'Trevor' },
            { nombre: 'Chris' }
        ]);
    });
});

