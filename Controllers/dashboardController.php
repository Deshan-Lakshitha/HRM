<?php

class dashboardController extends Controller {
    function dashboard() {

        require(ROOT . "Classes/User.php");
        session_start();
        require_once("../Helpers/checkLogin.php");
        $user = unserialize($_SESSION['user']);

        $this->set(array('username' => $user->getUsername()));
        $this->set(array('role' => $user->getRole()));
        $this->set(array('is_supervisor' => $user->getIsSupervisor()));

        $this->render("dashboard");
    }
}

?>