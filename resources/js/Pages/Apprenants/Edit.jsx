import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';
import { route } from 'ziggy-js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../../../css/style.css'; // Assurez-vous d'inclure le style personnalisé ici

const ApprenantEdit = ({ apprenant }) => {
  const [formData, setFormData] = useState({
    nom: apprenant.nom,
    prenom: apprenant.prenom,
    age: apprenant.age,
    ville: apprenant.ville,
    email: apprenant.email,
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData((prevState) => ({
        ...prevState,
        [name]: files[0],
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    // Soumettre les données au backend via Inertia
    Inertia.post(route('admin.apprenants.update', apprenant.id), data)
      .then(() => {
        console.log('Apprenant mis à jour avec succès');
        // Redirection ou autre action après la mise à jour réussie
        // Exemple : window.location = route('admin.apprenants.index');
      })
      .catch((err) => {
        console.error('Erreur lors de la mise à jour de l\'apprenant', err);
        // Gestion des erreurs de mise à jour
      });
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Modifier un apprenant</h1>

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
        <div className="col-md-6">
          <label htmlFor="image" className="form-label">Image</label>
          <input
            type="file"
            className="form-control"
            id="image"
            name="image"
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary me-2">Modifier</button>
          <Link href={route('admin.apprenants.index')} className="btn btn-secondary">Retour</Link>
        </div>
      </form>
    </div>
  );
};

export default ApprenantEdit;
