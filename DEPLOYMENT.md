# GitHub Pages 部署指南

## 项目概述

这是一个现代化的跨境电商网站，专注于水杯类产品的全球分销。采用React + TypeScript + Tailwind CSS技术栈，具有深色主题设计和响应式布局。

## 部署到 GitHub Pages

### 前提条件

1. 确保已安装 Node.js (v16+)
2. 确保已安装 Git
3. 拥有 GitHub 账号

### 部署步骤

#### 1. 初始化 Git 仓库（如果尚未初始化）

```bash
git init
git add .
git commit -m "Initial commit: 跨境电商网站"
```

#### 2. 创建 GitHub 仓库

1. 访问 https://github.com/new
2. 创建名为 `cross-border-ecommerce` 的仓库
3. 不要初始化 README、.gitignore 或 license

#### 3. 连接到远程仓库

```bash
git remote add origin https://github.com/你的用户名/cross-border-ecommerce.git
git branch -M main
git push -u origin main
```

#### 4. 配置 GitHub Pages

1. 访问仓库的 Settings 页面
2. 点击左侧的 "Pages"
3. 在 "Source" 部分选择 "GitHub Actions"
4. 或者选择 "Deploy from a branch"，然后选择 "main" 分支和 "/ (root)" 文件夹

#### 5. 手动部署（可选）

```bash
# 构建项目
npm run build

# 部署到 GitHub Pages
npm run deploy
```

### 项目结构说明

- `src/` - React 源代码
    - `components/` - 可复用组件
    - `pages/` - 页面组件
    - `styles/` - 样式文件
    - `i18n/` - 国际化配置
- `public/` - 静态资源
- `dist/` - 构建输出目录（部署时自动生成）

### 开发命令

```bash
# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview

# 部署到 GitHub Pages
npm run deploy
```

### 访问地址

部署成功后，网站将通过以下地址访问：

```
https://你的用户名.github.io/cross-border-ecommerce/
```

### 注意事项

1. 确保 `vite.config.ts` 中的 `base` 配置正确设置为 `/cross-border-ecommerce/`
2. 如果更改仓库名称，需要同步更新 `vite.config.ts` 中的 `base` 路径
3. GitHub Pages 部署可能需要几分钟时间生效
4. 首次部署后，请检查控制台是否有404错误，确保所有资源路径正确

### 故障排除

1. **页面空白**：检查浏览器控制台是否有404错误，确保资源路径正确
2. **样式丢失**：检查 Tailwind CSS 是否正确构建
3. **路由问题**：确保使用 HashRouter 或正确配置了SPA路由
4. **部署失败**：检查 GitHub Actions 日志，查看具体错误信息

### 技术栈

- React 18 + TypeScript
- Vite 5 (构建工具)
- Tailwind CSS 3 (样式框架)
- React Router 6 (路由管理)
- i18next (国际化)
- Lucide React (图标库)

### 自定义配置

如需自定义域名，请在仓库 Settings → Pages 中配置 Custom domain，并更新 `vite.config.ts` 中的 `base` 路径。
