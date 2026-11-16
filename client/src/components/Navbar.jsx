export default function Navbar() {
    return (
        <nav className="absolute top-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-transparent border-b border-white/10">
            <a href="#" className="flex items-center gap-3">
                <img src="/logo.jpg" alt="Adorn Beauty" className="h-16 w-auto object-contain bg-black rounded-sm" />
            </a>
            <div className="hidden md:flex gap-8 items-center text-white text-sm tracking-widest uppercase">
                <a href="#home" className="hover:text-brand-gold transition-colors">Home</a>
                <a href="#categories" className="hover:text-brand-gold transition-colors">Collections</a>
                <a href="#about" className="hover:text-brand-gold transition-colors">About</a>
                <a href="mailto:info@adornbeauty.co.ke" className="px-5 py-2 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black transition-colors">
                    Contact
                </a>
            </div>
        </nav>
    );
}
