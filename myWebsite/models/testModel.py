from __future__ import unicode_literals # 来自于_future__的导入必须出现在文件的开头

from django.db import models

# Create your models here.


class Book(models.Model):
    book_name = models.CharField(max_length=64) # CharField：字符串类型，映射到数据库中会转换成varchar类型，
    add_time = models.DateField(auto_now_add=True) # 、DateTimeField：日期时间类型，在python中对应的是datetime.datetime类型，

    def __unicode__(self):
        return self.book_name

    class Meat:
        app_label = 'Book'
        db_table = 'myWebsite_book'  # 自定义表名字，为了解决linux数据库表不区分大小写的问题