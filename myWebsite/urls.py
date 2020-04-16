from django.conf.urls import url, include

# from django.urls import path
# path() 用法和url相同

# from .# import views

# 测试用视图接口
from .views.testView import *

urlpatterns = [
    # 测试用视图接口
    url(r'add_book$', add_book, ),
    url(r'show_books$', show_books, ),
    url(r'^msg/(?P<name>\w+)/(?P<age>\d+)/$', msg)
    # r防止字符转义，例如\r \t等
    # '^'为严格前匹配，也就是限定开头。浏览器输入http://localhost:8000/hello/a/b 也是可以访问view.hello视图
    # $匹配字符串的末尾
    #
    #
    # 。
    # .'(?P...)' 分组匹配：(?P<anme>\w+) -> 表示匹配name字段为一个或任意个匹配数字字母下划线
]

