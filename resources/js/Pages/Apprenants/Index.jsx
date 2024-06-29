import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import { route } from 'ziggy-js';

const ApprenantIndex = ({ apprenants }) => {
    const { routeName } = usePage().props;

    return (
        <div className="container mt-4">
            <h1>Tous les apprenants</h1>

            <Link href={route('admin.apprenants.create')} className="btn btn-primary my-3">
                Ajouter un apprenant
            </Link>

            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Nom</th>
                            <th scope="col">Prénom</th>
                            <th scope="col">Âge</th>
                            <th scope="col">Ville</th>
                            <th scope="col">Email</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {apprenants.map((apprenant) => (
                            <tr key={apprenant.id}>
                                <td>{apprenant.nom}</td>
                                <td>{apprenant.prenom}</td>
                                <td>{apprenant.age}</td>
                                <td>{apprenant.ville}</td>
                                <td>{apprenant.email}</td>
                                <td>
                                    <Link href={route('admin.apprenants.edit', apprenant)} className="btn btn-sm btn-primary me-2">
                                        Modifier
                                    </Link>
                                    <form action={route('admin.apprenants.destroy', apprenant)} method="post" className="d-inline">
                                        <input type="hidden" name="_method" value="delete" />
                                        <button type="submit" className="btn btn-sm btn-danger" onClick={() => confirm('Êtes-vous sûr de vouloir supprimer cet apprenant ?')}>Supprimer</button>
                                    </form>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApprenantIndex;
