"""
Django settings for web_python3 project.

Generated by 'django-admin startproject' using Django 3.0.

For more information on this file, see
https://docs.djangoproject.com/en/3.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.0/ref/settings/
"""

import os

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'o)&8)76j&63b-_ngy*n6@p_m#icmxl4ujk-(kdi2%-i2pxn84x'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False # 开发环境设置为True,生产环境设置为False避免信息泄露

ALLOWED_HOSTS = ['*'] # *表示任何主机都可以访问


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'myWebsite',  # 注册新创建的应用app
    'corsheaders'
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware', # 第三方包django-cors-headers来解决跨域问题
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]
CORS_ORIGIN_ALLOW_ALL = False # 第三方包django-cors-headers来解决跨域问题

ROOT_URLCONF = 'web_python3.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': ['dist'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.0/howto/static-files/
# static_url的作用
# 1. apps模板中使用的静态文件硬编码目录，由于项目是VUE所以用不到
# 2. 浏览器上,利用前缀STATIC_URL的具体内容,来映射STATIC_ROOT,例如www.xxx.com/static/static_root路径/img/xxx.png
# 3.项目下app的静态资源目录
STATIC_URL = '/static/'

# 设置文件中定义目录列表，Django 会从中寻找静态文件。
# 说明地址：https://docs.djangoproject.com/en/3.0/howto/static-files/
# static_dirs的作用
# 1.如果静态资源存放在项目下app以外的路径，则用它指定路径
# 2.static_dirs告诉django,首先到static_dirs里面寻找静态文件,其次再到各个app的static文件夹里面找(注意, django查找静态文件是惰性查找,查找到第一个,就停止查找了)
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'dist/static')
]

# 部署到服务器时候需要使用的静态文件目录
# 文档地址https://docs.djangoproject.com/zh-hans/3.0/howto/static-files/
# static_root作用
# 1.STATIC_ROOT 是在部署静态文件时(pyhton3 manage.py collectstatic命令复制静态资源到指定目录)所有的静态文静的目录
# 2.例如STATIC_ROOT = 'asserts', 执行命令pyhton3 manage.py collectstatic，则会在项目下生成一个asserts目录存放资源
STATIC_ROOT = "asserts"  # 这是我的服务器目录

WSGI_APPLICATION = 'web_python3.wsgi.application'


# Database
# https://docs.djangoproject.com/en/3.0/ref/settings/#databases

DATABASES = {
    # 'default': {
    #     'ENGINE': 'django.db.backends.sqlite3',
    #     'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    # }

    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'mywebsite',
        'USER': 'root',
        'PASSWORD': 'Root1234',
        'HOST': '115.29.150.107',
        'PORT': '3306'
    }
}


# Password validation
# https://docs.djangoproject.com/en/3.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.0/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True

