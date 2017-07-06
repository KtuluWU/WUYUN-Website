<?php

namespace App\Http\Controllers;

use App\User;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    /**
     * 展示给定用户的信息。
     *
     * @param  int  $id
     * @return Response
     */
    

    public function Index()
    {
        return "UserController!";
    }

}