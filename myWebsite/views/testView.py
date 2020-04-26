from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from django.core import serializers
from django.http import JsonResponse, HttpResponse
import json

# Create your views here.

from myWebsite.models.testModel import *   # 导入数据模块

@require_http_methods(['GET'])
def add_book(request):
    try:
        book = Book(book_name=request.GET.get('book_name'))
        book.save()
        response = {
            'msg': 'success',
            'code': 200,
        }
    except Exception as e:
        response['msg'] = str(e)
        response['code'] = 400
    return JsonResponse(response)

@require_http_methods(["GET"])
def show_books(request):
    try:
        books = Book.objects.filter()
        response = {
            'list': json.loads(serializers.serialize("json", books)),
            'msg': 'success',
            'code': 200
        }
    except Exception as e:
        response['msg'] = str(e)
        response['code'] = 400
    return JsonResponse(response)


@require_http_methods(["GET"])
def msg(request, name, age):
    try:
        response = {
            'list': 'My name is ' + name + ',i am ' + age + ' years old',
            'msg': 'success',
            'code': 200
        }
    except Exception as e:
        response['msg'] = str(e)
        response['code'] = 400
    return JsonResponse(response)