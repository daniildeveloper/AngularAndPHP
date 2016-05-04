<?php



header("Content-type: application/json");
require_once '../classes/CountryRepository.php';

$countries = app\CountryRepository::getCountries();

echo json_encode($countries);
