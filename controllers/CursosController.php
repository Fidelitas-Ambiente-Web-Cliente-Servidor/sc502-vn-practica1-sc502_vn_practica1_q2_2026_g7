<?php

require_once 'models/ContactoModel.php';

class ContactoController
{

    public function index()
    {
        require 'views/contacto.php';
    }

    public function store()
    {

        $model = new ContactoModel();

        $model->create(
            $_POST['nombre'],
            $_POST['correo'],
            $_POST['telefono'],
            $_POST['asunto'],
            $_POST['mensaje']
        );

        require 'views/contacto.php';
    }

}