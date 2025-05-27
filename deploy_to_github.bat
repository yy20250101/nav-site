@echo off
echo 准备将六月天导航站部署到GitHub...

REM 确保已初始化git仓库
if not exist .git (
    echo 初始化git仓库...
    git init
)

REM 添加所有文件到暂存区
echo 添加文件到暂存区...
git add .

REM 提交更改
echo 提交更改...
set /p commit_msg="请输入提交信息 (默认: 更新导航站): "
if "%commit_msg%"=="" set commit_msg=更新导航站
git commit -m "%commit_msg%"

REM 检查远程仓库是否已配置
git remote -v | findstr origin
if %errorlevel% neq 0 (
    echo 未检测到远程仓库配置
    set /p repo_url="请输入您的GitHub仓库URL: "
    git remote add origin %repo_url%
)

REM 推送到GitHub
echo 推送到GitHub...
git push -u origin master

echo 部署完成！
echo.
echo 接下来您需要:
echo 1. 访问您的GitHub仓库
echo 2. 进入Settings - Pages
echo 3. 在Source下选择"master branch"
echo 4. 点击Save启用GitHub Pages
echo.
echo 几分钟后，您的导航站将可通过以下地址访问:
echo https://您的用户名.github.io/仓库名
echo.
pause 