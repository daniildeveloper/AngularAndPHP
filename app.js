(function () {
    /**
     * angular module
     * @type angular.module.angular-1_3_6_L1749.moduleInstance
     */
    var app = angular.module('funWithCountries', []);

    app.controller("CountryController", function ($http) {

        var that = this;

        $http({
            method: "GET",
            url: "services/getCountries.php"
        }).success(function (data) {
            that.countries = data;
        });
    });

})();