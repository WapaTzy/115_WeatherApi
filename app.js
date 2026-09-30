const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/lokasi', async (req, res) => {
    const kota = " jakarta";

    const apikey = "TmW3n2IbOKaZxkghOoYB";

    const  url = `https://api.maptiler.com/geocoding/${kota}.json?key=${apikey}`;

    try {
        const response = await axios.get(url);
        console.log(response.data);

     
        res.json({ 
            kota: lokasi,
            koordinat: koordinat
        });

    } catch (error) {

        console.error(error.message);

        res.status(500).json({
            message: 'Gagal mengambil data dari MapTiler'
        });

    }
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});