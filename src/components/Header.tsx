import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X, Globe, Sparkles } from "lucide-react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: t("nav.home"), path: "/" },
        { name: t("nav.about"), path: "/about" },
        { name: t("nav.products"), path: "/products" },
        { name: t("nav.services"), path: "/services" },
        { name: t("nav.cases"), path: "/cases" },
        { name: t("nav.news"), path: "/news" },
        { name: t("nav.contact"), path: "/contact" },
    ];

    const toggleLanguage = () => {
        const newLang = i18n.language === "zh" ? "en" : "zh";
        i18n.changeLanguage(newLang);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-dark-950/80 backdrop-blur-xl border-b border-white/5"
                    : "bg-transparent"
            }`}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 group">
                        <div className="relative">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform">
                                <Sparkles className="h-5 w-5 text-white" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg font-bold text-white">景辰云贸</span>
                            <span className="text-xs text-white/50 tracking-wider">JINGCHEN</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                                    location.pathname === item.path
                                        ? "text-white"
                                        : "text-white/60 hover:text-white hover:bg-white/5"
                                }`}
                            >
                                {item.name}
                                {location.pathname === item.path && (
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary-500 rounded-full" />
                                )}
                            </Link>
                        ))}
                    </nav>

                    {/* Right Actions */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center space-x-2 px-3 py-2 text-sm text-white/60 hover:text-white rounded-lg hover:bg-white/5 transition-all"
                        >
                            <Globe className="h-4 w-4" />
                            <span>{i18n.language === "zh" ? "EN" : "中文"}</span>
                        </button>
                        <Link to="/contact" className="btn-accent text-sm">
                            {t("home.cta")}
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <X className="h-5 w-5 text-white" />
                        ) : (
                            <Menu className="h-5 w-5 text-white" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 right-0 bg-dark-950/95 backdrop-blur-xl border-b border-white/5">
                        <div className="container-custom py-6">
                            <div className="flex flex-col space-y-1">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        className={`px-4 py-3 text-base font-medium rounded-xl transition-all ${
                                            location.pathname === item.path
                                                ? "text-white bg-white/10"
                                                : "text-white/60 hover:text-white hover:bg-white/5"
                                        }`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="mt-6 pt-6 border-t border-white/10 flex flex-col space-y-4">
                                <button
                                    onClick={toggleLanguage}
                                    className="flex items-center justify-center space-x-2 px-4 py-3 text-white/60 hover:text-white rounded-xl hover:bg-white/5 transition-all"
                                >
                                    <Globe className="h-4 w-4" />
                                    <span>{i18n.language === "zh" ? "English" : "中文"}</span>
                                </button>
                                <Link
                                    to="/contact"
                                    className="btn-accent w-full text-center"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {t("home.cta")}
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
