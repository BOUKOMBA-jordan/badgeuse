import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { route } from 'ziggy-js';

const ApprenantCreate = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    age: '',
    ville: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Soumettre les données au backend via Inertia
    Inertia.post(route('admin.apprenants.store'), formData)
      .then(() => {
        console.log('Apprenant créé avec succès');
        // Rediriger vers la liste des apprenants après création
        // Utilisez Inertia pour naviguer
        // Exemple : window.location = route('admin.apprenants.index');
      })
      .catch((err) => {
        console.error('Erreur lors de la création de l\'apprenant', err);
        // Gérer les erreurs
      });
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Ajouter un apprenant</h1>

      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label htmlFor="nom" className="form-label">Nom</label>
          <input
            type="text"
            className="form-control"
            id="nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="prenom" className="form-label">Prénom</label>
          <input
            type="text"
            className="form-control"
            id="prenom"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="age" className="form-label">Âge</label>
          <input
            type="number"
            className="form-control"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="ville" className="form-label">Ville</label>
          <input
            type="text"
            className="form-control"
            id="ville"
            name="ville"
            value={formData.ville}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-12 mt-3">
          <button type="submit" className="btn btn-primary me-2">Ajouter</button>
          <Link href={route('admin.apprenants.index')} className="btn btn-outline-secondary">
            Retour
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ApprenantCreate;
