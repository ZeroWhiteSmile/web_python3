## 启动django
python manage.py runserver

## 本项目端口
http://127.0.0.1:8000/

## 生成数据库表结构（并没有生成数据库）
python manage.py makemigrations

## 生成数据库表
python manage.py migrate

## 执行静态资源收集命令（部署前准备）

python manage.py collectstatic

## 安装pip 
python -m pip install --upgrade pip

## 安装django包
python -m pip install django

## 安装pymysql包
python -m pip install pymysql

## 使用python3.6＋django3.04＋pymysql时遇到这个错误
错误：django.core.exceptions.ImproperlyConfigured: mysqlclient 1.3.13 or newer is required; you have 0.9.3.
解决： 
* 找到C:\Users\Administrator\AppData\Local\Programs\Python\Python38\lib\site-packages\django\db\backends\mysql\base.py"
* 注释掉：if version < (1, 3, 3):
    raise ImproperlyConfigured("mysqlclient 1.3.3 or newer is required; you have %s" % Database.__version__)

## 报错：Django: ImportError: No module named 'corsheaders'
1. 运行：pip install django-cors-headers
2. 在开发环境中进行注册，在setting中设置 
INSTALLED_APPS = (
    ...
    'corsheaders'
    ...
)
## pip安装
1. 下载pip的gz安装包: https://pypi.org/project/pip/#files
2. cd到pip解压目录
3. 执行python setup.py install
4. 在Path环境变量里面添加值：C:\Users\Administrator\AppData\Local\Programs\Python\Python38\Scripts
5. 版本查看pip -v

