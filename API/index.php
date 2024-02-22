<?php 
header("Access-Control-Allow-Origin: http://127.0.0.1:5500");
header("Access-Control-Allow-Headers: X-Requested-With");

//prendo il percorso dal database
$source_path = __DIR__ . '/../database/tasks.json';

//metto in una variabile il contenuto del percorso recuperato
$tasks_json = file_get_contents($source_path);

//decodo il json in php
$tasks = json_decode($tasks_json);



//rendo possibile la lettura in json
header('Content-Type: application/json');

//traduco nuovamente in json
echo json_encode($tasks);


?>