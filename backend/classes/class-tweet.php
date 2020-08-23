<?php

    class Tweet{
       private $idTweet;
       private $idUsuario;
       private $contenido;

        
       public function __construct(){

        $this->idTweet = $idTweet;
        $this->idUsuario = $idUsuario;
        $this->contenido = $contenido;
       }



       public static function obtenerTweets($idUsuario) {

        $contenidoArchivo = file_get_contents('../data/usuarios.json');
        $usuarios = json_decode($contenidoArchivo, true);
        $usuario = null;
        for ($i=0;$i<sizeof($usuarios);$i++){
            if ($usuarios[$i]["idUsuario"] == $idUsuario){
                $usuario = $usuarios[$i];
            break;
            }
        }

    
        $contenidoArchivoTweets = file_get_contents('../data/tweets.json');
        $tweets = json_decode($contenidoArchivoTweets, true);
        $resultadoTweets = array();
        for ($i=0;$i<sizeof($tweets);$i++){
            if (in_array($tweets[$i]["idUsuario"], $usuario["siguiendo"])){
                $resultadoTweets[] = $tweets[$i];
            }
        }
        echo json_encode($resultadoTweets);
        //echo json_encode($usuario);
   }

}
?>
