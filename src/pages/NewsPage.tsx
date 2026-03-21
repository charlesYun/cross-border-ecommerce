import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight, Calendar, Megaphone } from "lucide-react";

const NewsPage = () => {
    const { i18n } = useTranslation();
    const isZh = i18n.language.startsWith("zh");

    const updates = [
        {
            date: "2026-03-10",
            title: isZh ? "发布 2026 年跨境市场观察" : "Released Our 2026 Market Outlook",
            summary: isZh
                ? "围绕产品合规、物流稳定性和品牌增长节奏，整理了新一年的重点方向。"
                : "We summarized the key trends for compliance, logistics stability, and brand growth in 2026.",
        },
        {
            date: "2026-03-08",
            title: isZh ? "启动东南亚品牌合作项目" : "Started a New Southeast Asia Brand Project",
            summary: isZh
                ? "新项目将聚焦保温杯新品测试、本地化内容和区域仓配协同。"
                : "The new project focuses on insulated product launches, localized content, and regional fulfillment.",
        },
        {
            date: "2026-03-03",
            title: isZh ? "升级物流协同流程" : "Upgraded Our Logistics Coordination Process",
            summary: isZh
                ? "通过更清晰的仓储与配送协作机制，进一步提升交付稳定性。"
                : "We improved delivery stability through a clearer warehousing and distribution workflow.",
        },
    ];

    return (
        <div>
            <section className="bg-gradient-to-r from-primary-600 to-accent-500 text-white">
                <div className="container-custom py-20">
                    <span className="tag mb-4 border-white/20 bg-white/10 text-white">NEWS & UPDATES</span>
                    <h1 className="heading-1 mb-6">{isZh ? "新闻动态" : "News & Updates"}</h1>
                    <p className="max-w-3xl text-xl text-primary-50">
                        {isZh
                            ? "这里保留官网需要的公司动态与行业观察，不做复杂的资讯系统。"
                            : "This page keeps the company-news layer a corporate website needs, without turning it into a full media system."}
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container-custom">
                    <div className="mb-12 text-center">
                        <h2 className="heading-2 mb-4 text-white">{isZh ? "最新动态" : "Latest Updates"}</h2>
                        <p className="mx-auto max-w-2xl text-white/60">
                            {isZh
                                ? "用简洁的方式传达公司的进展、观点和项目节奏。"
                                : "A simple overview of company progress, perspectives, and project momentum."}
                        </p>
                    </div>

                    <div className="space-y-6">
                        {updates.map((item) => (
                            <div key={item.title} className="card p-8">
                                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                                    <div className="flex gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/15">
                                            <Megaphone className="h-6 w-6 text-primary-300" />
                                        </div>
                                        <div>
                                            <div className="mb-3 flex items-center gap-2 text-sm text-white/40">
                                                <Calendar className="h-4 w-4" />
                                                <span>{item.date}</span>
                                            </div>
                                            <h3 className="mb-3 text-2xl font-semibold text-white">{item.title}</h3>
                                            <p className="max-w-3xl text-white/60">{item.summary}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid gap-8 lg:grid-cols-2">
                        <div className="rounded-3xl bg-gray-50 p-8">
                            <h3 className="mb-4 text-2xl font-semibold text-gray-900">{isZh ? "我们发布什么内容" : "What We Share"}</h3>
                            <div className="space-y-4 text-gray-700">
                                <div>{isZh ? "公司项目进展与阶段性成果" : "Project milestones and delivery progress"}</div>
                                <div>{isZh ? "重点市场和行业趋势观察" : "Observations on key markets and category trends"}</div>
                                <div>{isZh ? "服务能力升级与合作方式更新" : "Service updates and improvements in how we work"}</div>
                            </div>
                        </div>

                        <div className="rounded-3xl bg-dark-950 p-8 text-white">
                            <h3 className="mb-4 text-2xl font-semibold">
                                {isZh ? "想了解更具体的行业信息？" : "Need a more specific industry view?"}
                            </h3>
                            <p className="mb-6 text-white/60">
                                {isZh
                                    ? "如果你已经有明确的市场或产品方向，我们可以在沟通中提供更有针对性的建议。"
                                    : "If you already have a clear market or product direction, we can provide more targeted advice in a direct conversation."}
                            </p>
                            <Link to="/contact?subject=service" className="btn-accent">
                                {isZh ? "联系顾问" : "Talk to Us"}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NewsPage;
