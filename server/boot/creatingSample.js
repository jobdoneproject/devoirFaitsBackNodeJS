'use strict';


module.exports = function(app) {
  var rpPerformer = require('./rpPerformer.js');
  //var request = require('request');
  var ds = app.datasources.jobdone;


  var modelMockaroTemplate = [
    {
      modelName: 'salle',
      mockaroUri: 'https://my.api.mockaroo.com/salle.json?key=a4ce4e10',
      withIdInjection: true,
    },
    {
      modelName: 'etablissement',
      mockaroUri: '',
      withIdInjection: false,
    },
    {
      modelName: 'utilisateur',
      mockaroUri: '',
      withIdInjection: false,
    },
    {
      modelName: 'groupe',
      mockaroUri: '',
      withIdInjection: false,
    },
    {
      modelName: 'message',
      mockaroUri: '',
      withIdInjection: false,
    },
    {
      modelName: 'communication',
      mockaroUri: '',
      withIdInjection: false,
    },
    {
      modelName: 'creneau',
      mockaroUri: '',
      withIdInjection: false,
    },
  ];

  Object.values(modelMockaroTemplate).forEach(value => {
    if (value['modelName'] === 'salle') {
      //var mockaroSalleObj = Promise.resolve.bind(rpPerformer.rpexecute(value['mockaroUri']));
      var mockaroSalleObj = new rpPerformer().rpexecute(value['mockaroUri']);
      //let mockaroSalleObj = new rpPerformer().rpexecute(value['mockaroUri']);
      // let mockaroSalleObj = new rpPerformer().getContentClassic(value['mockaroUri'])
      // .then((html) => console.log(html))
      // .catch((err) => console.error(err));
      //let mockaroSalleObj = Promise.resolve(new rpPerformer().getContent(value['mockaroUri']));

      var Salle = ds.buildModelFromInstance(value['modelName'], mockaroSalleObj, value['withIdInjection']);
      var instanceSalle = new Salle(mockaroSalleObj);
      Salle.create(instanceSalle, function(err, model) {
        if (err) throw err;
        console.log('Created:', model);
      });
    };
  });

  ds.disconnect();
};
