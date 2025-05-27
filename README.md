# 六月天导航

一个简洁美观的个人导航网站，基于HTML、CSS和JavaScript开发。支持多主题切换、本地数据存储、网站分类、搜索等功能。

## 主要功能

- 🎨 多主题切换（默认、暗色、海洋、森林、日落主题）
- 🔍 搜索和分类标签筛选
- ⭐ 收藏夹功能
- 📱 响应式设计
- 💾 本地数据存储
- 📤 导入/导出功能
- 🎯 拖拽排序
- 🌈 自定义主题颜色

## 本地开发

1. 克隆仓库到本地：
```bash
git clone https://github.com/你的用户名/nav-site.git
cd nav-site
```

2. 使用浏览器打开 `index.html` 文件即可预览。

## 更新部署

当你在本地修改了代码后，需要按以下步骤将更新推送到GitHub仓库：

1. 进入项目目录：
```bash
cd nav-site-main  # 或你的项目目录名
```

2. 查看修改的文件状态：
```bash
git status
```

3. 添加修改的文件到暂存区：
```bash
git add .  # 添加所有修改的文件
```
或者添加指定文件：
```bash
git add index.html css/style.css js/script.js
```

4. 确认文件已添加到暂存区：
```bash
git status  # 应该看到文件变成绿色，表示已暂存
```

5. 提交修改：
```bash
git commit -m "描述你的修改内容"
```

6. 确保已配置GitHub认证（首次使用需要配置）：
```bash
git config --global user.name "你的GitHub用户名"
git config --global user.email "你的GitHub邮箱"
```

7. 推送到GitHub仓库：
```bash
git push origin main  # main是你的默认分支名
```

### 常见问题解决：

1. 如果 `git push` 报错"Empty reply from server"：
```bash
# 重新设置远程仓库地址
git remote set-url origin https://github.com/你的用户名/nav-site.git
# 或使用SSH地址
git remote set-url origin git@github.com:你的用户名/nav-site.git
```

2. 如果遇到认证失败：
   - 访问 GitHub.com
   - 点击头像 -> Settings -> Developer settings -> Personal access tokens
   - 生成新的token
   - 使用token作为密码进行推送

3. 如果遇到冲突：
```bash
git pull origin main  # 先拉取最新代码
# 解决冲突后
git add .
git commit -m "解决冲突"
git push origin main
```

4. 如果想撤销最后一次提交：
```bash
git reset --soft HEAD^  # 撤销提交但保留修改
# 或
git reset --hard HEAD^  # 撤销提交并删除修改（谨慎使用）
```

### 部署后的检查：

1. 访问你的GitHub仓库页面，检查代码是否已更新
2. 进入仓库的Settings -> Pages，检查部署状态
3. 等待1-2分钟后访问你的网站地址，确认更新是否生效

注意事项：
- 确保你有正确的仓库写入权限
- 推送前先在本地测试确保一切正常
- 保持良好的提交习惯，写清晰的提交信息
- 定期备份重要数据

## 自定义配置

1. 修改网站标题：
   - 打开 `index.html`
   - 修改 `<title>` 标签内容
   - 修改 logo 区域的标题文字

2. 添加自定义网站：
   - 打开 `js/script.js`
   - 在 `initialSites` 数组中添加新的网站对象

3. 修改主题颜色：
   - 打开 `css/style.css`
   - 修改相应主题类中的颜色变量

## 技术栈

- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap Icons

## 许可证

MIT License 