<?php

require_once 'database.php';

try {
    $db = Database::getInstance()->getConnection();
    echo "Conexión exitosa";
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}