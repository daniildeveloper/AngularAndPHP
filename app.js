(function () {
    /**
     * angular module
     * @type angular.module.angular-1_3_6_L1749.moduleInstance
     */
    var app = angular.module('funWithCountries', []);

    app.factory('countryService', function ($http) {
        var baseUrl = "services/";
        return {
            getCountries: function () {
                return $http.get(baseUrl + "getCountries.php");
            }
        };
    });

    app.controller("CountryController", function (countryService) {

        var that = this;

        countryService.getCountries().success(function (data) {
            that.countries = data;
        });

        this.newState = "";
        this.addStateTo = function (country) {
            if (!country.states) {
                country.states = [];
            }
            country.states.push({
                name: this.newState
            });
            this.newState = "";
        };
    });

})();