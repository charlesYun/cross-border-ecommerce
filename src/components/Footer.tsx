import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight, Sparkles } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: "关于我们", path: "/about" },
        { name: "产品展示", path: "/products" },
        { name: "服务方案", path: "/services" },
        { name: "客户案例", path: "/cases" },
        { name: "新闻动态", path: "/news" },
        { name: "联系我们", path: "/contact" },
    ];

    const services = [
        "水杯全球分销",
        "质量认证服务",
        "跨境物流方案",
        "品牌营销推广",
        "市场数据分析",
        "客户服务支持",
    ];

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
                                    <span className="text-lg font-bold text-white">景辰云贸</span>
                                    <span className="text-xs text-white/50 tracking-wider">
                                        JINGCHEN
                                    </span>
                                </div>
                            </Link>
                            <p className="text-white/50 text-sm leading-relaxed mb-6">
                                专注于水杯类产品的跨境电商公司，致力于将中国优质水杯产品销往全球市场。
                            </p>
                            <div className="flex items-center space-x-3">
                                {["微信", "抖音", "微博", "小红书"].map((social) => (
                                    <a
                                        key={social}
                                        href="#"
                                        className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
                                    >
                                        <span className="text-xs font-medium">
                                            {social.charAt(0)}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-6">快速链接</h3>
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
                            <h3 className="text-white font-semibold mb-6">服务项目</h3>
                            <ul className="space-y-3">
                                {services.map((service) => (
                                    <li key={service}>
                                        <span className="text-white/50 text-sm">{service}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-6">联系我们</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start space-x-3">
                                    <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <MapPin className="h-4 w-4 text-primary-400" />
                                    </div>
                                    <div>
                                        <p className="text-white/70 text-sm">上海市浦东新区</p>
                                        <p className="text-white/50 text-sm">张江高科技园区</p>
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
                                        contact@jingchen.com
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-white/40 text-sm">
                            © {currentYear} 景辰云贸 JingChen. 保留所有权利。
                        </p>
                        <div className="flex items-center space-x-6">
                            <a
                                href="#"
                                className="text-white/40 hover:text-white/70 text-sm transition-colors"
                            >
                                隐私政策
                            </a>
                            <a
                                href="#"
                                className="text-white/40 hover:text-white/70 text-sm transition-colors"
                            >
                                服务条款
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
