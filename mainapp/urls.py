from django.urls import path, re_path
from . import views

urlpatterns = [
    path('', views.home, name='Home'),
    path('home', views.home, name='Home'),
    path('Home', views.home, name='Home'),
    path('Projects/<str:Category>/<str:urlName>', views.project, name='project'),
]
