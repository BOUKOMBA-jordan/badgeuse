const Ziggy = {
    namedRoutes: {
        'admin.apprenants.index': { uri: () => '/admin/apprenants', methods: ['GET'] },
        'admin.apprenants.create': { uri: () => '/admin/apprenants/create', methods: ['GET'] },
        'admin.apprenants.store': { uri: () => '/admin/apprenants', methods: ['POST'] },
        'admin.apprenants.edit': { uri: (apprenant) => `/admin/apprenants/${apprenant.id}/edit`, methods: ['GET', 'POST'] },
        'admin.apprenants.update': { uri: (apprenant) => `/admin/apprenants/${apprenant.id}`, methods: ['PUT'] },
        'admin.apprenants.destroy': { uri: (apprenant) => `/admin/apprenants/${apprenant.id}`, methods: ['DELETE'] },
    },
};

export default Ziggy;
