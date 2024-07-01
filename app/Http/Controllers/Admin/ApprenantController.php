<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Apprenant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;
use Illuminate\Validation\ValidationException;
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
        try {
            $request->validate([
                'nom' => 'required',
                'prenom' => 'required',
                'age' => 'required|numeric',
                'ville' => 'required',
                'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // Validation spécifique pour une image
                'email' => 'required|email|unique:apprenants,email',
                // Ajoutez d'autres règles de validation selon vos besoins
            ]);
        } catch (ValidationException $e) {
            return Redirect::back()->withErrors($e->errors());
        }

        // Gestion du fichier image
        $imagePath = $request->file('image')->store('apprenant_images', 'public');

        // Création de l'apprenant
        Apprenant::create([
            'nom' => $request->nom,
            'prenom' => $request->prenom,
            'age' => $request->age,
            'ville' => $request->ville,
            'email' => $request->email,
            'image' => $imagePath, // Sauvegarde du chemin de l'image dans la base de données
        ]);

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
        try {
            $request->validate([
                'nom' => 'required',
                'prenom' => 'required',
                'age' => 'required|numeric',
                'ville' => 'required',
                'email' => 'required|email|unique:apprenants,email,' . $apprenant->id,
                // Ajoutez d'autres règles de validation selon vos besoins
            ]);
        } catch (ValidationException $e) {
            return Redirect::back()->withErrors($e->errors());
        }

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
