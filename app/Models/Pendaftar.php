<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Pendaftar extends Authenticatable
{
    use HasFactory, HasApiTokens, Notifiable;
    protected $guarded = [];
    
    protected $hidden = [
        'password',
        'remember_token',
    ];
}
