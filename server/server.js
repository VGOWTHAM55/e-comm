const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const Stripe = require('stripe');

// Load environment variables from .env
dotenv.config();

// Initialize Stripe with your secret key
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const app = express();

// Allow frontend (Vite/React on port 5173) to access backend
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

// Health check route
app.get('/', (req, res) => {
  res.send('✅ Stripe backend is running.');
});

const DEMO_USER = {
  email: 'user@example.com',
  password: 'password', // In real apps, NEVER store plain passwords!
  token: 'demo-token'
};

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (email === DEMO_USER.email && password === DEMO_USER.password) {
    res.json({ token: DEMO_USER.token, message: 'Login successful' });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Create a PaymentIntent for Stripe
app.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;

  if (!amount || typeof amount !== 'number') {
    return res.status(400).send({ error: 'Invalid amount value' });
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      automatic_payment_methods: { enabled: true },
    });

    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error('Stripe Error:', err.message);
    res.status(500).send({ error: 'PaymentIntent creation failed' });
  }
});

// Start the server
const PORT = process.env.PORT || 4242;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
