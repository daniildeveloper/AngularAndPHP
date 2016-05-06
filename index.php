<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
        <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.min.css">
        <script src="bower_components/angular/angular.min.js"></script>
        <script src="app.js"></script>
    </head>
    <body ng-app="funWithCountries">
        <style>
            ul{
                border: 1px solid orange;
            }
        </style>
        <h1>Fun with Countries</h1>
        <div ng-controller="CountryController as countryCtrl">
            {{ countryCtrl.countries.name }}
            <ul>
                <li ng-repeat="c in countryCtrl.countries">
                    <img ng-src="images/{{ c.code }}.png">
                    {{ c.name }}

                <state-view></state-view>
            </li>
            </ul>
        </div>

    </body>
</html>
