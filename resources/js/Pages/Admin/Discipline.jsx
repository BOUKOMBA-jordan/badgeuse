// Discipline.jsx

import React, { useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
import Layout from '@/Layouts/AuthenticatedLayout';

const Discipline = () => {
    const [disciplines, setDisciplines] = useState([]);

    useEffect(() => {
        // Chargement initial des disciplines depuis le backend
        loadDisciplines();
    }, []);

    const loadDisciplines = () => {
        Inertia.get('/admin/discipline')
            .then(response => {
                setDisciplines(response.data);
            })
            .catch(error => {
                console.log('Erreur lors du chargement des disciplines :', error);
            });
    };

    const deleteDiscipline = (id) => {
        if (confirm('Êtes-vous sûr de vouloir supprimer cette discipline ?')) {
            Inertia.delete(`/admin/discipline/${id}`)
                .then(() => {
                    loadDisciplines();
                })
                .catch(error => {
                    console.log('Erreur lors de la suppression de la discipline :', error);
                });
        }
    };

    return (
        <Layout>
            <div className="container mx-auto">
                <h1 className="text-2xl font-semibold mb-4">Gestion des Disciplines</h1>

                {/* Affichage de la liste des disciplines */}
                <ul>
                    {disciplines.map(discipline => (
                        <li key={discipline.id} className="flex items-center justify-between border-b py-2">
                            <span>{discipline.name}</span>
                            <button
                                onClick={() => deleteDiscipline(discipline.id)}
                                className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                            >
                                Supprimer
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    );
};

export default Discipline;
