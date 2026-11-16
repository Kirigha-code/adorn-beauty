-- Categories table
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    slug VARCHAR(100) NOT NULL UNIQUE
);

-- Products table
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    brand VARCHAR(100),
    description TEXT,
    price_ksh NUMERIC(10,2) NOT NULL,
    image_filename VARCHAR(255) NOT NULL,
    category_id INTEGER REFERENCES categories(id),
    is_new BOOLEAN DEFAULT FALSE,
    is_bestseller BOOLEAN DEFAULT FALSE,
    stock INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Users table (for admin login later)
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'admin',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert the 7 categories
INSERT INTO categories (name, slug) VALUES
('Skin & Body Care', 'skin-body'),
('Face Care', 'face-care'),
('Makeup', 'makeup'),
('Hair Care', 'hair-care'),
('Fragrances', 'fragrances'),
('Men''s Grooming', 'mens-grooming'),
('Baby Care', 'baby-care');