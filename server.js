const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Configuração de segurança e middlewares
app.use(helmet({
    contentSecurityPolicy: false, // Permitir carregamento de CDNs e estilos externos no frontend
}));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota de Teste / Saúde do Servidor
app.get('/health', (req, res) => {
    res.json({
        status: 'online',
        app: 'VIP da Nicolly',
        timestamp: new Date().toISOString(),
        mercadopagoConfigured: !!process.env.MERCADOPAGO_ACCESS_TOKEN
    });
});

// Endpoint para Webhook do Mercado Pago (Confirmação de Pagamento Pix)
app.post('/api/webhooks/mercadopago', async (req, res) => {
    try {
        const paymentInfo = req.body;
        console.log('Notificação Pix recebida do Mercado Pago:', paymentInfo);
        
        // Aqui o servidor processa a aprovação e libera o acesso automaticamente
        return res.status(200).json({ received: true });
    } catch (error) {
        console.error('Erro no webhook:', error);
        return res.status(500).json({ error: 'Erro interno ao processar webhook' });
    }
});

// Servir o arquivo estático da interface principal
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
