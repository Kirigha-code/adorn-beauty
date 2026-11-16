import express from 'express';
import cors from 'cors';
import { query } from './db.js';

const app = express();

app.use(cors());
app.use(express.json());

// Health check
app.get('/', (req, res) => {
    res.json({ message: 'Adorn Beauty API is running ✅' });
});

// All categories
app.get('/api/categories', async (req, res) => {
    try {
        const { rows } = await query('SELECT * FROM categories ORDER BY id');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch categories' });
    }
});

// All products
app.get('/api/products', async (req, res) => {
    try {
        const { rows } = await query(`
            SELECT
                p.id,
                p.name,
                p.brand,
                p.description,
                p.price_ksh,
                p.image_filename,
                p.is_new,
                p.is_bestseller,
                p.stock,
                p.category_id,
                c.name AS category_name,
                c.slug AS category_slug
            FROM products p
            LEFT JOIN categories c ON c.id = p.category_id
            ORDER BY p.created_at DESC
        `);
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`✅ API listening on http://localhost:${PORT}`);
});