<?php 
//rendo possibile la lettura in json
header('Content-Type: application/json');

//prendo il percorso dal database
$source_path = __DIR__ . '/../database/tasks.json';

//metto in una variabile il contenuto del percorso recuperato
$tasks_json = file_get_contents($source_path);


//ottengo il valore dell'input
$new_task = $_POST['task'] ?? '';

//decodo il json in php
$tasks = json_decode($tasks_json, true);

// var_dump($new_task);
if ($new_task) $tasks[] = $new_task;

$tasks = json_encode($tasks);

//sovrascrivo il json 
file_put_contents($source_path, $tasks);

//traduco nuovamente in json
echo $tasks;


?>