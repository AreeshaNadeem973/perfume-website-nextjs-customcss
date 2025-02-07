
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosMenu, IoIosClose } from "react-icons/io";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname(); // Get current route

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    // Close menu automatically when the route changes
    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]); // Runs whenever pathname changes

    return (
        <div className="navbar">
            <div className="navbar-container">
                <Link href="/" className="logo">
                    Perfume
                </Link>
                <button
                    className="menu-toggle"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    {menuOpen ? <IoIosClose size={24} /> : <IoIosMenu size={24} />}
                </button>
                <ul className={`menu ${menuOpen ? "open" : ""}`}>
                    <li>
                        <Link href="/" className={pathname === "/" ? "active" : ""}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/About" className={pathname === "/About" ? "active" : ""}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/Product" className={pathname === "/Product" ? "active" : ""}>
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link href="/Contact" className={pathname === "/Contact" ? "active" : ""}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
