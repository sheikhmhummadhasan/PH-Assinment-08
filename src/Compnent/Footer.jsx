"use client";

import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-[#5751e1] text-white mt-10">
            <div className="max-w-7xl mx-auto px-5 py-10 grid md:grid-cols-3 gap-8">

                {/* Contact Info */}
                <div>
                    <h2 className="text-xl font-bold mb-3">Contact</h2>
                    <p>Email: support@example.com</p>
                    <p>Phone: +880 1234-567890</p>
                    <p>Address: Dhaka, Bangladesh</p>
                </div>

                {/* Social Links */}
                <div>
                    <h2 className="text-xl font-bold mb-3">Follow Us</h2>
                    <div className="flex gap-4">
                        <Link href="#">Facebook</Link>
                        <Link href="#">Twitter</Link>
                        <Link href="#">Instagram</Link>
                    </div>
                </div>

                {/* Terms & Privacy */}
                <div>
                    <h2 className="text-xl font-bold mb-3">Legal</h2>
                    <div className="flex flex-col gap-2">
                        <Link href="#">Terms & Conditions</Link>
                        <Link href="#">Privacy Policy</Link>
                    </div>
                </div>

            </div>

            {/* Bottom */}
            <div className="text-center border-t border-white/30 py-4 text-sm">
                © {new Date().getFullYear()} Your Company. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;