import { useState, useEffect } from "react";

// ============ IMAGES (adjust these paths to match your assets/img folder) ============
import logoIcon from "./assets/img/icon.png";
import heroImg from "./assets/img/prime_logo.png";
import cappuccinoImg from "./assets/img/items/Cappuccino.jpg";
import latteImg from "./assets/img/items/Latte.PNG";
import espressoImg from "./assets/img/items/Espresso.jpg";
import mochaImg from "./assets/img/items/Mocha.PNG";
import americanoImg from "./assets/img/items/Cafe Americano.jpg";
import macchiatoImg from "./assets/img/items/Cafe Macchiato.jpg";
import cremaImg from "./assets/img/items/Cafe Crema.jpg";
import viennaImg from "./assets/img/items/Vienna.PNG";
import irishCoffeeImg from "./assets/img/items/Irish Coffee.PNG";
import longBlackImg from "./assets/img/items/Long Black.jpg";
import melangeImg from "./assets/img/items/Melange.jpg";
import affogatoImg from "./assets/img/items/Affogato.PNG";
import conPannaImg from "./assets/img/items/Con Panna.jpg";
import eggCoffeeImg from "./assets/img/items/Egg Coffee.jpg";
import frappeImg from "./assets/img/items/Frappe.PNG";
import filterCoffeeImg from "./assets/img/items/Filter Coffee.jpg";
import yirgacheffeImg from "./assets/img/items/Ethiopian Yirgacheffe.PNG";
import viennoiseImg from "./assets/img/items/Viennese.webp";
import pourOverImg from "./assets/img/items/Pour Over.jpg";
import ristrettoImg from "./assets/img/items/Ristretto.jpg";

// ============ PRODUCT DATA ============
const products = [
    { id: 1, name: "Cappuccino", category: "single-origin", price: 18.99, original: 24.99, rating: 5, reviews: 247, desc: "Floral notes with bright citrus acidity", badge: "Best Seller", img: cappuccinoImg },
    { id: 2, name: "Latte", category: "single-origin", price: 22.50, original: 28.00, rating: 4.8, reviews: 189, desc: "Balanced body with caramel sweetness", badge: "Premium", img: latteImg },
    { id: 3, name: "Espresso", category: "blend", price: 19.99, original: 0, rating: 5, reviews: 312, desc: "Rich chocolate and nutty finish", badge: "New", img: espressoImg },
    { id: 4, name: "Mocha", category: "espresso", price: 16.99, original: 21.99, rating: 4.9, reviews: 156, desc: "Bold, smoky with caramel undertones", badge: "Popular", img: mochaImg },
    { id: 5, name: "Cafe Americano", category: "single-origin", price: 21.00, original: 26.50, rating: 4.7, reviews: 98, desc: "Full body with berry and wine notes", badge: "Sale", img: americanoImg },
    { id: 6, name: "Cafe Macchiato", category: "single-origin", price: 17.50, original: 22.00, rating: 4.6, reviews: 134, desc: "Smooth with nutty chocolate notes", badge: "", img: macchiatoImg },
    { id: 7, name: "Cafe Crema", category: "espresso", price: 4.99, original: 0, rating: 5, reviews: 423, desc: "Pure intensity in every shot", badge: "Best", img: cremaImg },
    { id: 8, name: "Vienna", category: "espresso", price: 18.50, original: 23.50, rating: 4.8, reviews: 201, desc: "Dark and complex with spicy notes", badge: "", img: viennaImg },
    { id: 9, name: "Irish Coffee", category: "single-origin", price: 20.00, original: 25.00, rating: 4.7, reviews: 167, desc: "Earthy with herbal and cedar notes", badge: "Sale", img: irishCoffeeImg },
    { id: 10, name: "Long Black", category: "single-origin", price: 19.75, original: 24.75, rating: 4.9, reviews: 211, desc: "Citrus and chocolate with body", badge: "", img: longBlackImg },
    { id: 11, name: "Melange", category: "blend", price: 16.50, original: 21.00, rating: 4.8, reviews: 289, desc: "Perfect for your daily cup", badge: "Popular", img: melangeImg },
    { id: 12, name: "Affogato", category: "single-origin", price: 23.00, original: 28.50, rating: 5, reviews: 145, desc: "Wine-like with floral notes", badge: "Premium", img: affogatoImg },
    { id: 13, name: "Con Panna", category: "single-origin", price: 21.50, original: 26.99, rating: 4.7, reviews: 176, desc: "Sweet with peach and tea notes", badge: "", img: conPannaImg },
    { id: 14, name: "Egg Coffee", category: "single-origin", price: 18.75, original: 23.75, rating: 4.6, reviews: 122, desc: "Smooth with caramel sweetness", badge: "Sale", img: eggCoffeeImg },
    { id: 15, name: "Frappé", category: "espresso", price: 17.00, original: 22.00, rating: 4.9, reviews: 234, desc: "Bittersweet with bold character", badge: "", img: frappeImg },
    { id: 16, name: "Filter Coffee", category: "single-origin", price: 20.50, original: 25.99, rating: 4.8, reviews: 198, desc: "Rich spice and chocolate notes", badge: "", img: filterCoffeeImg },
    { id: 17, name: "Ethiopian Yirgacheffe", category: "single-origin", price: 21.75, original: 27.25, rating: 5, reviews: 156, desc: "Berry and jam with smooth body", badge: "Best", img: yirgacheffeImg },
    { id: 18, name: "Viennese", category: "blend", price: 17.99, original: 22.99, rating: 4.7, reviews: 267, desc: "Versatile blend for any time", badge: "Popular", img: viennoiseImg },
    { id: 19, name: "Pour Over", category: "single-origin", price: 19.50, original: 24.50, rating: 4.6, reviews: 109, desc: "Earthy with forest floor notes", badge: "Sale", img: pourOverImg },
    { id: 20, name: "Ristretto", category: "single-origin", price: 22.25, original: 27.75, rating: 4.9, reviews: 187, desc: "Sweet cocoa and almond flavors", badge: "", img: ristrettoImg },
];

const NAV_ITEMS = [
    { id: "home", label: "Home", icon: "fa-home" },
    { id: "products", label: "Products", icon: "fa-coffee" },
    { id: "services", label: "Services", icon: "fa-crown" },
    { id: "support", label: "Support", icon: "fa-headset" },
    { id: "login", label: "Login", icon: "fa-user" },
    { id: "download", label: "App", icon: "fa-mobile-alt" },
];

export default function CoffeeToffee() {
    const [loading, setLoading] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const [activeFilter, setActiveFilter] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");
    const [activeSection, setActiveSection] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);
    const [wishlist, setWishlist] = useState({});

    // Inject fonts + Font Awesome once
    useEffect(() => {
        const links = [
            { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" },
            { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;900&family=Poppins:wght@300;400;500;600;700&display=swap" },
        ];
        const created = links.map((l) => {
            const el = document.createElement("link");
            el.rel = l.rel;
            el.href = l.href;
            document.head.appendChild(el);
            return el;
        });
        return () => created.forEach((el) => el.remove());
    }, []);

    // Preloader
    useEffect(() => {
        const t = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(t);
    }, []);

    // Navbar scroll effect
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 100);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleNavClick = (e, id) => {
        e.preventDefault();
        setActiveSection(id);
        setMenuOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    const toggleWishlist = (id) => {
        setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const addToCart = (name, price) => {
        alert(`✓ ${name} added to cart!\nPrice: ₹${price.toFixed(2)}`);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        alert("✓ Login successful! Welcome to Coffee Toffee.");
    };

    const filteredProducts = products.filter((p) => {
        const matchFilter = activeFilter === "all" || p.category === activeFilter;
        const matchSearch =
            p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.desc.toLowerCase().includes(searchTerm.toLowerCase());
        return matchFilter && matchSearch;
    });

    return (
        <div className="ct-root">
            <style>{CSS}</style>

            {/* Preloader */}
            <div className={`preloader ${loading ? "" : "hidden"}`}>
                <div className="preloader-content">
                    <div className="coffee-cup-loader">
                        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <path d="M 30 40 Q 50 30 70 40 L 65 80 Q 50 90 35 80 Z" fill="none" stroke="white" strokeWidth="2" />
                            <circle cx="40" cy="50" r="4" fill="white">
                                <animate attributeName="opacity" values="1;0;1" dur="1.5s" repeatCount="indefinite" />
                            </circle>
                        </svg>
                    </div>
                    <div className="preloader-text">Brewing Excellence...</div>
                </div>
            </div>

            {/* Navbar */}
            <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
                <div className="nav-container">
                    <a href="#home" className="logo-section" onClick={(e) => handleNavClick(e, "home")}>
                        <div className="logo-icon">
                            <img src={logoIcon} alt="Coffee Toffee logo" />
                        </div>
                        <span>Coffee Toffee</span>
                    </a>
                    <div className="search-bar">
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search coffees..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <i className="fas fa-search"></i>
                    </div>
                    <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                        {NAV_ITEMS.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    className={`nav-link ${activeSection === item.id ? "active" : ""
                                        }`}
                                    onClick={(e) => handleNavClick(e, item.id)}
                                >
                                    <i className={`fas ${item.icon}`}></i>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen((o) => !o)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </header >

            {/* Hero */}
            < section id="home" className="hero-section" >
                <div className="hero-content">
                    <div className="hero-image-container">
                        <img src={heroImg} alt="Premium Coffee" className="hero-image" />
                    </div>
                    <div className="hero-text">
                        <h1>Experience Coffee Perfection</h1>
                        <p>
                            Discover our handcrafted coffees sourced from the world's finest estates. Roasted daily with
                            precision and served with passion. Every cup tells a story of excellence.
                        </p>
                        <div className="hero-stats">
                            <div className="stat">
                                <div className="stat-number">500+</div>
                                <div className="stat-label">Customers</div>
                            </div>
                            <div className="stat">
                                <div className="stat-number">24</div>
                                <div className="stat-label">Awards</div>
                            </div>
                            <div className="stat">
                                <div className="stat-number">99%</div>
                                <div className="stat-label">Quality</div>
                            </div>
                        </div>
                        <div className="cta-buttons">
                            <button className="btn-primary" onClick={(e) => handleNavClick(e, "products")}>Order Now</button>
                            <button className="btn-secondary" onClick={(e) => handleNavClick(e, "services")}>Learn More</button>
                        </div>
                    </div>
                </div>
            </section >

            {/* Products */}
            < section id="products" className="products-section" >
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Collection</h2>
                        <p className="section-subtitle">Handpicked coffees from around the world</p>
                        <div className="filter-buttons">
                            {[
                                { id: "all", label: "All" },
                                { id: "espresso", label: "Espresso" },
                                { id: "single-origin", label: "Single Origin" },
                                { id: "blend", label: "Blends" },
                            ].map((f) => (
                                <button
                                    key={f.id}
                                    className={`filter-btn ${activeFilter === f.id ? "active" : ""}`}
                                    onClick={() => setActiveFilter(f.id)}
                                >
                                    {f.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="products-grid">
                        {filteredProducts.map((product) => {
                            const discountPercent = product.original
                                ? Math.round(((product.original - product.price) / product.original) * 100)
                                : 0;
                            const isWishlisted = !!wishlist[product.id];
                            const badgeClass =
                                product.badge === "Sale" ? " sale" : product.badge === "New" ? " new" : "";
                            return (
                                <div className="product-card" key={product.id}>
                                    <div className="product-image-wrapper">
                                        <img src={product.img} alt={product.name} className="product-image" />
                                        {product.badge && <span className={`product-badge${badgeClass}`}>{product.badge}</span>}
                                    </div>
                                    <div className="product-details">
                                        <h3 className="product-name">{product.name}</h3>
                                        <div className="product-rating">⭐ {product.rating} ({product.reviews})</div>
                                        <p className="product-description">{product.desc}</p>
                                        <div className="product-price-section">
                                            <span className="price-current">₹{product.price.toFixed(2)}</span>
                                            {product.original > 0 && (
                                                <span className="price-original">₹{product.original.toFixed(2)}</span>
                                            )}
                                            {discountPercent > 0 && <span className="discount-label">-{discountPercent}%</span>}
                                        </div>
                                        <div className="product-actions">
                                            <button
                                                className={`action-btn btn-heart ${isWishlisted ? "active" : ""}`}
                                                onClick={() => toggleWishlist(product.id)}
                                                style={
                                                    isWishlisted
                                                        ? { color: "#ff6b6b", background: "rgba(255,107,107,0.2)" }
                                                        : undefined
                                                }
                                            >
                                                <i className={isWishlisted ? "fas fa-heart" : "far fa-heart"}></i>
                                            </button>
                                            <button className="action-btn btn-cart" onClick={() => addToCart(product.name, product.price)}>
                                                <i className="fas fa-shopping-cart"></i> Add
                                            </button>
                                            <button className="action-btn btn-review">
                                                <i className="fas fa-comment"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section >

            {/* Services */}
            < section id="services" className="services-section" >
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Why Choose Us</h2>
                        <p className="section-subtitle">Experience excellence in every detail</p>
                    </div>
                    <div className="services-grid">
                        {[
                            { icon: "fa-leaf", title: "Sustainable Sourcing", text: "We work directly with ethical farmers who practice sustainable coffee cultivation." },
                            { icon: "fa-fire", title: "Artisan Roasting", text: "Small batch roasted daily to ensure maximum freshness and flavor complexity." },
                            { icon: "fa-shipping-fast", title: "Lightning Delivery", text: "Fresh roasted coffee delivered to your door within 24 hours of ordering." },
                            { icon: "fa-shield-alt", title: "Quality Guarantee", text: "100% satisfaction guaranteed or your money back, no questions asked." },
                            { icon: "fa-users", title: "Expert Support", text: "Our trained baristas are here 24/7 to answer all your coffee questions." },
                            { icon: "fa-star", title: "Premium Experience", text: "From bean to cup, we ensure an exceptional coffee experience every time." },
                        ].map((s) => (
                            <div className="service-card" key={s.title}>
                                <div className="service-icon"><i className={`fas ${s.icon}`}></i></div>
                                <h3>{s.title}</h3>
                                <p>{s.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* Support */}
            < section id="support" className="support-section" >
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Customer Support</h2>
                        <p className="section-subtitle">We're here for you 24/7</p>
                    </div>
                    <div className="support-content">
                        <div className="support-text">
                            <h3>How We Can Help</h3>
                            <ul className="support-list">
                                <li><i className="fas fa-check"></i> Coffee brewing tips and recipes</li>
                                <li><i className="fas fa-check"></i> Product recommendations</li>
                                <li><i className="fas fa-check"></i> Order tracking and support</li>
                                <li><i className="fas fa-check"></i> Subscription management</li>
                                <li><i className="fas fa-check"></i> Technical assistance</li>
                            </ul>
                        </div>
                        <div className="contact-info">
                            <div><i className="fas fa-phone"></i><div><strong>Call Us</strong><br />+91 98765 43210</div></div>
                            <div><i className="fas fa-envelope"></i><div><strong>Email</strong><br />support@coffeetoffee.com</div></div>
                            <div><i className="fas fa-map-marker-alt"></i><div><strong>Location</strong><br />Chennai, Tamil Nadu, India</div></div>
                            <div><i className="fas fa-clock"></i><div><strong>Hours</strong><br />10 AM - 10 PM Daily</div></div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Login */}
            < section id="login" className="login-section" >
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Account Login</h2>
                        <p className="section-subtitle">Sign in to your Coffee Toffee account</p>
                    </div>
                    <div className="login-container">
                        <div className="login-form">
                            <h3>Welcome Back</h3>
                            <form onSubmit={handleLogin}>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" placeholder="you@example.com" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" id="password" placeholder="••••••••" required />
                                </div>
                                <div className="remember-me">
                                    <label><input type="checkbox" /> Remember me</label>
                                    <a href="#" style={{ color: "var(--accent-gold)", textDecoration: "none" }}>Forgot password?</a>
                                </div>
                                <button type="submit" className="login-btn">Sign In</button>
                                <div className="login-signup">
                                    Don't have an account? <a href="#" style={{ color: "var(--accent-gold)", textDecoration: "none" }}>Create one</a>
                                </div>
                            </form>
                        </div>
                        <div className="login-image">
                            <img
                                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                                alt="Coffee Experience"
                            />
                        </div>
                    </div>
                </div>
            </section >

            {/* Download App */}
            < section id="download" className="download-section" >
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Download Our App</h2>
                        <p className="section-subtitle">Coffee at your fingertips</p>
                    </div>
                    <div className="download-container">
                        <div className="phone-mockup">
                            <div className="phone-frame">
                                <div className="phone-notch"></div>
                                <div className="phone-screen">
                                    <div className="app-logo-phone"><i className="fas fa-coffee"></i></div>
                                    <div className="app-brand-name">Coffee Toffee</div>
                                    <div className="app-screenshot"><img src={logoIcon} alt="Coffee Toffee app screenshot" /></div>
                                    <p style={{ fontSize: "0.8rem", margin: "1rem 0" }}>Premium Coffee App</p>
                                    <div className="app-download-btns">
                                        <a href="#" className="app-btn"><i className="fab fa-android"></i> Android</a>
                                        <a href="#" className="app-btn"><i className="fab fa-apple"></i> iOS</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="qr-section">
                            <h3 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>Scan to Download</h3>
                            <div className="qr-code"><i className="fas fa-qrcode"></i></div>
                            <p className="qr-text">Scan with your phone camera to download the app instantly</p>
                        </div>
                    </div>
                </div>
            </section >

            {/* Footer */}
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <h4>Coffee Toffee</h4>
                        <p>
                            Bringing the world's finest specialty coffees to your home.
                            Crafted with passion, roasted with precision.
                        </p>
                    </div>

                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            {["home", "products", "services", "support"].map((id) => (
                                <li key={id}>
                                    <a
                                        href={`#${id}`}
                                        onClick={(e) => handleNavClick(e, id)}
                                    >
                                        {id.charAt(0).toUpperCase() + id.slice(1)}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Contact Us</h4>

                        <div className="contact-details">
                            <i className="fas fa-phone"></i>
                            <span>+91 98765 43210</span>
                        </div>

                        <div className="contact-details">
                            <i className="fas fa-envelope"></i>
                            <span>hello@coffeetoffee.com</span>
                        </div>

                        <div className="contact-details">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Chennai, Tamil Nadu, India</span>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4>Follow Us</h4>

                        <div className="social-links">
                            <a href="#" title="Facebook">
                                <i className="fab fa-facebook-f"></i>
                            </a>

                            <a href="#" title="Instagram">
                                <i className="fab fa-instagram"></i>
                            </a>

                            <a href="#" title="Twitter">
                                <i className="fab fa-twitter"></i>
                            </a>

                            <a href="#" title="WhatsApp">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>
                        &copy; 2026 Coffee Toffee. All Rights Reserved. | Designed with{" "}
                        <span style={{ color: "var(--accent-gold)" }}>❤</span> for Coffee
                        Lovers | <a href="#">Privacy Policy</a> |{" "}
                        <a href="#">Terms of Service</a>
                    </p>
                </div>
            </footer>
        </div>
    );
}



// ============ STYLES (converted 1:1 from the original CSS, scoped under .ct-root) ============
const CSS = `
            html, body, #root {width: 100%; min-height: 100vh; margin: 0; padding: 0; background: var(--cream-light, #F8F1E8); }
            .ct-root * {margin: 0; padding: 0; box-sizing: border-box; }
            .ct-root {
                --primary - brown: #5C4033;
            --secondary-brown: #8B4513;
            --accent-gold: #D4AF37;
            --cream-light: #F8F1E8;
            --dark-brown: #3A2B1F;
            --text-dark: #2D1B14;
            --text-light: #7a6a5c;
            --white: #FFFFFF;
            --shadow-light: 0 10px 30px rgba(92, 64, 51, 0.1);
            --shadow-heavy: 0 25px 50px rgba(92, 64, 51, 0.2);
            font-family: 'Poppins', sans-serif;
            line-height: 1.7;
            color: var(--text-dark);
            overflow-x: hidden;
            position: relative;
}

            /* PRELOADER */
            .ct-root .preloader {
                position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: linear-gradient(135deg, var(--primary-brown) 0%, var(--secondary-brown) 100%);
            display: flex; flex-direction: column; justify-content: center; align-items: center;
            z-index: 9999; opacity: 1; transition: opacity 0.5s ease;
}
            .ct-root .preloader.hidden {opacity: 0; pointer-events: none; }
            .ct-root .preloader-content {text - align: center; }
            .ct-root .coffee-cup-loader {width: 80px; height: 100px; margin: 0 auto 2rem; }
            .ct-root .coffee-cup-loader svg {animation: ctCupBounce 1.5s infinite; width: 100%; height: 100%; }
            @keyframes ctCupBounce {0 %, 100 % { transform: translateY(0); } 50% {transform: translateY(-20px); } }
            .ct-root .preloader-text {color: var(--white); font-size: 1.2rem; font-weight: 600; letter-spacing: 1px; }

            /* NAVBAR */
            .ct-root .navbar {
                position: fixed; top: 0; left: 0; width: 100%;
            background: rgba(92, 64, 51, 0.95); backdrop-filter: blur(20px);
            z-index: 1000; transition: all 0.3s ease; box-shadow: var(--shadow-light); padding: 1rem 0;
}
            .ct-root .navbar.scrolled {background: rgba(92, 64, 51, 0.98); box-shadow: var(--shadow-heavy); }
            .ct-root .nav-container {max - width: 1400px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; padding: 0 2rem; }
            .ct-root .logo-section {display: flex; align-items: center; gap: 1rem; text-decoration: none; color: var(--white); font-size: 1.8rem; font-weight: 700; font-family: 'Playfair Display', serif; }
            .ct-root .logo-icon img {height: 65px; width: 76px; object-fit: contain; }
            .ct-root .search-bar {position: relative; flex: 1; max-width: 400px; margin: 0 2rem; }
            .ct-root .search-input {width: 100%; padding: 0.8rem 1.2rem 0.8rem 2.5rem; border: none; border-radius: 50px; font-size: 0.9rem; background: rgba(255,255,255,0.9); backdrop-filter: blur(10px); transition: all 0.3s ease; }
            .ct-root .search-input:focus {outline: none; background: var(--white); box-shadow: 0 5px 20px rgba(212,175,55,0.3); }
            .ct-root .search-bar i {position: absolute; left: 1.2rem; top: 50%; transform: translateY(-50%); color: var(--primary-brown); pointer-events: none; }
            .ct-root .nav-links {display: flex; list-style: none; gap: 0.5rem; }
            .ct-root .nav-link {color: rgba(255,255,255,0.9); text-decoration: none; padding: 0.6rem 1.2rem; border-radius: 50px; transition: all 0.3s ease; display: flex; align-items: center; gap: 0.5rem; font-weight: 500; position: relative; }
            .ct-root .nav-link:hover, .ct-root .nav-link.active {background: rgba(212,175,55,0.2); color: var(--accent-gold); }
            .ct-root .nav-link i {font - size: 1rem; }
            .ct-root .hamburger {display: none; flex-direction: column; cursor: pointer; gap: 0.4rem; }
            .ct-root .hamburger span {width: 25px; height: 3px; background: var(--white); border-radius: 2px; transition: all 0.3s ease; }
            .ct-root .hamburger.open span:nth-child(1) {transform: translateY(7px) rotate(45deg); }
            .ct-root .hamburger.open span:nth-child(2) {opacity: 0; }
            .ct-root .hamburger.open span:nth-child(3) {transform: translateY(-7px) rotate(-45deg); }

            /* HERO */
            .ct-root .hero-section {
                min - height: 100vh; background: linear-gradient(135deg, rgba(92,64,51,0.55), rgba(58,43,31,0.6)), var(--dark-brown);
            background-size: cover; background-position: center; display: flex; align-items: center; justify-content: center;
            margin-top: 70px; position: relative; overflow: hidden;
}
            .ct-root .hero-content {max - width: 1400px; width: 100%; padding: 4rem 2rem; display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; z-index: 2; }
            .ct-root .hero-image-container {perspective: 1000px; }
            .ct-root .hero-image {width: 100%; height: 480px; object-fit: cover; border-radius: 30px; transform: rotateY(5deg) rotateX(5deg); transition: all 0.6s ease; box-shadow: var(--shadow-heavy); }
            .ct-root .hero-image:hover {transform: rotateY(0) rotateX(0) scale(1.02); }
            .ct-root .hero-text h1 {font - family: 'Playfair Display', serif; font-size: clamp(2.5rem, 5vw, 4rem); color: var(--white); margin-bottom: 1.5rem; line-height: 1.2; }
            .ct-root .hero-text p {font - size: 1.1rem; color: rgba(255,255,255,0.95); margin-bottom: 2rem; line-height: 1.8; }
            .ct-root .hero-stats {display: flex; gap: 2rem; margin: 2rem 0; }
            .ct-root .stat {text - align: center; }
            .ct-root .stat-number {font - size: 2rem; font-weight: 900; color: var(--accent-gold); font-family: 'Playfair Display', serif; }
            .ct-root .stat-label {font - size: 0.9rem; color: rgba(255,255,255,0.8); text-transform: uppercase; letter-spacing: 1px; margin-top: 0.5rem; }
            .ct-root .cta-buttons {display: flex; gap: 1.5rem; flex-wrap: wrap; }
            .ct-root .btn-primary {background: linear-gradient(135deg, var(--accent-gold) 0%, #F1C40F 100%); color: var(--dark-brown); padding: 1.2rem 2.5rem; border: none; border-radius: 50px; font-weight: 700; font-size: 1rem; cursor: pointer; transition: all 0.4s ease; box-shadow: 0 15px 40px rgba(212,175,55,0.4); }
            .ct-root .btn-primary:hover {transform: translateY(-5px); box-shadow: 0 25px 60px rgba(212,175,55,0.6); }
            .ct-root .btn-secondary {background: transparent; color: var(--white); padding: 1.2rem 2.5rem; border: 2px solid rgba(255,255,255,0.3); border-radius: 50px; font-weight: 700; font-size: 1rem; cursor: pointer; transition: all 0.3s ease; }
            .ct-root .btn-secondary:hover {background: rgba(255,255,255,0.1); border-color: var(--white); transform: translateY(-3px); }

            /* PRODUCTS */
            .ct-root .products-section {padding: 6rem 2rem; background: var(--cream-light); }
            .ct-root .container {max - width: 1400px; margin: 0 auto; }
            .ct-root .section-header {text - align: center; margin-bottom: 4rem; }
            .ct-root .section-title {font - family: 'Playfair Display', serif; font-size: clamp(2rem, 5vw, 3.5rem); color: var(--primary-brown); margin-bottom: 1rem; position: relative; display: inline-block; width: 100%; }
            .ct-root .section-title::after {content: ''; position: absolute; bottom: -15px; left: 50%; transform: translateX(-50%); width: 100px; height: 4px; background: linear-gradient(135deg, var(--accent-gold) 0%, #F1C40F 100%); border-radius: 2px; }
            .ct-root .section-subtitle {font - size: 1.2rem; color: var(--text-light); margin-top: 2rem; }
            .ct-root .filter-buttons {display: flex; justify-content: center; gap: 1rem; margin: 2rem 0 0; flex-wrap: wrap; }
            .ct-root .filter-btn {background: rgba(92,64,51,0.1); color: var(--primary-brown); border: none; padding: 0.7rem 1.5rem; border-radius: 50px; cursor: pointer; font-weight: 600; transition: all 0.3s ease; font-size: 0.9rem; }
            .ct-root .filter-btn.active, .ct-root .filter-btn:hover {background: linear-gradient(135deg, var(--primary-brown) 0%, var(--secondary-brown) 100%); color: var(--white); transform: translateY(-2px); }
            .ct-root .products-grid {display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 2.5rem; margin-top: 3rem; }
            .ct-root .product-card {background: var(--white); border-radius: 20px; overflow: hidden; box-shadow: var(--shadow-light); transition: all 0.5s cubic-bezier(0.4,0,0.2,1); }
            .ct-root .product-card:hover {transform: translateY(-15px); box-shadow: var(--shadow-heavy); }
            .ct-root .product-image-wrapper {position: relative; height: 220px; overflow: hidden; }
            .ct-root .product-image {width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; }
            .ct-root .product-card:hover .product-image {transform: scale(1.1); }
            .ct-root .product-badge {position: absolute; top: 1.2rem; right: 1.2rem; background: linear-gradient(135deg, var(--secondary-brown) 0%, #A0522D 100%); color: var(--white); padding: 0.4rem 1rem; border-radius: 20px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; z-index: 2; }
            .ct-root .product-badge.sale {background: linear-gradient(135deg, #ff6b6b 0%, #ff5252 100%); }
            .ct-root .product-badge.new {background: linear-gradient(135deg, var(--accent-gold) 0%, #F1C40F 100%); color: var(--dark-brown); }
            .ct-root .product-details {padding: 2rem; }
            .ct-root .product-name {font - family: 'Playfair Display', serif; font-size: 1.3rem; color: var(--primary-brown); margin-bottom: 0.8rem; }
            .ct-root .product-rating {color: var(--accent-gold); margin-bottom: 0.8rem; font-size: 0.9rem; }
            .ct-root .product-description {color: var(--text-light); font-size: 0.9rem; margin-bottom: 1.2rem; line-height: 1.6; }
            .ct-root .product-price-section {display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
            .ct-root .price-current {font - size: 1.6rem; font-weight: 700; color: var(--secondary-brown); }
            .ct-root .price-original {font - size: 1.1rem; color: #999; text-decoration: line-through; }
            .ct-root .discount-label {background: #ff6b6b; color: var(--white); padding: 0.3rem 0.8rem; border-radius: 15px; font-size: 0.75rem; font-weight: 700; }
            .ct-root .product-actions {display: flex; gap: 0.8rem; }
            .ct-root .action-btn {flex: 1; padding: 0.8rem; border: none; border-radius: 12px; cursor: pointer; font-weight: 600; transition: all 0.3s ease; font-size: 0.85rem; display: flex; align-items: center; justify-content: center; gap: 0.4rem; }
            .ct-root .btn-heart {background: rgba(255,107,107,0.1); color: #ff6b6b; }
            .ct-root .btn-heart:hover {background: #ff6b6b; color: var(--white); }
            .ct-root .btn-cart {background: linear-gradient(135deg, var(--primary-brown) 0%, var(--secondary-brown) 100%); color: var(--accent-gold); }
            .ct-root .btn-cart:hover {transform: translateY(-3px); box-shadow: 0 10px 25px rgba(92,64,51,0.3); }
            .ct-root .btn-review {background: rgba(212,175,55,0.1); color: var(--accent-gold); }
            .ct-root .btn-review:hover {background: var(--accent-gold); color: var(--dark-brown); }

            /* SERVICES */
            .ct-root .services-section {padding: 6rem 2rem; background: var(--white); }
            .ct-root .services-grid {display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-top: 3rem; }
            .ct-root .service-card {background: linear-gradient(135deg, var(--cream-light) 0%, rgba(212,175,55,0.1) 100%); padding: 3rem; border-radius: 20px; text-align: center; transition: all 0.4s ease; border: 2px solid transparent; }
            .ct-root .service-card:hover {transform: translateY(-10px); background: linear-gradient(135deg, var(--white) 0%, rgba(212,175,55,0.2) 100%); border-color: var(--accent-gold); box-shadow: var(--shadow-heavy); }
            .ct-root .service-icon {font - size: 3.5rem; color: var(--secondary-brown); margin-bottom: 1.5rem; transition: transform 0.3s ease; }
            .ct-root .service-card:hover .service-icon {transform: scale(1.1) rotate(5deg); }
            .ct-root .service-card h3 {font - size: 1.4rem; color: var(--primary-brown); margin-bottom: 1rem; font-family: 'Playfair Display', serif; }
            .ct-root .service-card p {color: var(--text-light); line-height: 1.6; }

            /* SUPPORT */
            .ct-root .support-section {padding: 6rem 2rem; background: linear-gradient(135deg, var(--text-light) 0%, var(--secondary-brown) 100%); color: var(--white); }
            .ct-root .support-content {display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; margin-top: 3rem; }
            .ct-root .support-text h3 {font - size: 2rem; margin-bottom: 1.5rem; font-family: 'Playfair Display', serif; }
            .ct-root .support-list {list - style: none; margin-bottom: 2rem; }
            .ct-root .support-list li {padding: 0.8rem 0; display: flex; gap: 1rem; }
            .ct-root .support-list i {color: var(--accent-gold); font-size: 1.2rem; }
            .ct-root .contact-info {background: rgba(255,255,255,0.1); padding: 2rem; border-radius: 15px; backdrop-filter: blur(10px); }
            .ct-root .contact-info div {display: flex; gap: 1rem; margin-bottom: 1rem; }
            .ct-root .contact-info i {color: var(--accent-gold); font-size: 1.2rem; min-width: 30px; }

            /* LOGIN */
            .ct-root .login-section {padding: 6rem 2rem; background: var(--cream-light); }
            .ct-root .login-container {display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; margin-top: 2rem; }
            .ct-root .login-form {background: var(--white); padding: 3rem; border-radius: 25px; box-shadow: var(--shadow-heavy); }
            .ct-root .login-form h3 {font - family: 'Playfair Display', serif; font-size: 2rem; color: var(--primary-brown); margin-bottom: 2rem; text-align: center; }
            .ct-root .form-group {margin - bottom: 1.5rem; }
            .ct-root .form-group label {display: block; margin-bottom: 0.5rem; color: var(--primary-brown); font-weight: 600; font-size: 0.9rem; }
            .ct-root .form-group input {width: 100%; padding: 1rem; border: 2px solid #bb9f9f; border-radius: 10px; font-size: 1rem; transition: all 0.3s ease; font-family: 'Poppins', sans-serif; }
            .ct-root .form-group input:focus {outline: none; border-color: var(--accent-gold); box-shadow: 0 5px 20px rgba(212,175,55,0.2); }
            .ct-root .remember-me {display: flex; justify-content: space-between; align-items: center; margin: 1.5rem 0; font-size: 0.9rem; }
            .ct-root .login-btn {width: 100%; background: linear-gradient(135deg, var(--accent-gold) 0%, var(--secondary-brown) 100%); color: var(--white); padding: 1.2rem; border: none; border-radius: 10px; font-weight: 700; font-size: 1rem; cursor: pointer; transition: all 0.3s ease; }
            .ct-root .login-btn:hover {transform: translateY(-3px); box-shadow: 0 15px 40px rgba(92,64,51,0.3); }
            .ct-root .login-signup {text - align: center; margin-top: 1.5rem; color: var(--text-light); font-size: 0.9rem; }
            .ct-root .login-image img {width: 100%; height: 500px; object-fit: cover; border-radius: 25px; box-shadow: var(--shadow-heavy); }

            /* DOWNLOAD APP */
            .ct-root .download-section {padding: 6rem 2rem; background: var(--dark-brown); color: var(--white); }
            .ct-root .download-container {display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center; margin-top: 3rem; }
            .ct-root .phone-mockup {perspective: 1000px; margin: 0 auto; }
            .ct-root .phone-frame {width: 300px; height: 600px; background: #523737; border-radius: 40px; padding: 12px; box-shadow: 0 30px 80px rgba(0,0,0,0.5); position: relative; transform: rotateY(10deg) rotateX(5deg); transition: transform 0.6s ease; }
            .ct-root .phone-mockup:hover .phone-frame {transform: rotateY(0) rotateX(0); }
            .ct-root .phone-notch {position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 180px; height: 25px; background: #000; border-radius: 0 0 30px 30px; z-index: 10; }
            .ct-root .phone-screen {width: 100%; height: 100%; background: linear-gradient(135deg, var(--primary-brown) 0%, var(--secondary-brown) 100%); border-radius: 35px; padding: 2rem; display: flex; flex-direction: column; align-items: center; justify-content: center; overflow: hidden; text-align: center; }
            .ct-root .app-logo-phone {width: 80px; height: 80px; background: linear-gradient(135deg, var(--accent-gold) 0%, #F1C40F 100%); border-radius: 20px; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; color: var(--dark-brown); margin-bottom: 1.5rem; box-shadow: 0 10px 30px rgba(212,175,55,0.4); }
            .ct-root .app-brand-name {font - family: 'Playfair Display', serif; font-size: 1.2rem; font-weight: 700; margin-bottom: 2rem; }
            .ct-root .app-screenshot {width: 140px; height: 200px; background: rgba(255,255,255,0.1); border-radius: 15px; margin: 1.5rem 0; display: flex; align-items: center; justify-content: center; font-size: 3rem; color: rgba(255,255,255,0.5); overflow: hidden; }
            .ct-root .app-screenshot img {width: 100%; height: 100%; object-fit: contain; padding: 0.5rem; }
            .ct-root .app-download-btns {display: flex; flex-direction: column; gap: 1rem; width: 100%; margin-top: 2rem; }
            .ct-root .app-btn {background: rgba(255,255,255,0.2); color: var(--white); padding: 0.8rem; border: 2px solid rgba(255,255,255,0.3); border-radius: 10px; cursor: pointer; font-weight: 600; transition: all 0.3s ease; display: flex; align-items: center; justify-content: center; gap: 0.5rem; text-decoration: none; font-size: 0.9rem; }
            .ct-root .app-btn:hover {background: rgba(255,255,255,0.3); border-color: var(--accent-gold); transform: translateY(-2px); }
            .ct-root .qr-section {text - align: center; }
            .ct-root .qr-code {width: 280px; height: 280px; background: var(--white); border-radius: 20px; padding: 1.5rem; margin: 2rem auto; box-shadow: 0 20px 50px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; font-size: 4rem; color: var(--primary-brown); }
            .ct-root .qr-text {font - size: 0.9rem; color: rgba(255,255,255,0.8); margin-top: 1rem; }

            /* FOOTER */
            .ct-root .footer {background: var(--secondary-brown); color: var(--white); padding: 4rem 2rem 1.5rem; }
            .ct-root .footer-content {max - width: 1400px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 3rem; margin-bottom: 2rem; }
            .ct-root .footer-section h4 {font - size: 1.3rem; margin-bottom: 1.5rem; color: var(--accent-gold); font-family: 'Playfair Display', serif; }
            .ct-root .footer-section p {line - height: 1.8; color: rgba(255,255,255,0.8); font-size: 0.95rem; }
            .ct-root .footer-links {list - style: none; }
            .ct-root .footer-links li {margin - bottom: 0.8rem; }
            .ct-root .footer-links a {color: rgba(255,255,255,0.8); text-decoration: none; transition: all 0.3s ease; }
            .ct-root .footer-links a:hover {color: var(--accent-gold); padding-left: 0.5rem; }
            .ct-root .social-links {display: flex; gap: 1rem; margin-top: 1rem; }
            .ct-root .social-links a {width: 45px; height: 45px; background: rgba(255,255,255,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--accent-gold); text-decoration: none; transition: all 0.3s ease; border: 2px solid rgba(255,255,255,0.2); }
            .ct-root .social-links a:hover {background: var(--accent-gold); color: var(--dark-brown); transform: translateY(-5px); }
            .ct-root .contact-details {display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; color: rgba(255,255,255,0.8); font-size: 0.95rem; }
            .ct-root .contact-details i {color: var(--accent-gold); font-size: 1.2rem; }
            .ct-root .footer-bottom {border - top: 1px solid rgba(255,255,255,0.1); padding-top: 2rem; text-align: center; }
            .ct-root .footer-bottom p {color: rgba(255,255,255,0.7); font-size: 0.9rem; }
            .ct-root .footer-bottom a {color: var(--accent-gold); text-decoration: none; }

            /* RESPONSIVE */
           /* ==========================
   TABLETS
========================== */

@media (max-width:1024px){

.ct-root .hero-content,
.ct-root .support-content,
.ct-root .login-container,
.ct-root .download-container{
    grid-template-columns:1fr;
    gap:2rem;
}

.ct-root .hero-text{
    text-align:center;
}

.ct-root .hero-stats{
    justify-content:center;
}

.ct-root .cta-buttons{
    justify-content:center;
}

.ct-root .products-grid{
    grid-template-columns:repeat(2,1fr);
}

.ct-root .services-grid{
    grid-template-columns:repeat(2,1fr);
}

.ct-root .search-bar{
    max-width:250px;
}

}


/* ==========================
   MOBILE
========================== */

@media (max-width:768px){

.ct-root .navbar{
    padding:12px 0;
}

.ct-root .nav-container{
    padding:0 15px;
}

.ct-root .search-bar{
    display:none;
}

.ct-root .hamburger{
    display:flex;
}

.ct-root .nav-links{
    position:absolute;
    top:100%;
    left:0;
    width:100%;
    background:#5C4033;
    flex-direction:column;
    display:none;
    padding:20px;
}

.ct-root .nav-links.open{
    display:flex;
}

.ct-root .hero-section{
    margin-top:70px;
}

.ct-root .hero-content{
    grid-template-columns:1fr;
    text-align:center;
    gap:2rem;
}

.ct-root .hero-image{
    height:300px;
}

.ct-root .hero-text h1{
    font-size:2.2rem;
}

.ct-root .hero-text p{
    font-size:1rem;
}

.ct-root .hero-stats{
    justify-content:center;
    flex-wrap:wrap;
}

.ct-root .cta-buttons{
    flex-direction:column;
}

.ct-root .btn-primary,
.ct-root .btn-secondary{
    width:100%;
}

.ct-root .products-grid{
    grid-template-columns:1fr;
}

.ct-root .services-grid{
    grid-template-columns:1fr;
}

.ct-root .support-content,
.ct-root .login-container,
.ct-root .download-container{
    grid-template-columns:1fr;
}

.ct-root .phone-frame{
    width:250px;
    height:500px;
}

.ct-root .qr-code{
    width:220px;
    height:220px;
}

.ct-root .footer-content{
    grid-template-columns:1fr;
    text-align:center;
}

.ct-root .social-links{
    justify-content:center;
}

}


/* ==========================
   SMALL MOBILE
========================== */

@media (max-width:480px){

.ct-root .nav-container{
    padding:0 10px;
}

.ct-root .logo-icon img{
    width:55px;
    height:55px;
}

.ct-root .hero-content{
    padding:2rem 1rem;
}

.ct-root .hero-text h1{
    font-size:1.8rem;
}

.ct-root .section-title{
    font-size:2rem;
}

.ct-root .product-card{
    margin:0 10px;
}

.ct-root .login-form{
    padding:20px;
}

.ct-root .phone-frame{
    width:220px;
    height:450px;
}

.ct-root .footer{
    padding:3rem 1rem;
}

}
            `;