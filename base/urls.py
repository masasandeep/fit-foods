from django.urls import path
from .views import *
from .views import UserRegistration, UserLogin
urlpatterns = [
    # path('foods/', FoodList.as_view(), name='food-list'),
    # path('health-concerns/', HealthConcernList.as_view(), name='health-concern-list'),
    path('signup/', UserRegistration.as_view(), name='user-registration'),
    path('login/', UserLogin.as_view(), name='user-login'),
]
