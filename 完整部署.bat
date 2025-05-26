@echo off
chcp 65001 >nul
echo ===== 个人导航网站部署脚本 =====
echo.

echo 步骤1: 设置Git用户信息
echo 请输入您的名字（例如：张三）:
set /p name=
echo 请输入您的邮箱:
set /p email=

git config --global user.name "%name%"
git config --global user.email "%email%"
echo Git用户信息设置完成！
echo.

echo 步骤2: 初始化Git仓库
git init
echo.

echo 步骤3: 添加所有文件
git add .
echo.

echo 步骤4: 提交更改
git commit -m "初始提交：个人导航网站"
echo.

echo 步骤5: 创建main分支
git branch -M main
echo.

echo 步骤6: 添加远程仓库
echo 请输入您的GitHub用户名:
set /p username=
echo 请输入您的仓库名称（例如：nav-site）:
set /p repo=
git remote add origin https://github.com/%username%/%repo%.git
echo.

echo 步骤7: 推送到GitHub
echo 正在推送代码到GitHub...
git push -u origin main
echo.

echo ===== 部署完成 =====
echo 请访问 https://%username%.github.io/%repo% 查看您的网站
echo （可能需要几分钟才能生效）
echo.
echo 别忘了在GitHub仓库设置中启用GitHub Pages功能：
echo 1. 进入 https://github.com/%username%/%repo%/settings/pages
echo 2. 在"Source"部分选择"main"分支
echo 3. 点击"Save"保存设置
echo.
pause 