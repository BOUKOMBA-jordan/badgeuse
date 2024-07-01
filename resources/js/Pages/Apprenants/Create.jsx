import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { route } from 'ziggy-js';
import { Inertia } from '@inertiajs/inertia-react';

const ApprenantCreate = () => {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        age: '',
        ville: '',
        email: '',
        image: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData((prevState) => ({
            ...prevState,
            image: file,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formDataWithImage = new FormData();
        formDataWithImage.append('nom', formData.nom);
        formDataWithImage.append('prenom', formData.prenom);
        formDataWithImage.append('age', formData.age);
        formDataWithImage.append('ville', formData.ville);
        formDataWithImage.append('email', formData.email);
        formDataWithImage.append('image', formData.image);

        Inertia.post(route('admin.apprenants.store'), formDataWithImage)
            .then(() => {
                console.log('Apprenant créé avec succès');
                Inertia.visit(route('admin.apprenants.index'));
            })
            .catch((err) => {
                console.error('Erreur lors de la création de l\'apprenant', err);
            });
    };

    return (
        <div className="container mt-4">
            <h1 className="mb-4">Ajouter un apprenant</h1>

            <form onSubmit={handleSubmit} className="row g-3" encType="multipart/form-data">
                <div className="col-md-6">
                    <label htmlFor="nom" className="form-label">Nom</label>
                    <input type="text" className="form-control" id="nom" name="nom" value={formData.nom} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="prenom" className="form-label">Prénom</label>
                    <input type="text" className="form-control" id="prenom" name="prenom" value={formData.prenom} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="age" className="form-label">Âge</label>
                    <input type="number" className="form-control" id="age" name="age" value={formData.age} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="ville" className="form-label">Ville</label>
                    <input type="text" className="form-control" id="ville" name="ville" value={formData.ville} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="image" className="form-label">Image</label>
                    <input type="file" className="form-control" id="image" name="image" onChange={handleImageChange} />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary me-2">Ajouter</button>
                    <Link href={route('admin.apprenants.index')} className="btn btn-outline-secondary">Retour</Link>
                </div>
            </form>
        </div>
    );
};

export default ApprenantCreate;
