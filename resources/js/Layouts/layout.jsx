import React from 'react';
import { Link } from '@inertiajs/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tom-select/dist/css/tom-select.bootstrap5.css';
import TomSelect from 'tom-select';

const Layout = ({ children, routeName }) => {
    React.useEffect(() => {
        new TomSelect('select[multiple]', {
            plugins: {
                remove_button: {
                    title: 'Supprimer'
                }
            }
        });
    }, []);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
                <div className="container-fluid">
                    <a href="/" className="navbar-brand">Apprenants</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-expanded="false" aria-label="toggler navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link href={route('admin.apprenant.index')} className={`nav-link ${routeName.startsWith('admin.apprenant') ? 'active' : ''}`}>Gérer les apprenants</Link>
                            </li>
                            <li className="nav-item">
                                <Link href={route('admin.discipline.index')} className={`nav-link ${routeName.startsWith('admin.discipline') ? 'active' : ''}`}>Gérer les disciplines</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container mt-5">
                {children}
            </div>
        </>
    );
};

export default Layout;
