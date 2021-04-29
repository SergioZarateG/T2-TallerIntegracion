const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'password',
    database: 'tarea2ti',
    port: '5432',

});

const getArtists = async (req, res) => {
    const response = await pool.query('SELECT * FROM artist');
    res.status(200).json(response.rows);
}

const getArtistById = async (req, res) => {
    const response =  await pool.query('SELECT * FROM artist WHERE id = $1', [req.params.id]);
    res.status(200).json(response.rows);
}

const createArtist = async (req, res) => {
    const { name, age, } = req.body;
    const response = await pool.query('INSERT INTO artist (id, name, age, albums, tracks, self) VALUES ($1, $2, $3, $4, $5, $6)', [name, name, age, 'www.cantante.cl', 'www.cantante.cl', 'www.cant']);
    res.status(201).json({
        id: name,
        name: name,
        age: age,
        albums: 'www.cantante.cl',
        tracks: 'www.cantante.cl',
        self: 'www.cantante.cl'
    })
};

const deleteArtists = async (req, res) => {
    const response = await pool.query('DELETE FROM artist WHERE id = $1', [req.params.id]);
    res.status(204).end();
}

module.exports = {
    getArtists, 
    createArtist,
    getArtistById,
    deleteArtists
}