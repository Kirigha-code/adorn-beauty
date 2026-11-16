export default function ProductCard({ product }) {
    return (
        <div className="bg-white p-4 rounded-sm hover:-translate-y-1 hover:shadow-lg transition-transform duration-300">
            <div className="aspect-square overflow-hidden bg-gray-100 mb-4 relative">
                <img
                    src={`/images/${product.image_filename}`}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => { e.target.style.opacity = 0.2; }}
                />
                {product.is_new && (
                    <span className="absolute top-2 left-2 bg-brand-black text-white text-[10px] px-2 py-1 uppercase tracking-wider">New</span>
                )}
            </div>
            <p className="text-xs text-brand-gold uppercase tracking-wider mb-1">{product.brand}</p>
            <h3 className="font-serif text-lg font-bold mb-2">{product.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{product.description}</p>
            <div className="flex justify-between items-center border-t border-gray-100 pt-3">
                <span className="text-sm font-semibold">KSh {Number(product.price_ksh).toLocaleString()}</span>
            </div>
        </div>
    );
}
