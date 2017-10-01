var musicians = require('./controllers/musicians.js');



module.exports = function(app){
		console.log('musicians is ', musicians);
    app.get('/musicians', musicians.findAll);
    app.get('/musicians/:id', musicians.findById);
    app.post('/musicians', musicians.add);
    app.put('/musicians/:id', musicians.update);
    app.del('/musicians/:id', musicians.del);
    app.get('/import', musicians.imp);
    app.get('/deleteAll', musicians.deleteAll);
}