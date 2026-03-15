import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// 语言资源
const resources = {
    zh: {
        translation: {
            // 导航
            nav: {
                home: "首页",
                about: "关于我们",
                products: "产品展示",
                services: "服务方案",
                cases: "客户案例",
                news: "新闻动态",
                contact: "联系我们",
            },

            // 首页
            home: {
                title: "连接中国制造与世界市场",
                subtitle: "专业的跨境电商解决方案，助力企业轻松拓展全球业务",
                cta: "立即咨询",
                viewProducts: "查看产品",
                viewCases: "查看案例",
                whyChooseUs: "为什么选择我们？",
                features: [
                    "10+年跨境电商行业经验",
                    "服务超过500家中国企业",
                    "覆盖全球50+国家和地区",
                    "98%客户满意度",
                    "7x24小时专业客服支持",
                    "数据驱动的市场洞察",
                ],
            },

            // 通用
            common: {
                learnMore: "了解更多",
                contactUs: "联系我们",
                readMore: "阅读全文",
                viewAll: "查看全部",
                search: "搜索",
                filter: "筛选",
                category: "分类",
                price: "价格",
                rating: "评分",
                duration: "时长",
                results: "成果",
            },
        },
    },
    en: {
        translation: {
            // 导航
            nav: {
                home: "Home",
                about: "About",
                products: "Products",
                services: "Services",
                cases: "Cases",
                news: "News",
                contact: "Contact",
            },

            // 首页
            home: {
                title: "Connecting Chinese Manufacturing with Global Markets",
                subtitle:
                    "Professional cross-border e-commerce solutions to help businesses easily expand globally",
                cta: "Contact Now",
                viewProducts: "View Products",
                viewCases: "View Cases",
                whyChooseUs: "Why Choose Us?",
                features: [
                    "10+ years of cross-border e-commerce experience",
                    "Served over 500 Chinese companies",
                    "Coverage in 50+ countries and regions",
                    "98% customer satisfaction rate",
                    "7x24 professional customer support",
                    "Data-driven market insights",
                ],
            },

            // 通用
            common: {
                learnMore: "Learn More",
                contactUs: "Contact Us",
                readMore: "Read More",
                viewAll: "View All",
                search: "Search",
                filter: "Filter",
                category: "Category",
                price: "Price",
                rating: "Rating",
                duration: "Duration",
                results: "Results",
            },
        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: "zh", // 默认语言
    fallbackLng: "zh",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
