export default function Hero() {
    return (
        <section id="home" className="relative h-screen bg-brand-black overflow-hidden flex items-center justify-center">
            <div className="relative z-10 text-center text-white px-4">
                <p className="text-brand-gold tracking-[0.3em] uppercase text-sm mb-4">
                    Curated Beauty Essentials
                </p>
                <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
                    Redefining Your <br />
                    <span className="text-brand-gold italic">Everyday Glow</span>
                </h1>
                <p className="text-gray-300 md:text-lg max-w-2xl mx-auto mb-10 font-light">
                    Discover premium skincare, luxurious fragrances, and professional makeup.
                </p>
                <a href="#categories" className="inline-block bg-brand-gold text-black font-semibold px-8 py-3 uppercase tracking-widest text-sm hover:bg-white transition-colors duration-300">
                    Explore Collection
                </a>
            </div>
        </section>
    );
}
