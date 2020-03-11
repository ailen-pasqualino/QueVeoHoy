var conexionbd = require('../lib/conexionbd');

module.exports = {
    getAllPeliculas:(req,res) => {
    conexionbd.query(
        'SELECT * FROM pelicula', 
        function (error, results, fields) {
            if (error){ 
                console.error(error)
            }

            res.json({peliculas: results});
        }
        );
    },

    getAllGeneros:(req,res) => {
        let sql = 'SELECT * FROM genero';
        conexionbd.query(
            sql, 
            function (error, results, fields){
                if(error){
                    console.log(error)
                }
                res.json({generos: results});
            }
            );
    }
};

/* 

OPCION 2
getAllPeliculas(req,res) => {
        res.json('')
    }

module.exports = { getAllPeliculas }

*/