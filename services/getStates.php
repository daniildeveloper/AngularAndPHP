<?php
header("Content-type: application/json");
echo "')]}'\n";
require_once '../classes/CountryRepository.php';

if(isset($_GET['countryCode']) && is_string($_GET['countryCode'])) {
    $states = app\CountryRepository::getStates($_GET["countryCode"]);
    echo json_encode($states);
}


