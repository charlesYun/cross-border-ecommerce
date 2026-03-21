import { useTranslation } from "react-i18next";

const AboutPage = () => {
    const { i18n } = useTranslation();
    const isZh = i18n.language.startsWith("zh");

    const stats = [
        { value: "500+", label: isZh ? "合作客户" : "Clients" },
        { value: "50+", label: isZh ? "覆盖市场" : "Markets" },
        { value: "10+", label: isZh ? "行业经验" : "Years" },
        { value: "98%", label: isZh ? "客户满意度" : "Satisfaction" },
    ];

    return (
        <div>
            <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-800 text-white">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/80 to-secondary-800/90" />
                <div className="absolute top-0 left-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-500/20 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-secondary-500/20 blur-3xl" />

                <div className="container-custom relative z-10 py-24">
                    <div className="max-w-4xl">
                        <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
                            <span className="mr-2 h-2 w-2 rounded-full bg-gradient-to-r from-primary-300 to-secondary-300" />
                            <span className="text-sm font-medium">ABOUT US</span>
                        </div>
                        <h1 className="heading-1 mb-6 bg-gradient-to-r from-white via-primary-100 to-white bg-clip-text text-transparent">
                            {isZh ? "关于我们" : "About Us"}
                        </h1>
                        <p className="max-w-3xl text-xl leading-relaxed text-gray-200">
                            {isZh
                                ? "景辰云贸是一家面向全球市场的跨境贸易与电商服务公司，围绕水杯、厨房用品、家居收纳、清洁用品等多类日用品，帮助品牌更清晰地连接产品、市场与交付。"
                                : "Jingchen is a cross-border trade and e-commerce company serving global markets across drinkware, kitchenware, home organization, cleaning products, and other daily goods categories."}
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <div>
                            <h2 className="heading-2 mb-6">{isZh ? "我们做什么" : "What We Do"}</h2>
                            <p className="mb-4 text-gray-600">
                                {isZh
                                    ? "我们围绕多类日用品的跨境合作，提供更简洁但更有效的支持，包括市场方向判断、合规协同、供应链配合和履约落地。"
                                    : "We support cross-border daily goods projects with a clear and practical approach across market direction, compliance, supply chain coordination, and delivery execution."}
                            </p>
                            <p className="text-gray-600">
                                {isZh
                                    ? "相比堆叠很多复杂功能，我们更重视能否真正帮助客户建立稳定合作关系并顺利推进项目。"
                                    : "Rather than stacking complex features, we focus on building reliable partnerships and moving projects forward smoothly."}
                            </p>
                        </div>

                        <div className="rounded-3xl bg-gray-50 p-8">
                            <div className="grid grid-cols-2 gap-6">
                                {stats.map((stat) => (
                                    <div key={stat.label} className="rounded-2xl bg-white p-6 text-center shadow-sm">
                                        <div className="mb-2 text-3xl font-bold text-primary-600">{stat.value}</div>
                                        <div className="text-gray-600">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
