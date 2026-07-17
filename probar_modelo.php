<?php

require_once 'models/IndexModel.php';

$model = new IndexModel();

$cursos = $model->getAll();

echo "<pre>";
print_r($cursos);
echo "</pre>";