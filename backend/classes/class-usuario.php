<?php

    class Usuario {
        private $idUsuario;
        private $nombre;
        private $usuario;
        private $fechaUnion;
        private $fechaNacimiento;
        private $urlPerfil;
        private $urlEncabezado;
        private $verificado;
        private $biografia;
        private $ubicacion;
        private $otraRed;
        private $seguidores;
        private $tweetFoto;

        public static function obtenerUsuarios() {
            $contenidoArchivo = file_get_contents('../data/usuarios.json');
            echo $contenidoArchivo;
        }

        public static function obtenerUsuario($id) {
                
        }
    }

?>




