<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Discipline extends Model
{
    protected $fillable = ['nom', 'description'];

    public function apprenants()
    {
        return $this->belongsToMany(Apprenant::class, 'apprenant_discipline');
    }
}
