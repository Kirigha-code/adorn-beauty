export default function CategoryTabs({ categories, active, onChange }) {
    return (
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {categories.map((cat) => {
                const isActive = active === cat.slug;
                return (
                    <button
                        key={cat.id}
                        onClick={() => onChange(cat.slug)}
                        className={`px-4 py-2 text-sm uppercase tracking-wider font-medium border-b-2 transition-colors ${
                            isActive
                                ? 'border-brand-gold text-brand-black'
                                : 'text-gray-500 border-transparent hover:text-brand-black'
                        }`}
                    >
                        {cat.name}
                    </button>
                );
            })}
        </div>
    );
}
