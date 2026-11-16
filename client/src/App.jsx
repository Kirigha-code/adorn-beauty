import { useEffect, useState } from 'react';
import { getCategories } from './api';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryTabs from './components/CategoryTabs';
import ProductGrid from './components/ProductGrid';

export default function App() {
    const [categories, setCategories] = useState([]);
    const [active, setActive] = useState('');

    useEffect(() => {
        console.log('Fetching categories...');
        getCategories()
            .then((data) => {
                console.log('Got categories:', data);
                setCategories(data);
                if (data.length) setActive(data[0].slug);
            })
            .catch((err) => console.error('API error:', err));
    }, []);

    return (
        <div className="min-h-screen">
            <Navbar />
            <Hero />

            <section id="categories" className="py-20 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                        Shop by Category
                    </h2>
                    <div className="w-16 h-1 bg-brand-gold mx-auto mb-6"></div>
                </div>

                <CategoryTabs categories={categories} active={active} onChange={setActive} />
                <ProductGrid categorySlug={active} />
            </section>

            <footer className="bg-brand-black text-white py-8 text-center text-sm">
                <p className="text-gray-400">&copy; 2024 Adorn Beauty</p>
            </footer>
        </div>
    );
}