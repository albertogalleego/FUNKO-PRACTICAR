    const express = require('express');
    const app = express();
    const morgan = require('morgan');
    const cors = require('cors');
   

    // Importa la configuración de la base de datos
    const { mongoose } = require('./database');

   

    app.use(morgan('dev'));
    app.use(express.json());
    app.use(cors({ origin: 'http://localhost:4200' }));

    app.set('port', process.env.PORT || 3000);
    app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto', app.get('port'));
    });

    //midelware
  
    //
    //routes
    //app.use(require('./routes/categorias.routes'))
    app.use('/api/usuarios', require ('./routes/usuarios.routes'))
    app.use('/api/productos', require ('./routes/productos.routes'))
    app.use('/api/categorias', require ('./routes/categorias.routes'))
    app.use('/api/miscompras', require ('./routes/miscompras.routes'))


    //iniciar
