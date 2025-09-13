
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const joiaRoutes = require('./src/routes/joiaRoutes');
const personalizacaoRoutes = require('./src/routes/personalizacaoRoutes');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

console.log('PORT:', process.env.PORT);

app.use('/api/jewels', joiaRoutes);
app.use('/api/customizations', personalizacaoRoutes);

app.get('/', (_, res) => res.send('Hilary Grace API running...'));

app.use((err, _, res, __) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal error' });
});

// Adicionar o listen para iniciar o servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🎀 Servidor rodando em http://localhost:${PORT}`);
    console.log(`💎 API Jewels: http://localhost:${PORT}/api/jewels`);
    console.log(`✨ API Customizations: http://localhost:${PORT}/api/customizations`);
});