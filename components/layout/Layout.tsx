export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-kent-slate-gray text-chester-white">
                <nav className="container mx-auto p-4">
                    {/* Simple text navbar - we'll enhance later */}
                    <div className="flex justify-between items-center">
                        <div className="text-2xl font-bold">Boise Gun Club</div>
                        <div className="space-x-4">
                            <a href="/" className="hover:text-leonard-yellow">Home</a>
                            <a href="/about" className="hover:text-leonard-yellow">About</a>
                            {/* More links */}
                        </div>
                    </div>
                </nav>
            </header>
            <main className="flex-grow">
                {children}
            </main>
            <footer className="bg-kent-slate-gray text-chester-white p-4">
                <div className="container mx-auto">
                    © {new Date().getFullYear()} Boise Gun Club
                </div>
            </footer>
        </div>
    );
}