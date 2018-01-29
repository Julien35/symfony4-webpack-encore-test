<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Routing\Annotation\Route;

class WebColaController extends Controller
{
    /**
     * @Route("/web-cola")
     */
    public
    function webColaAction()
    {
        return $this->render('web-cola/web-cola.html.twig');
    }


}
