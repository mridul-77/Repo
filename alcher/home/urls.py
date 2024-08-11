from django.contrib import admin
from django.urls import path
from home import views
from .views import delete_user, update_user
app_name='home'
urlpatterns = [
    path("", views.index, name='home'),
    path("add", views.add, name='add'),
    path('delete/<int:user_id>/', delete_user, name='delete_user'),
    path('update/<int:user_id>/', update_user, name='update_user'),
]
