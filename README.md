# Feedora

## 项目简介

Feedora 是一个专为独立构建者设计的产品发布反馈工具，帮助开发者和创作者在产品发布的各个阶段收集和分析用户反馈，从而做出更好的产品决策。

**核心价值**：
- 帮助独立构建者构建用户真正需要的产品
- 提高反馈收集的响应率（平均30%+）
- 提供场景化的反馈模板和分析工具

**目标用户**：独立开发者、创作者、小团队、自由职业者、产品创始人

## 主要功能

### 场景化反馈收集
- **Pre-launch**：收集等待名单用户的早期反馈，了解用户需求
- **During launch**：实时监听早期用户的使用体验和反馈
- **Post-launch**：通过功能请求板让用户参与产品路线图的制定

### 专业模板
- **Pre-Launch Waitlist Template**：针对等待名单用户的定制化问卷
- **Post-Launch Feedback Template**：收集产品发布后的用户体验反馈
- **Feature Request Board**：让用户投票和提交功能请求

### 数据分析工具
- **Advanced Visualization**：直观的数据可视化，快速发现模式
- **Sentiment Analysis**：自动检测用户反馈的情感倾向
- **Custom Reports**：生成和分享自定义报告

## 技术栈

- **前端**：Next.js 15.4.6, React
- **认证**：NextAuth.js 5.0.0-beta.30
- **数据库**：Prisma ORM
- **样式**：Tailwind CSS
- **部署**：Vercel

## 快速开始

### 安装依赖

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 运行开发服务器

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看应用效果。

### 构建生产版本

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

## 项目结构

```
feedora/
├── public/            # 静态资源
│   ├── dashboard-preview.svg
│   ├── prelaunch-template.svg
│   ├── postlaunch-template.svg
│   ├── feature-request-board.svg
│   └── user-*.svg     # 用户头像
├── src/
│   ├── app/           # Next.js 应用目录
│   │   ├── page.tsx   # 主页面
│   │   └── api/       # API 路由
│   ├── components/    # 组件
│   │   └── footer.tsx # 页脚组件
│   ├── auth.ts        # 认证配置
│   └── lib/           # 工具库
├── prisma/            # Prisma 数据库配置
├── package.json       # 项目配置
└── README.md          # 项目文档
```

## 贡献指南

1. Fork 项目仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 许可证

本项目使用 MIT 许可证。详情请参阅 [LICENSE](LICENSE) 文件。

## 联系我们

- 官方网站：[feedora.app](https://feedora.app)
- GitHub：[github.com/feedora](https://github.com/feedora)
- 邮箱：hello@feedora.app