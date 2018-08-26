'use strict';

module.exports = function(app) {
  app.dataSources.jobDone.automigrate('salle', function(err) {
    if (err) throw err;
    app.models.salle.create([{
      nomSalle: 'Salle 1',
    },
    {
      nomSalle: 'Salle 2',
    },
  ], function(err, salles){
      if (err) throw err;

      console.log('Salle Model created and sample datas added:');
      Object.keys(salles).forEach(ele => {
        console.log(`key=${ele} nomSalle=${salles[ele].nomSalle}`);
      });
      console.log('\n');
      // console.log('\nModels created:\n', salles);
    });
  }
  );
  app.dataSources.jobDone.automigrate('Etablissement', function(err) {
    if (err) throw err;
    app.models.Etablissement.create([{
      numero_uai: '0640212H',
      type_etab: 'type1',
      localite_acheminement_uai: 'test_localite_acheminement_uai',
      secteur_public_prive_libe: 'test_secteur_public_prive_libe',
      etat_etablissement: 'string_etat_etablissement',
      libelle_region: 'string_libelle_region',
      code_postal_uai: 'string_code_postal_uai',
      code_region: 'string_code_region',
      epsg: 'string_epsg',
      nature_uai_libe: 'string_',
      appellation_officielle: 'string_',
      latitude: 'string_',
      coordonnee_y: 'string_',
      coordonnee_x: 'string_',
      adresse_uai: 'string_',
      code_commune: 'string_',
      localisation: 'string_',
      libelle_commune: 'string_',
      code_departement: 'string_',
      etat_etablissement_libe: 'string_',
      appariement: 'string_',
      longitude: 'string_',
      patronyme_uai: 'string_',
      denomination_principale: 'string_',
      libelle_academie: 'string_',
      position: [{
        lat: '0',
        lng: '0',
      }],
    }], function(err, etablissements){
      if (err) throw err;

      console.log('Etablissement Model created and sample datas added:');
      Object.keys(etablissements).forEach(ele => {
        console.log(`key=${ele} numero_uai=${etablissements[ele].numero_uai}`);
      });
      console.log('\n');
      // console.log('\nModels created:\n', etablissements);
    });
  }
  );
  app.dataSources.jobDone.automigrate('utilisateur', function(err) {
    if (err) throw err;
    var User = app.models.User;
    var Role = app.models.Role;
    var RoleMapping = app.models.RoleMapping;
    var Etablissement = app.models.Etablissement;
    var etabMarracq = Etablissement.find({where: {numero_uai: '0640212H'}, limit: 1});

    app.models.Utilisateur.create([{
      nom: 'Labrador',
      prenom: 'Richard',
      password: '123',
      privilege: 'Administrateur',
      ville: 'Bayonne',
      disponible: true,
      classeName: '',
      actif: false,
      telephone: '0672997809',
      email: 'admin@mail.com',
      numero_uai: etabMarracq.numero_uai,
      realm: etabMarracq.numero_uai,
    },
    {
      nom: 'ENE-LEPLECITTI',
      prenom: 'Cathy',
      password: '123',
      privilege: 'eleve',
      ville: 'Bayonne',
      disponible: true,
      classeName: 'MATH 1',
      actif: false,
      telephone: '0686175496',
      email: 'eleve@mail.com',
      numero_uai: etabMarracq.numero_uai,
      realm: etabMarracq.numero_uai,
    },
    {
      nom: 'BIEOT',
      prenom: 'Adrien',
      password: '123',
      privilege: 'professeur',
      ville: 'Bayonne',
      disponible: true,
      classeName: '',
      actif: false,
      telephone: '0686175496',
      email: 'professeur@mail.com',
      numero_uai: etabMarracq.numero_uai,
      realm: etabMarracq.numero_uai,
    }], function(err, utilisateurs){
      if (err) throw err;
      var rolesfound = Role.count();
      if (!rolesfound) {
      // create the admin role
      Role.create({
        name: 'admin',
      }, function(err, role) {
        if (err) throw err;

        console.log('Created role:', role);

        // make richard labrador an admin
        role.principals.create({
          principalType: RoleMapping.USER,
          principalId: utilisateurs[0].id,
        }, function(err, principal) {
          if (err) throw err;
          console.log('Created principal for : ', principal);
        });
      });

      Role.create({
        name: 'eleve',
      }, function(err, role) {
        if (err) throw err;

        console.log('Created role:', role);

        // make ENE-LEPLECITTI an eleve
        role.principals.create({
          principalType: RoleMapping.USER,
          principalId: utilisateurs[1].id,
        }, function(err, principal) {
          if (err) throw err;
          console.log('Created principal for : ', principal);
        });
      });

      Role.create({
        name: 'professeur',
      }, function(err, role) {
        if (err) throw err;

        console.log('Created role:', role);

        // make BIEOT a professeur
        role.principals.create({
          principalType: RoleMapping.USER,
          principalId: utilisateurs[2].id,
        }, function(err, principal) {
          if (err) throw err;
          console.log('Created principal for : ', principal);
        });
      });
      }
      console.log('Utilisateur Model created and sample datas added:');
      Object.keys(utilisateurs).forEach(ele => {
        console.log(`key=${ele} name=${utilisateurs[ele].nom}
        password=${utilisateurs[ele].password}`);
      });
      console.log('\n');
      // console.log('\nModels created:\n', coffeeShops);
    });
  }
  );
  app.dataSources.jobDone.automigrate('userlog', function(err) {
    if (err) throw err;
    var User = app.models.User;
    // var Role = app.models.Role;
    // var RoleMapping = app.models.RoleMapping;
    // var Etablissement = app.models.Etablissement;
    //var etabMarracq = Etablissement.find({where: {numero_uai: '0640212H'}, limit: 1});

    app.models.userlog.create([{
      userFirstName: 'foo@mail.com',
      userSirName: 'foo@mail.com',
      userEmail: 'foo@mail.com',
      logindatetime: new Date(),
      actionType: 'login',
    }], function(err, userlogs){
      if (err) throw err;
      console.log('userlog Model created and sample datas added:');
      Object.keys(userlogs).forEach(ele => {
        console.log(`key=${ele} name=${userlogs[ele].nom}`);
      });
      console.log('\n');
      // console.log('\nModels created:\n', coffeeShops);
    });
  }
  );
};
