<?php

namespace app;

require 'Country.php';
require 'State.php';

/**
 * Description of CountryRepository
 *
 * @author Lama
 */
class CountryRepository {
    private static $countries = array();

    protected static function init() {
        $countries = array();

        $countries[] = new Country("Austria", "at", array(
            new State("Wien"), new State("Salzburg")
        ));

        $countries[] = new Country("Canada", "ca", array(
            new State("Ontario"), new State("Quebec")
        ));

        $countries[] = new Country("Luxemburg", "lu");

        self::$countries = $countries;
    }

    public static function getCountries() {
        if (count(self::$countries) === 0) {
            self::init();
        }

        return self::$countries;
    }

}
