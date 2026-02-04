import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        {/* Simple text logo if needed or repeated image */}
                        <span className="text-xl font-bold tracking-tight text-white">
                            Aries Technologies
                        </span>
                    </div>

                    <div className="text-white/40 text-sm">
                        © {new Date().getFullYear()} Aries Technologies. All rights reserved.
                    </div>

                    <div className="flex gap-6">
                        <Link href="#" className="text-white/40 hover:text-primary transition-colors text-sm">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-white/40 hover:text-primary transition-colors text-sm">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
