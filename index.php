<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
        <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.min.css">
        <script src="bower_components/angular/angular.min.js"></script>
        <script src="bower_components//angular-route/angular-route.min.js"></script>
        <script src="app.js"></script>
    </head>
    <body ng-app="funWithCountries">
        <style>
            .col{
                float: left;
                width: 50%;
            }
        </style>
        <h1>Fun with Countries</h1>
        <div ng-controller="CountryController as countryCtrl" class="col">
            {{ countryCtrl.countries.name }}
            <ul>
                <li ng-repeat="c in countryCtrl.countries">
                    <a href ng-href="#/states/{{ c.code }}">
                        <img ng-src="images/{{ c.code }}.png">
                        {{ c.name }}
                    </a>
                <state-view></state-view>
            </li>
            </ul>
        </div>

        <div class="col" ng-view>

        </div>

    </body>
</html>
