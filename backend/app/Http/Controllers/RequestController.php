<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class RequestController extends Controller
{
    public function contactForm(Request $request)
    {   
        $messagejson = $request->all();
        $messageenjson = json_encode($messagejson);
        $fromEmail = "From: ".$messagejson['Email'];
        $name = $messagejson['LastName']." ".$messagejson['FirstName'];
        $message = $messagejson['Message']."\n"."\n"."Telephone: ".$messagejson['Phone'];
        mail("yun.wu0621@gmail.com", $name, $message, $fromEmail);
        return "Send!";
    }
}