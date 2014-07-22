<?php
    class settings {
        public function getAllSettings() {
            return str_replace(array("\n", "\r"), '', file_get_contents("settings.ini"));
        }
    }

?>