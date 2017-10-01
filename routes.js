// var auditions = require('./controllers/auditions.js');
var auditions = require('./controllers/auditions.js');



module.exports = function(app){
    // app.get('/auditions', auditions.findAll);
    // app.get('/auditions/:id', auditions.findById);
    // app.post('/auditions', auditions.add);
    // app.put('/auditions/:id', auditions.update);
    // app.del('/auditions/:id', auditions.del);
    // app.get('/import', auditions.imp);
    // app.get('/deleteAll', auditions.deleteAll);

    app.get('/auditions', auditions.findAll);
    app.get('/auditions/:id', auditions.findById);
    app.post('/audition/add', auditions.add);
    app.put('/auditions/:id', auditions.update);
    app.del('/auditions/:id', auditions.del);
    app.get('/import', auditions.imp);
    app.get('/deleteAll', auditions.deleteAll);
}