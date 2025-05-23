@echo off
chcp 65001 >nul
echo 初始化Git仓库...
git init
echo 添加所有文件...
git add .
echo 创建初始提交...
git commit -m "初始提交：个人导航网站"
echo.
echo 请输入你的GitHub用户名:
set /p username=
echo 请输入你的仓库名称 (例如 nav-site):
set /p repo=
echo.
echo 添加远程仓库...
git remote add origin https://github.com/%username%/%repo%.git
echo.
echo 准备推送到GitHub...
echo.
echo 请在GitHub上创建名为 %repo% 的仓库，然后运行以下命令:
echo git push -u origin main
echo.
echo 完成后，在GitHub仓库设置中启用GitHub Pages功能。
echo 选择main分支作为源，然后保存设置。
echo 几分钟后，你的网站将在 https://%username%.github.io/%repo% 可用。
pause 