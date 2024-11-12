<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;  // Ajoutez cette ligne

// Route de test
Route::get('/test', function() {
    return response()->json(['message' => 'API works']);
});

// Route de login
Route::post('/login', [LoginController::class, 'login'])
    ->middleware('throttle:5,1')
    ->name('auth.login');