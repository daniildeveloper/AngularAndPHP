(function () {
    /**
     * angular module
     * @type angular.module.angular-1_3_6_L1749.moduleInstance
     */
    var app = angular.module('funWithCountries', ["ngRoute"]);

    app.factory('countryService', function ($http) {
        var baseUrl = "services/";
        return {
            getCountries: function () {
                return $http.get(baseUrl + "getCountries.php");
            },
            getStates: function (countryCode) {
                return $http.get(baseUrl +
                        "getStates.php/?countrycode=" +
                        encodeURIComponent()(countryCode));
            }
        };
    });

    app.controller("CountryController", function (countryService) {

        var that = this;

        countryService.getCountries().success(function (data) {
            that.countries = data;
        });

        this.newState = "";

    });

    app.config(function ($routeProvider) {
        $routeProvider.when("/states/:countryCode", {
            templateUrl: "state-view.html",
            controller: function ($routeParams, countryService) {
                this.params = $routeParams;

                var that = this;

                countryService.getStates(this.params.countryCode || "")
                        .success(function (data) {
                            this.states = data;
                        });

                this.addStateTo = function () {
                    if (!this.states) {
                        this.states = [];
                    }
                    this.states.push({
                        name: this.newState
                    });
                };
            },
            controllerAs: "stateCtrl"
        });
    });

    app.controller("StateController", function () {

    });

    /**
     * can be used as <state-view></state-view>
     */
    app.directive("stateView", function () {
        return{
            restrict: "E", //todo: what is it
            templateUrl: "state-view.html",
            controller: function () {
                this.addStateTo = function (country) {
                    if (!country.states) {
                        country.states = [];
                    }
                    country.states.push({
                        name: this.newState
                    });
                    this.newState = "";
                };

            },
            controllerAs: "stateCtrl"
        };
    });

})();