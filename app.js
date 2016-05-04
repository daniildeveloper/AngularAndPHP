(function () {
    /**
     * angular module
     * @type angular.module.angular-1_3_6_L1749.moduleInstance
     */
    var app = angular.module('funWithCountries', []);

    app.controller("CountryController", function () {
        this.countries = [{
            name: "Germany",
            code: 'de',
            states: [
                {name: "Bavaria"},
                    {name: "Berlin"},
                    {name: "Melenburg-Vorpomern"}
                ]
            },
            {
                name: "United States",
                code: "US",
                states: [
                    {name: "California"},
                    {name: "MaryLand"}
                ]
            },
            {
                name: "Luxemburg",
                code: "lu"
            }
        ];
    });

})();