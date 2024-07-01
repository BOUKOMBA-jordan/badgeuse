import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { route } from 'ziggy-js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../../../css/style.css'; // Assurez-vous d'inclure le style personnalisé ici

const ApprenantIndex = ({ apprenants }) => {
    const { routeName } = usePage().props;

    const [newApprenant, setNewApprenant] = useState({
        nom: '',
        prenom: '',
        age: '',
        ville: '',
        email: '',
        image_url: '', // Ajoutez les champs nécessaires pour l'image si nécessaire
        discipline: {
            nom: '', // Assurez-vous de gérer correctement les disciplines depuis l'API
        },
    });

    const handleAddNew = () => {
        // Validez les données avant de les ajouter à l'état
        if (newApprenant.nom && newApprenant.prenom && newApprenant.age && newApprenant.ville && newApprenant.email) {
            setApprenants([...apprenants, newApprenant]);
            setNewApprenant({
                nom: '',
                prenom: '',
                age: '',
                ville: '',
                email: '',
                image_url: '',
                discipline: {
                    nom: '',
                },
            });
        } else {
            alert('Veuillez remplir tous les champs requis.');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewApprenant((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        // Logique pour gérer l'image si nécessaire
    };

    return (
        <div className="container mt-4">
            <h1>Tous les apprenants</h1>

            <Link href={route('admin.apprenants.create')} className="btn btn-primary my-3">
                Ajouter un apprenant
            </Link>

            <div className="table-responsive">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-8">
                                <h2>Liste des apprenants</h2>
                            </div>
                            <div className="col-sm-4">
                                <button type="button" className="btn btn-info add-new" onClick={handleAddNew}>
                                    <i className="fa fa-plus"></i> Ajouter
                                </button>
                            </div>
                        </div>
                    </div>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Prénom</th>
                                <th>Âge</th>
                                <th>Ville</th>
                                <th>Email</th>
                                <th>Image</th>
                                <th>Discipline</th>
                                <th>Actions</th>
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
                                        <img src={apprenant.image_url} alt={apprenant.nom} style={{ maxWidth: '100px' }} />
                                    </td>
                                    <td>{apprenant.discipline.nom}</td> {/* Assurez-vous que discipline est correctement récupérée depuis l'API */}
                                    <td>
                                        <Link href={route('admin.apprenants.edit', apprenant)} className="btn btn-sm btn-primary me-2">
                                            Modifier
                                        </Link>
                                        <form
                                            action={route('admin.apprenants.destroy', apprenant)}
                                            method="post"
                                            className="d-inline"
                                        >
                                            <input type="hidden" name="_method" value="delete" />
                                            <button
                                                type="submit"
                                                className="btn btn-sm btn-danger"
                                                onClick={() => confirm('Êtes-vous sûr de vouloir supprimer cet apprenant ?')}
                                            >
                                                Supprimer
                                            </button>
                                        </form>
                                    </td>
                                </tr>
                            ))}
                            {/* Affichage du nouvel apprenant ajouté */}
                            <tr>
                                <td>{newApprenant.nom}</td>
                                <td>{newApprenant.prenom}</td>
                                <td>{newApprenant.age}</td>
                                <td>{newApprenant.ville}</td>
                                <td>{newApprenant.email}</td>
                                <td>
                                    <img src={newApprenant.image_url} alt={newApprenant.nom} style={{ maxWidth: '100px' }} />
                                </td>
                                <td>{newApprenant.discipline.nom}</td>
                                <td>
                                    {/* Actions pour le nouvel apprenant ajouté */}
                                    <button className="btn btn-sm btn-primary me-2">Modifier</button>
                                    <button className="btn btn-sm btn-danger">Supprimer</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ApprenantIndex;
