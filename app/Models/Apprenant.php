<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Apprenant extends Model
{
    protected $fillable = [
        'nom', 'prenom', 'age', 'email', 'ville', 'image', 'domicile'
    ];

    public function disciplines()
    {
        return $this->belongsToMany(Discipline::class, 'apprenant_discipline');
    }
}
