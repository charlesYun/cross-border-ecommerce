import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Mail, Phone, MapPin, ArrowUpRight, Sparkles } from "lucide-react";

const Footer = () => {
    const { i18n } = useTranslation();
    const isZh = i18n.language.startsWith("zh");
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: isZh ? "关于我们" : "About", path: "/about" },
        { name: isZh ? "服务方案" : "Services", path: "/services" },
        { name: isZh ? "联系我们" : "Contact", path: "/contact" },
    ];

    const businessScope = isZh
        ? ["饮具杯壶", "厨房用品", "家居收纳", "清洁用品"]
        : ["Drinkware", "Kitchenware", "Home Organization", "Cleaning Products"];

    return (
        <footer className="relative bg-dark-950 border-t border-white/5">
            <div className="absolute inset-0 bg-mesh opacity-30" />

            <div className="relative container-custom">
                <div className="py-16 lg:py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                        <div className="lg:col-span-1">
                            <Link to="/" className="flex items-center space-x-3 group mb-6">
                                <div className="relative">
                                    <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                                        <Sparkles className="h-5 w-5 text-white" />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-lg font-bold text-white">
                                        {isZh ? "景辰云贸" : "Jingchen Global"}
                                    </span>
                                    <span className="text-xs text-white/50 tracking-wider">
                                        JINGCHEN
                                    </span>
                                </div>
                            </Link>
                            <p className="text-white/50 text-sm leading-relaxed mb-6">
                                {isZh
                                    ? "景辰云贸是一家面向全球市场的跨境贸易与电商服务公司，业务覆盖水杯、厨房用品、家居收纳、清洁用品等多类日用品，帮助中国制造以更稳定、更清晰的方式进入海外市场。"
                                    : "Jingchen is a cross-border trade and e-commerce company serving global markets across drinkware, kitchenware, home organization, cleaning products, and other daily goods categories."}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-6">
                                {isZh ? "快速链接" : "Quick Links"}
                            </h3>
                            <ul className="space-y-3">
                                {quickLinks.map((link) => (
                                    <li key={link.path}>
                                        <Link
                                            to={link.path}
                                            className="text-white/50 hover:text-white text-sm flex items-center group transition-colors"
                                        >
                                            <span>{link.name}</span>
                                            <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-6">
                                {isZh ? "业务范围" : "Business Scope"}
                            </h3>
                            <ul className="space-y-3">
                                {businessScope.map((item) => (
                                    <li key={item}>
                                        <span className="text-white/50 text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-6">
                                {isZh ? "联系我们" : "Contact"}
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start space-x-3">
                                    <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <MapPin className="h-4 w-4 text-primary-400" />
                                    </div>
                                    <div>
                                        <p className="text-white/70 text-sm">
                                            {isZh ? "上海市浦东新区" : "Pudong, Shanghai"}
                                        </p>
                                        <p className="text-white/50 text-sm">
                                            {isZh ? "张江高科技园区" : "Zhangjiang Hi-Tech Park"}
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                                        <Phone className="h-4 w-4 text-primary-400" />
                                    </div>
                                    <span className="text-white/70 text-sm">+86 21 8888 9999</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                                        <Mail className="h-4 w-4 text-primary-400" />
                                    </div>
                                    <span className="text-white/70 text-sm">
                                        contact@jingchenyunmao.com
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-white/40 text-sm">
                            © {currentYear} {isZh ? "景辰云贸" : "Jingchen Global"}.{" "}
                            {isZh ? "保留所有权利。" : "All rights reserved."}
                        </p>
                        <div className="flex items-center space-x-6">
                            <a
                                href="mailto:contact@jingchenyunmao.com?subject=%E9%9A%90%E7%A7%81%E5%92%A8%E8%AF%A2"
                                className="text-white/40 hover:text-white/70 text-sm transition-colors"
                            >
                                {isZh ? "隐私政策" : "Privacy"}
                            </a>
                            <a
                                href="mailto:contact@jingchenyunmao.com?subject=%E6%9C%8D%E5%8A%A1%E6%9D%A1%E6%AC%BE%E5%92%A8%E8%AF%A2"
                                className="text-white/40 hover:text-white/70 text-sm transition-colors"
                            >
                                {isZh ? "服务条款" : "Terms"}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
