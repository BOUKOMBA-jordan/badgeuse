<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Discipline;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DisciplineController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $disciplines = Discipline::all();
        return Inertia::render('Disciplines/Index', [
            'disciplines' => $disciplines
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Disciplines/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validation des données
        $request->validate([
            'name' => 'required|unique:disciplines,name',
            // Ajoutez d'autres règles de validation selon vos besoins
        ]);

        // Création de la discipline
        Discipline::create($request->all());

        // Redirection avec message de succès
        return redirect()->route('admin.disciplines.index')->with('success', 'Discipline créée avec succès.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Discipline $discipline)
    {
        return Inertia::render('Disciplines/Show', [
            'discipline' => $discipline
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Discipline $discipline)
    {
        return Inertia::render('Disciplines/Edit', [
            'discipline' => $discipline
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Discipline $discipline)
    {
        // Validation des données
        $request->validate([
            'name' => 'required|unique:disciplines,name,' . $discipline->id,
            // Ajoutez d'autres règles de validation selon vos besoins
        ]);

        // Mise à jour de la discipline
        $discipline->update($request->all());

        // Redirection avec message de succès
        return redirect()->route('admin.disciplines.index')->with('success', 'Discipline mise à jour avec succès.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Discipline $discipline)
    {
        // Suppression de la discipline
        $discipline->delete();

        // Redirection avec message de succès
        return redirect()->route('admin.disciplines.index')->with('success', 'Discipline supprimée avec succès.');
    }
}
