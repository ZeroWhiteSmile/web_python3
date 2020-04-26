"""web_python3 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from django.views.generic import TemplateView


from django.views import static
from django.conf import settings


# urls导入
import myWebsite.urls

# 此处路由地址都是在server地址 http://127.0.0.1:8000/后的路径
urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^api/test/v1/', include(myWebsite.urls)), # 函数 include() 允许引用其它 URLconfs。每当 Django 遇到 include() 时，它会截断与此项匹配的 URL 的部分，并将剩余的字符串发送到 URLconf 以供进一步处理。
    url(r'^$', TemplateView.as_view(template_name="index.html")),
    url(r'^develop/(?P<path>.*)$', TemplateView.as_view(template_name="index.html")),  # 刷新后页面404问题，有多少个路由就添加多少个url，好烦。
    url(r'^test/(?P<path>.*)$', TemplateView.as_view(template_name="index.html")),  # 刷新后页面404问题，有多少个路由就添加多少个url，好烦。
    url(r'^static/(?P<path>.*)$', static.serve, {'document_root': settings.STATIC_ROOT}, name='static'),
]

