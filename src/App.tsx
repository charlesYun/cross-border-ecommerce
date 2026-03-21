import { createHashRouter, RouterProvider } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";

// 错误边界组件
function ErrorBoundary() {
    const { i18n } = useTranslation();
    const isZh = i18n.language.startsWith("zh");

    const navigateHome = () => {
        // 根据环境动态获取base路径
        const base = import.meta.env.BASE_URL || "/";
        window.location.href = base;
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-950">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-white mb-4">
                    {isZh ? "404 - 页面未找到" : "404 - Page Not Found"}
                </h1>
                <p className="text-gray-400 mb-8">
                    {isZh ? "抱歉，您访问的页面不存在。" : "Sorry, the page you visited does not exist."}
                </p>
                <button onClick={navigateHome} className="btn-primary">
                    {isZh ? "返回首页" : "Back Home"}
                </button>
            </div>
        </div>
    );
}

function App() {
    // GitHub Pages 不处理 SPA 的 history 路由，改用 hash 路由更稳定。
    const router = createHashRouter(
        [
            {
                path: "/",
                element: <Layout />,
                errorElement: <ErrorBoundary />,
                children: [
                    { index: true, element: <HomePage /> },
                    { path: "about", element: <AboutPage /> },
                    { path: "services", element: <ServicesPage /> },
                    { path: "contact", element: <ContactPage /> },
                ],
            },
        ],
        {
            future: {
                v7_relativeSplatPath: true,
                v7_fetcherPersist: true,
                v7_normalizeFormMethod: true,
                v7_partialHydration: true,
                v7_skipActionErrorRevalidation: true,
            },
        }
    );

    return <RouterProvider router={router} />;
}

export default App;
