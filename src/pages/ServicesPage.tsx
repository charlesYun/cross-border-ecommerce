import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight, BarChart, Globe, Headphones, Package, Shield, Truck } from "lucide-react";

const ServicesPage = () => {
    const { i18n } = useTranslation();
    const isZh = i18n.language.startsWith("zh");

    const services = [
        {
            icon: <Globe className="h-8 w-8" />,
            title: isZh ? "全球市场拓展" : "Market Expansion",
            description: isZh
                ? "帮助水杯、厨房用品、家居清洁等日用品品牌明确目标市场、进入节奏和渠道优先级。"
                : "We help daily goods brands define target markets, market-entry timing, and channel priorities.",
        },
        {
            icon: <Shield className="h-8 w-8" />,
            title: isZh ? "合规与认证" : "Compliance Support",
            description: isZh
                ? "围绕产品认证、法规要求和交付风险提供支持。"
                : "Support around certification, market regulations, and delivery risk control.",
        },
        {
            icon: <Truck className="h-8 w-8" />,
            title: isZh ? "物流与仓储" : "Logistics & Warehousing",
            description: isZh
                ? "统筹仓储、运输和履约方案，保证时效与稳定性。"
                : "We coordinate warehousing, shipping, and fulfillment for reliability and timing.",
        },
        {
            icon: <Package className="h-8 w-8" />,
            title: isZh ? "供应链协同" : "Supply Chain Coordination",
            description: isZh
                ? "衔接产品、包装、生产和交付环节，提升项目执行效率。"
                : "We align product, packaging, production, and delivery for smoother execution.",
        },
        {
            icon: <BarChart className="h-8 w-8" />,
            title: isZh ? "市场与数据分析" : "Market & Data Analysis",
            description: isZh
                ? "通过数据与市场观察辅助决策，而不是只给表面报告。"
                : "We support decisions with market insight and usable data, not just reports.",
        },
        {
            icon: <Headphones className="h-8 w-8" />,
            title: isZh ? "客户沟通支持" : "Client Communication",
            description: isZh
                ? "提供多语言沟通和售前售后协同支持。"
                : "Multilingual communication support across pre-sales and after-sales stages.",
        },
    ];

    const process = isZh
        ? [
              { step: "01", title: "需求沟通", description: "明确产品、市场、预算和合作目标。" },
              { step: "02", title: "方案建议", description: "给出更适合当前阶段的执行方向。" },
              { step: "03", title: "项目推进", description: "围绕供应链、合规与履约进行协同。" },
              { step: "04", title: "持续优化", description: "根据结果反馈继续迭代合作方式。" },
          ]
        : [
              { step: "01", title: "Discovery", description: "Clarify products, markets, budgets, and goals." },
              { step: "02", title: "Recommendation", description: "Define the right direction for the current stage." },
              { step: "03", title: "Execution", description: "Coordinate supply chain, compliance, and fulfillment." },
              { step: "04", title: "Optimization", description: "Refine the approach based on results and feedback." },
          ];

    return (
        <div>
            <section className="bg-gradient-to-r from-primary-600 to-accent-500 text-white">
                <div className="container-custom py-20">
                    <span className="tag mb-4 border-white/20 bg-white/10 text-white">SERVICES</span>
                    <h1 className="heading-1 mb-6">{isZh ? "服务能力" : "Service Capabilities"}</h1>
                    <p className="max-w-3xl text-xl text-primary-50">
                        {isZh
                            ? "作为综合日用品跨境公司，我们围绕产品、供应链、市场和履约提供清晰直接的服务支持。"
                            : "As a multi-category daily goods company, we provide direct support across product, supply chain, market entry, and fulfillment."}
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container-custom">
                    <div className="mb-12 text-center">
                        <h2 className="heading-2 mb-4 text-white">{isZh ? "核心服务" : "Core Services"}</h2>
                        <p className="mx-auto max-w-2xl text-white/60">
                            {isZh
                                ? "不做复杂套餐和价格比较，而是直接说明我们在跨境项目中的关键角色。"
                                : "Instead of complex pricing tables, we clearly show the role we play in cross-border projects."}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {services.map((service) => (
                            <div key={service.title} className="card p-8">
                                <div className="mb-5 text-primary-300">{service.icon}</div>
                                <h3 className="mb-4 text-xl font-semibold text-white">{service.title}</h3>
                                <p className="text-white/60">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="mb-12 text-center">
                        <h2 className="heading-2 mb-4 text-gray-900">{isZh ? "合作流程" : "How We Work"}</h2>
                        <p className="mx-auto max-w-2xl text-gray-600">
                            {isZh
                                ? "把合作流程讲清楚，比展示太多复杂功能更能帮助客户建立信任。"
                                : "A clear process often builds more trust than an overload of complex features."}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                        {process.map((item) => (
                            <div key={item.step} className="text-center">
                                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-600 text-2xl font-bold text-white">
                                    {item.step}
                                </div>
                                <h3 className="mb-2 text-xl font-semibold text-gray-900">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container-custom">
                    <div className="rounded-[2rem] bg-dark-950 p-10 text-center text-white">
                        <h2 className="heading-2 mb-4">{isZh ? "如果你正在评估合作伙伴" : "If You Are Evaluating a Partner"}</h2>
                        <p className="mx-auto mb-8 max-w-2xl text-white/60">
                            {isZh
                                ? "我们可以先从产品、市场和交付三个层面快速沟通，帮助你判断是否适合继续推进。"
                                : "We can start with a focused conversation around product, market, and delivery to see if we are the right fit."}
                        </p>
                        <Link to="/contact?subject=service" className="btn-accent">
                            {isZh ? "联系咨询" : "Contact Us"}
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
