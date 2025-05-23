@echo off
chcp 65001 >nul
echo 设置Git用户信息...
echo.
echo 请输入您的名字（例如：张三）:
set /p name=
echo 请输入您的邮箱:
set /p email=
echo.

git config --global user.name "%name%"
git config --global user.email "%email%"

echo Git用户信息设置完成！
echo.
echo 现在执行以下命令:
echo 1. git add .
echo 2. git commit -m "初始提交：个人导航网站"
echo 3. git branch -M main
echo 4. git push -u origin main
echo.
pause 