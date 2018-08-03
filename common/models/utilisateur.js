'use strict';
module.exports = function(Utilisateur) {
  var app;
  Utilisateur.on('attached',function(a)
      {
        app = a;
          console.log('utilisateur connecté');


        });
};
