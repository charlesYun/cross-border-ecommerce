import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight, Battery, Coffee, Droplets, ShieldCheck, Thermometer } from "lucide-react";

const ProductsPage = () => {
    const { i18n } = useTranslation();
    const isZh = i18n.language.startsWith("zh");

    const categories = [
        {
            icon: <Thermometer className="h-6 w-6" />,
            title: isZh ? "保温杯系列" : "Insulated Series",
            description: isZh
                ? "面向礼赠、商超和品牌联名场景的经典保温杯方案。"
                : "Classic insulated bottles for gifting, retail, and branded collaborations.",
            highlights: isZh
                ? ["双层真空结构", "支持 LOGO 定制", "礼盒包装可选"]
                : ["Double-wall vacuum", "Custom logo support", "Optional gift packaging"],
            color: "from-slate-500 to-gray-700",
        },
        {
            icon: <Droplets className="h-6 w-6" />,
            title: isZh ? "玻璃杯系列" : "Glass Series",
            description: isZh
                ? "适合精品零售和高颜值生活方式渠道的玻璃杯产品线。"
                : "Glass tumblers designed for boutique retail and lifestyle channels.",
            highlights: isZh
                ? ["高硼硅玻璃", "环保轻便", "多种杯套配件"]
                : ["Borosilicate glass", "Lightweight and eco-friendly", "Multiple accessory options"],
            color: "from-blue-400 to-cyan-500",
        },
        {
            icon: <Battery className="h-6 w-6" />,
            title: isZh ? "智能水杯系列" : "Smart Series",
            description: isZh
                ? "适合新消费和科技礼品市场的智能化水杯产品。"
                : "Smart drinkware for tech gifting and modern consumer brands.",
            highlights: isZh
                ? ["温显与提醒", "支持电子模块", "适配 OEM 开发"]
                : ["Temperature display", "Smart reminder modules", "OEM-ready development"],
            color: "from-violet-500 to-fuchsia-500",
        },
        {
            icon: <Coffee className="h-6 w-6" />,
            title: isZh ? "随行与运动系列" : "Travel & Sports Series",
            description: isZh
                ? "覆盖通勤、露营、健身等高频使用场景。"
                : "Built for commuting, camping, fitness, and everyday active use.",
            highlights: isZh
                ? ["大容量设计", "便携防漏", "适合户外渠道"]
                : ["Large-capacity options", "Portable and leak-proof", "Suitable for outdoor channels"],
            color: "from-green-500 to-emerald-600",
        },
    ];

    const capabilities = isZh
        ? [
              "支持 OEM / ODM 定制开发",
              "提供 FDA、LFGB、REACH 等合规支持",
              "可同步规划包装、物流与仓储方案",
              "适配礼赠、零售、电商和品牌合作渠道",
          ]
        : [
              "OEM / ODM customization support",
              "Compliance support for FDA, LFGB, REACH, and more",
              "Packaging, logistics, and warehousing planning available",
              "Suitable for gifting, retail, e-commerce, and branded campaigns",
          ];

    return (
        <div>
            <section className="bg-gradient-to-r from-primary-700 to-accent-500 text-white">
                <div className="container-custom py-20">
                    <span className="tag mb-4 border-white/20 bg-white/10 text-white">PRODUCT OVERVIEW</span>
                    <h1 className="heading-1 mb-6">{isZh ? "产品能力展示" : "Product Overview"}</h1>
                    <p className="max-w-3xl text-xl text-primary-50">
                        {isZh
                            ? "这里不做复杂下单和筛选，而是聚焦展示我们在水杯产品上的品类能力、定制能力和交付经验。"
                            : "Instead of a complex catalog flow, this page focuses on our drinkware categories, customization capabilities, and delivery strengths."}
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container-custom">
                    <div className="mb-12 text-center">
                        <h2 className="heading-2 mb-4 text-white">{isZh ? "核心产品方向" : "Core Product Directions"}</h2>
                        <p className="mx-auto max-w-2xl text-white/60">
                            {isZh
                                ? "围绕不同渠道和用户场景，我们为客户提供稳定、可定制、适合全球销售的产品方案。"
                                : "We build stable, customizable product lines around specific channels and user scenarios."}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        {categories.map((category) => (
                            <div key={category.title} className="card p-8">
                                <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${category.color}`}>
                                    {category.icon}
                                </div>
                                <h3 className="mb-4 text-2xl font-semibold text-white">{category.title}</h3>
                                <p className="mb-6 text-white/60">{category.description}</p>
                                <div className="space-y-3">
                                    {category.highlights.map((item) => (
                                        <div key={item} className="flex items-center gap-3 text-white/75">
                                            <ShieldCheck className="h-5 w-5 flex-shrink-0 text-emerald-400" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                        <div>
                            <h2 className="heading-2 mb-6 text-gray-900">{isZh ? "我们的交付能力" : "How We Deliver"}</h2>
                            <p className="mb-8 text-gray-600">
                                {isZh
                                    ? "公司官网更重要的是让客户快速理解我们能做什么、适合什么合作方式，以及为什么值得进一步沟通。"
                                    : "A company website should help visitors quickly understand what we can deliver, how we work, and why it is worth starting a conversation."}
                            </p>

                            <div className="grid gap-4">
                                {capabilities.map((item) => (
                                    <div key={item} className="rounded-2xl bg-gray-50 p-5 text-gray-700">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-[2rem] bg-dark-950 p-8 text-white">
                            <span className="tag mb-4">{isZh ? "FOR BRANDS" : "FOR BRANDS"}</span>
                            <h3 className="mb-4 text-2xl font-semibold">
                                {isZh ? "如果你已经有目标市场或渠道" : "If you already have a target market or channel"}
                            </h3>
                            <p className="mb-6 text-white/60">
                                {isZh
                                    ? "我们可以直接从产品方向、认证要求、包装表达和履约方案四个维度给出建议。"
                                    : "We can advise directly on product direction, compliance, packaging, and fulfillment."}
                            </p>
                            <div className="flex flex-col gap-3 sm:flex-row">
                                <Link to="/contact?subject=service" className="btn-accent">
                                    {isZh ? "联系咨询" : "Contact Us"}
                                </Link>
                                <Link to="/services" className="btn-secondary justify-center">
                                    {isZh ? "查看服务" : "View Services"}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-primary-600 text-white">
                <div className="container-custom py-16">
                    <div className="text-center">
                        <h2 className="heading-2 mb-4">{isZh ? "想进一步了解产品合作方式？" : "Want to discuss product cooperation?"}</h2>
                        <p className="mx-auto mb-8 max-w-2xl text-primary-100">
                            {isZh
                                ? "我们可以根据你的品牌定位、市场方向和预算，给出更合适的产品建议。"
                                : "We can recommend the right product direction based on your brand, market, and budget."}
                        </p>
                        <Link to="/contact?subject=service" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                            {isZh ? "立即沟通" : "Start a Conversation"}
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductsPage;
