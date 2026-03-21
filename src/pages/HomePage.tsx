import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight, CheckCircle, Globe, Sparkles, Zap } from "lucide-react";

const HomePage = () => {
    const { i18n } = useTranslation();
    const isZh = i18n.language.startsWith("zh");

    const overviewCards = [
        {
            title: isZh ? "业务范围" : "Business Scope",
            text: isZh
                ? "覆盖饮具杯壶、厨房用品、家居收纳、清洁用品等多类日用品。"
                : "Covering drinkware, kitchenware, home organization, cleaning products, and other everyday categories.",
        },
        {
            title: isZh ? "服务内容" : "Service Coverage",
            text: isZh
                ? "提供选品建议、供应链协同、合规支持与跨境交付配套。"
                : "Supporting sourcing, supplier coordination, compliance preparation, and cross-border delivery.",
        },
        {
            title: isZh ? "合作重点" : "Working Priorities",
            text: isZh
                ? "强调稳定交付、清晰沟通和长期配合，适合品牌与渠道持续合作。"
                : "Built around reliable delivery, clear communication, and long-term collaboration for brands and channels.",
        },
    ];

    const stats = [
        { value: "500+", label: isZh ? "合作品牌" : "Partner Brands" },
        { value: "50+", label: isZh ? "覆盖国家" : "Countries" },
        { value: "1000万+", label: isZh ? "累计出货" : "Units Delivered" },
        { value: "98%", label: isZh ? "客户满意度" : "Satisfaction" },
    ];

    const features = isZh
        ? [
              "8年日用品跨境经验",
              "覆盖厨房、家居、清洁等多类产品",
              "覆盖全球50+国家和地区",
              "200+供应链伙伴协同",
              "熟悉多类产品国际认证",
              "7x24小时专业客服",
          ]
        : [
              "8 years of daily goods export experience",
              "Coverage across kitchen, home, and cleaning categories",
              "Coverage across 50+ countries",
              "200+ supply-chain partners",
              "Hands-on with global compliance requirements",
              "24/7 professional support",
          ];

    return (
        <div className="relative">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-mesh" />
                <div className="absolute inset-0 bg-grid opacity-50" />

                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-500/15 rounded-full blur-3xl animate-pulse animation-delay-500" />

                <div className="relative container-custom pt-32 pb-20">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                                <span className="w-2 h-2 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full mr-3 animate-pulse" />
                                <span className="text-sm text-white/70">
                                    {isZh ? "日用品跨境电商与贸易服务伙伴" : "Cross-border daily goods growth partner"}
                                </span>
                            </div>

                            <h1 className="heading-1">
                                <span className="text-gradient">{isZh ? "中国优质日用品" : "Quality Chinese Daily Goods"}</span>
                                <br />
                                <span className="text-white">{isZh ? "连接全球市场" : "Connected to Global Markets"}</span>
                            </h1>

                            <p className="text-lg text-white/60 max-w-xl leading-relaxed">
                                {isZh
                                    ? "景辰云贸围绕水杯、厨房用品、家居收纳、清洁用品等多类日用品，提供从选品、合规、供应链到跨境履约的整合支持，帮助中国制造更稳地进入海外市场。"
                                    : "Jingchen supports drinkware, kitchenware, home organization, cleaning products, and other daily goods categories with integrated sourcing, compliance, supply chain, and fulfillment support."}
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link to="/services" className="btn-accent">
                                    {isZh ? "查看服务能力" : "View Services"}
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                                <Link to="/about" className="btn-secondary">
                                    {isZh ? "了解我们" : "About Us"}
                                </Link>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
                                {stats.map((stat, index) => (
                                    <div key={index} className="text-center">
                                        <div className="text-2xl lg:text-3xl font-bold text-gradient-accent">
                                            {stat.value}
                                        </div>
                                        <div className="text-sm text-white/50 mt-1">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="card p-8 space-y-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                                            <Sparkles className="h-5 w-5 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-white/50">
                                                COMPANY OVERVIEW
                                            </div>
                                            <div className="font-semibold text-white">{isZh ? "公司概览" : "Company Overview"}</div>
                                        </div>
                                    </div>
                                    <span className="tag tag-primary">{isZh ? "综合日用品" : "Daily Goods Partner"}</span>
                                </div>

                                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                                    <div className="text-sm uppercase tracking-[0.2em] text-white/40">
                                        {isZh ? "公司定位" : "Positioning"}
                                    </div>
                                    <p className="mt-3 text-sm leading-7 text-white/70">
                                        {isZh
                                            ? "景辰云贸专注多类日用品的跨境贸易与市场协同，服务对象覆盖海外品牌、渠道客户与长期采购合作方。"
                                            : "Jingchen focuses on cross-border trade and market coordination for daily goods, serving overseas brands, retail channels, and long-term sourcing partners."}
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    {overviewCards.map((item, index) => (
                                        <div
                                            key={index}
                                            className="p-4 rounded-xl bg-white/5 border border-white/5"
                                        >
                                            <div className="flex items-start space-x-4">
                                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                                                    <CheckCircle className="h-5 w-5 text-white" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="font-medium text-white mb-1">
                                                        {item.title}
                                                    </div>
                                                    <div className="text-sm text-white/50">
                                                        {item.text}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-4 border-t border-white/10 text-center">
                                    <span className="text-sm text-white/40">
                                        {isZh
                                            ? "帮助中国优质日用品以更稳健的方式进入全球市场"
                                            : "Helping Chinese daily goods enter global markets with a more reliable approach"}
                                    </span>
                                </div>
                            </div>

                            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent-500/20 rounded-full blur-2xl" />
                            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary-500/20 rounded-full blur-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative section-padding">
                <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/50 to-dark-950" />

                <div className="relative container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div>
                                <span className="tag tag-accent mb-4">WHY CHOOSE US</span>
                                <h2 className="heading-2 text-white mt-4">{isZh ? "为什么选择我们？" : "Why Choose Us?"}</h2>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center space-x-3 p-4 rounded-xl bg-white/5 border border-white/5"
                                    >
                                        <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                                        <span className="text-sm text-white/80">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Link to="/about" className="btn-primary inline-flex">
                                {isZh ? "了解更多" : "Learn More"}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>

                        <div className="relative">
                            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 p-8 flex items-center justify-center">
                                <div className="text-center space-y-6">
                                    <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                                        <Globe className="h-12 w-12 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-white">
                                            {isZh ? "全球业务网络" : "Global Business Network"}
                                        </div>
                                        <div className="text-white/50 mt-2">
                                            {isZh ? "覆盖50+国家和地区" : "Serving 50+ countries and regions"}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative section-padding overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-accent-600/20" />
                <div className="absolute inset-0 bg-mesh opacity-50" />

                <div className="relative container-custom">
                    <div className="card p-12 lg:p-16 text-center">
                        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                            <Zap className="h-8 w-8 text-white" />
                        </div>
                        <h2 className="heading-2 text-white mb-4">
                            {isZh ? "准备好拓展全球市场了吗？" : "Ready to Expand Globally?"}
                        </h2>
                        <p className="text-white/60 mb-8 max-w-2xl mx-auto">
                            {isZh
                                ? "我们的专业团队将为您提供个性化的跨境电商解决方案，助您轻松进入国际市场"
                                : "Our team provides tailored cross-border e-commerce solutions to help you enter international markets with confidence."}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="btn-accent">
                                {isZh ? "立即咨询" : "Contact Now"}
                            </Link>
                            <Link to="/services" className="btn-secondary">
                                {isZh ? "查看服务方案" : "View Services"}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
