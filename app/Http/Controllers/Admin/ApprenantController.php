<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Apprenant;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ApprenantController extends Controller
{
    public function index()
    {
        $apprenants = Apprenant::all();
        return Inertia::render('Apprenants/Index', [
            'apprenants' => $apprenants
        ]);
    }

    public function create()
    {
        return Inertia::render('Apprenants/Create');
    }

    public function store(Request $request)
    {
        // Validation des données
        $request->validate([
            'nom' => 'required',
            'prenom' => 'required',
            'age' => 'required|numeric',
            'ville' => 'required',
            'email' => 'required|email|unique:apprenants,email',
            // Ajoutez d'autres règles de validation selon vos besoins
        ]);

        // Création de l'apprenant
        Apprenant::create($request->all());

        // Redirection avec message de succès
        return redirect()->route('admin.apprenants.index')->with('success', 'Apprenant créé avec succès.');
    }

    public function edit(Apprenant $apprenant)
    {
        return Inertia::render('Apprenants/Edit', [
            'apprenant' => $apprenant
        ]);
    }

    public function update(Request $request, Apprenant $apprenant)
    {
        // Validation des données
        $request->validate([
            'nom' => 'required',
            'prenom' => 'required',
            'age' => 'required|numeric',
            'ville' => 'required',
            'email' => 'required|email|unique:apprenants,email,' . $apprenant->id,
            // Ajoutez d'autres règles de validation selon vos besoins
        ]);

        // Mise à jour de l'apprenant
        $apprenant->update($request->all());

        // Redirection avec message de succès
        return redirect()->route('admin.apprenants.index')->with('success', 'Apprenant mis à jour avec succès.');
    }

    public function destroy(Apprenant $apprenant)
    {
        // Suppression de l'apprenant
        $apprenant->delete();

        // Redirection avec message de succès
        return redirect()->route('admin.apprenants.index')->with('success', 'Apprenant supprimé avec succès.');
    }
}