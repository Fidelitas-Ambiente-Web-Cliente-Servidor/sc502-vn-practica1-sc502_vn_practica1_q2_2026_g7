<?php

$controller = $_GET['controller'] ?? 'index';
$action = $_GET['action'] ?? 'index';

switch ($controller) {

    case 'index':

        require_once 'controllers/IndexController.php';

        $obj = new IndexController();

        $obj->$action();

        break;
    case 'contacto':
        require_once 'controllers/ContactoController.php';
    
        $obj = new ContactoController();
    
        $obj->$action(); 
    
        break;

    default:

        echo "Controlador no encontrado";

}
