from core import views
from django.urls import path

urlpatterns = [
    path('api/dapau', views.dapau),
    path('api/login', views.login),
    path('api/logout', views.logout),
    path('api/whoami', views.whoami),
    path('api/settings', views.settings),
    path('api/add_todo', views.add_todo),
    path('api/list_todos', views.list_todos),
    path('api/cart_list', views.cart_list),
    path('api/add_to_cart', views.add_to_cart),
    path('api/remove_from_cart', views.remove_from_cart),
]
