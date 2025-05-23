# 个人导航网站

这是一个简单的个人导航网站，用于集合和管理个人收藏的网站链接。该项目使用纯HTML、CSS和JavaScript构建，无需后端服务器，可直接部署在GitHub Pages上。

## 功能特点

- 网站分类展示
- 搜索功能
- 添加新网站
- 响应式设计，适配移动设备
- 使用本地存储保存数据

## 如何使用

1. 访问网站：[你的GitHub Pages链接]
2. 浏览已有网站，点击卡片可直接访问对应网站
3. 使用搜索框查找特定网站
4. 点击"添加网站"按钮添加新的网站到收藏中

## 本地开发

1. 克隆仓库到本地
   ```
   git clone https://github.com/你的用户名/nav-site.git
   ```

2. 在浏览器中打开`index.html`文件

3. 进行修改后，提交并推送到GitHub
   ```
   git add .
   git commit -m "你的提交信息"
   git push origin main
   ```

## 自定义

你可以通过以下方式自定义导航网站：

1. 修改`js/script.js`中的`initialSites`数组，添加或删除默认网站
2. 在`index.html`中添加或修改分类
3. 自定义`css/style.css`中的样式

## 部署到GitHub Pages

1. 在GitHub上创建一个新仓库
2. 将代码推送到该仓库
3. 在仓库设置中启用GitHub Pages
4. 选择`main`分支作为源
5. 保存设置后，你的网站将在几分钟内可用

## 技术栈

- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap Icons
- localStorage API

## 许可证

MIT 