// Menu.jsx

import React from 'react';
import { Link } from '@inertiajs/inertia-react';

const Menu = () => {
    return (
        <nav className="bg-gray-800 text-white">
            <ul className="flex items-center justify-center py-4">
                <li className="mx-4">
                    <Link
                        href="/"
                        className="hover:text-blue-500 transition duration-300"
                    >
                        Accueil
                    </Link>
                </li>
                <li className="mx-4">
                    <Link
                        href="/admin/apprenant"
                        className="hover:text-blue-500 transition duration-300"
                    >
                        Apprenants
                    </Link>
                </li>
                <li className="mx-4">
                    <Link
                        href="/admin/discipline"
                        className="hover:text-blue-500 transition duration-300"
                    >
                        Disciplines
                    </Link>
                </li>
                <li className="mx-4">
                    <Link
                        href="/evenement"
                        className="hover:text-blue-500 transition duration-300"
                    >
                        Événements
                    </Link>
                </li>
                <li className="mx-4">
                    <Link
                        href="/contact"
                        className="hover:text-blue-500 transition duration-300"
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;
