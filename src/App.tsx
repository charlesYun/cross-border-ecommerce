import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import ServicesPage from "./pages/ServicesPage";
import CasesPage from "./pages/CasesPage";
import ContactPage from "./pages/ContactPage";
import NewsPage from "./pages/NewsPage";

// 错误边界组件
function ErrorBoundary() {
    const navigateHome = () => {
        // 根据环境动态获取base路径
        const base = import.meta.env.BASE_URL || "/";
        window.location.href = base;
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-950">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-white mb-4">404 - 页面未找到</h1>
                <p className="text-gray-400 mb-8">抱歉，您访问的页面不存在。</p>
                <button onClick={navigateHome} className="btn-primary">
                    返回首页
                </button>
            </div>
        </div>
    );
}

function App() {
    // 使用createBrowserRouter并设置future flags来消除警告
    // 设置 basename 以支持 GitHub Pages 部署
    const router = createBrowserRouter(
        [
            {
                path: "/",
                element: <Layout />,
                errorElement: <ErrorBoundary />,
                children: [
                    { index: true, element: <HomePage /> },
                    { path: "about", element: <AboutPage /> },
                    { path: "products", element: <ProductsPage /> },
                    { path: "services", element: <ServicesPage /> },
                    { path: "cases", element: <CasesPage /> },
                    { path: "contact", element: <ContactPage /> },
                    { path: "news", element: <NewsPage /> },
                ],
            },
        ],
        {
            basename: import.meta.env.BASE_URL,
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
