<?php

header("Content-Type: applicaction/json");
include_once("../classes/class-usuario.php");

switch($_SERVER['REQUEST_METHOD']){

    case 'POST':


    break;
    case "GET":
        
        if (isset($_GET['id'])){
          
            Usuario::obtenerUsuario($_GET['id']);
        }
        else{
            Usuario::obtenerUsuarios();
     
        }

    break;
    case "PUT": 
       

    break;
    case "DELETE":
        

    break;

}
?>