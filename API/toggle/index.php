<?php 
//rendo possibile la lettura in json
header('Content-Type: application/json');

//prendo il percorso dal database
$source_path = __DIR__ . '/../../database/tasks.json';

//metto in una variabile il contenuto del percorso recuperato
$tasks_json = file_get_contents($source_path);


//per cambiare done
$task_id = $_POST['id'] ?? null;

//decodo il json in php
$tasks = json_decode($tasks_json, true);

//mi arriva il testo ma io devo aggiungere tutto un oggetto


if ($task_id) {
    //unique id mi da un id univoco

    $updated_tasks = [];

    //invertire il done
    foreach($tasks as $task) {
        if ($task['id'] == $task_id) {
            $task['done'] = !$task['done'];
        }
        $updated_tasks[] = $task;
    }
    
    $tasks = $updated_tasks;
    
} 



$tasks = json_encode($tasks);

//sovrascrivo il json 
file_put_contents($source_path, $tasks);

//traduco nuovamente in json
echo $tasks;


