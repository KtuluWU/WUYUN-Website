<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('test', function(){
    // $email = DB::table('users')->select('name')->get();
    $email = DB::table('users')->where('id', '1')->value('name');
    return response($email, 200);
});
Route::post('testJson', function() {
    return ["yun"=>"1", "kun"=>"2"];
});
Route::post('/contactForm','RequestController@contactForm');
