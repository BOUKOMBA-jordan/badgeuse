<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ApprenantRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'nom' => 'nullable|string|max:255',
            'prenom' => 'nullable|string|max:255',
            'age' => 'nullable|integer|min:1',
            'ville' => 'nullable|string|max:255',
            'image' => 'nullable|image|max:2048', // Exemple de validation pour une image jusqu'à 2 Mo
            'discipline' => 'nullable|string|max:255',
            'email' => 'nullable|email|max:255',
            'domicile' => 'nullable|string|max:255',
        ];
    }
}