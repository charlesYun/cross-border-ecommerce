import { useTranslation } from "react-i18next";
import { Mail, Phone } from "lucide-react";

const ContactPage = () => {
    const { i18n } = useTranslation();
    const isZh = i18n.language.startsWith("zh");

    const contacts = [
        {
            icon: <Mail className="h-6 w-6" />,
            title: isZh ? "邮箱" : "Email",
            value: "contact@jingchenyunmao.com",
            href: "mailto:contact@jingchenyunmao.com",
        },
        {
            icon: <Phone className="h-6 w-6" />,
            title: isZh ? "电话" : "Phone",
            value: "+86 21 8888 9999",
            href: "tel:+862188889999",
        },
    ];

    return (
        <div>
            <section className="bg-gradient-to-r from-primary-600 to-accent-500 text-white">
                <div className="container-custom py-20">
                    <span className="tag mb-4 border-white/20 bg-white/10 text-white">CONTACT</span>
                    <h1 className="heading-1 mb-6">{isZh ? "联系我们" : "Contact Us"}</h1>
                    <p className="max-w-3xl text-xl text-primary-50">
                        {isZh
                            ? "如需进一步沟通，欢迎通过邮箱或电话直接联系。"
                            : "If you would like to continue the conversation, feel free to contact us directly by email or phone."}
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container-custom">
                    <div className="mx-auto max-w-3xl">
                        <div className="mb-8 rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
                            <div className="text-sm uppercase tracking-[0.2em] text-white/35">
                                {isZh ? "响应说明" : "Response Note"}
                            </div>
                            <p className="mt-3 text-white/70">
                                {isZh
                                    ? "工作日咨询通常会在 24 小时内回复，常规沟通时间为周一至周五 9:00 - 18:00。"
                                    : "We usually reply to business-day inquiries within 24 hours. Regular communication hours are Monday to Friday, 9:00-18:00."}
                            </p>
                        </div>
                        <div className="grid gap-6 md:grid-cols-2">
                            {contacts.map((item) => (
                                <a
                                    key={item.title}
                                    href={item.href}
                                    className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center transition-colors hover:bg-white/10"
                                >
                                    <div className="mb-4 flex justify-center text-primary-300">{item.icon}</div>
                                    <h2 className="mb-3 text-2xl font-semibold text-white">{item.title}</h2>
                                    <div className="text-lg text-white/75">{item.value}</div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
