<?php

require_once 'config/database.php';

class ContactoModel
{
    private $db;

    public function __construct()
    {
        $this->db = Database::getInstance()->getConnection();
    }

    public function create($nombre, $correo, $telefono, $asunto, $mensaje)
    {
        $sql = "INSERT INTO contacto
                (nombre, correo, telefono, asunto, mensaje)
                VALUES (?, ?, ?, ?, ?)";

        $stmt = $this->db->prepare($sql);

        return $stmt->execute([
            $nombre,
            $correo,
            $telefono,
            $asunto,
            $mensaje
        ]);
    }
}