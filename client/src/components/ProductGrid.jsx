import { useEffect, useState } from 'react';
import { getProducts } from '../api';
import ProductCard from './ProductCard';

export default function ProductGrid({ categorySlug }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        setLoading(true);
        setError('');
        getProducts()
            .then((data) => {
                const filtered = categorySlug
                    ? data.filter((p) => p.category_slug === categorySlug)
                    : data;
                setProducts(filtered);
            })
            .catch((err) => {
                console.error(err);
                setError('Could not load products. Is the API running?');
            })
            .finally(() => setLoading(false));
    }, [categorySlug]);

    if (loading) return <p className="text-center py-12 text-gray-500">Loading products...</p>;
    if (error) return <p className="text-center py-12 text-red-500">{error}</p>;
    if (products.length === 0) return <p className="text-center py-12 text-gray-500">No products in this category yet.</p>;

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {products.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
    );
}
