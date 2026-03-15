import { Link } from "react-router-dom";
import { ArrowRight, Globe, Shield, Truck, CheckCircle, Sparkles, Star, Zap } from "lucide-react";

const HomePage = () => {
    const services = [
        {
            icon: <Globe className="h-6 w-6" />,
            title: "水杯全球分销",
            description: "将中国优质水杯销往欧美、日韩、东南亚等全球主要市场",
            color: "from-blue-500 to-cyan-500",
        },
        {
            icon: <Shield className="h-6 w-6" />,
            title: "水杯质量认证",
            description: "FDA、LFGB、BPA-Free等国际水杯安全认证服务",
            color: "from-emerald-500 to-teal-500",
        },
        {
            icon: <Truck className="h-6 w-6" />,
            title: "专业水杯物流",
            description: "针对水杯产品的特殊包装和全球物流解决方案",
            color: "from-violet-500 to-purple-500",
        },
    ];

    const stats = [
        { value: "500+", label: "合作品牌" },
        { value: "50+", label: "覆盖国家" },
        { value: "1000万+", label: "累计销售" },
        { value: "98%", label: "客户满意度" },
    ];

    const features = [
        "8年水杯跨境电商经验",
        "累计销售1000万+只水杯",
        "覆盖全球50+国家和地区",
        "200+水杯供应商合作",
        "FDA、LFGB等国际认证",
        "7x24小时专业客服",
    ];

    const cases = [
        {
            client: "不锈钢保温杯品牌",
            result: "美国市场月销10万只",
            industry: "保温杯",
            color: "from-orange-500 to-amber-500",
        },
        {
            client: "玻璃随行杯品牌",
            result: "欧洲市场占有率15%",
            industry: "玻璃杯",
            color: "from-cyan-500 to-blue-500",
        },
        {
            client: "智能提醒水杯",
            result: "日本销售增长200%",
            industry: "智能水杯",
            color: "from-pink-500 to-rose-500",
        },
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
                                    水杯跨境电商解决方案专家
                                </span>
                            </div>

                            <h1 className="heading-1">
                                <span className="text-gradient">中国优质水杯</span>
                                <br />
                                <span className="text-white">全球健康饮水</span>
                            </h1>

                            <p className="text-lg text-white/60 max-w-xl leading-relaxed">
                                专注于水杯类产品的跨境电商，将中国制造的健康水杯带给世界消费者。
                                覆盖选品、合规、仓储、物流、品牌营销的一站式跨境出海方案。
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link to="/products" className="btn-accent">
                                    查看水杯产品
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                                <Link to="/about" className="btn-secondary">
                                    了解我们
                                </Link>
                            </div>

                            <div className="grid grid-cols-4 gap-6 pt-8 border-t border-white/10">
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
                                                CORE SERVICES
                                            </div>
                                            <div className="font-semibold text-white">核心服务</div>
                                        </div>
                                    </div>
                                    <span className="tag tag-primary">水杯垂直领域</span>
                                </div>

                                <div className="space-y-4">
                                    {services.map((service, index) => (
                                        <div
                                            key={index}
                                            className="group p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all cursor-pointer"
                                        >
                                            <div className="flex items-start space-x-4">
                                                <div
                                                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}
                                                >
                                                    {service.icon}
                                                </div>
                                                <div className="flex-1">
                                                    <div className="font-medium text-white mb-1">
                                                        {service.title}
                                                    </div>
                                                    <div className="text-sm text-white/50">
                                                        {service.description}
                                                    </div>
                                                </div>
                                                <ArrowRight className="h-4 w-4 text-white/30 group-hover:text-white/60 group-hover:translate-x-1 transition-all" />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-4 border-t border-white/10 text-center">
                                    <span className="text-sm text-white/40">
                                        为中国水杯品牌打造可持续的全球增长曲线
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
                                <h2 className="heading-2 text-white mt-4">为什么选择我们？</h2>
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
                                了解更多
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
                                            全球业务网络
                                        </div>
                                        <div className="text-white/50 mt-2">覆盖50+国家和地区</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative section-padding">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <span className="tag tag-primary mb-4">SUCCESS STORIES</span>
                        <h2 className="heading-2 text-white mt-4">成功案例</h2>
                        <p className="text-white/50 mt-4 max-w-2xl mx-auto">
                            看看我们如何帮助客户实现业务增长和全球化拓展
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {cases.map((item, index) => (
                            <div key={index} className="card card-hover p-6 space-y-4">
                                <div
                                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`}
                                >
                                    <Star className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <div className="text-white font-semibold text-lg">
                                        {item.client}
                                    </div>
                                    <div className="text-white/40 text-sm">{item.industry}</div>
                                </div>
                                <div className="text-white/70">{item.result}</div>
                                <div className="flex items-center text-primary-400 text-sm font-medium">
                                    <span>查看详情</span>
                                    <ArrowRight className="ml-1 h-4 w-4" />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/cases" className="btn-secondary">
                            查看所有案例
                        </Link>
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
                        <h2 className="heading-2 text-white mb-4">准备好拓展全球市场了吗？</h2>
                        <p className="text-white/60 mb-8 max-w-2xl mx-auto">
                            我们的专业团队将为您提供个性化的跨境电商解决方案，助您轻松进入国际市场
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="btn-accent">
                                立即咨询
                            </Link>
                            <Link to="/services" className="btn-secondary">
                                查看服务方案
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
