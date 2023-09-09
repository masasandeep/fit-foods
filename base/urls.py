from django.urls import path
from .views import *
from .views import UserRegistration, UserLogin
from rest_framework_simplejwt.views import (
    #TokenObtainPairView,
    TokenRefreshView,
)
urlpatterns = [
    # path('foods/', FoodList.as_view(), name='food-list'),
    # path('health-concerns/', HealthConcernList.as_view(), name='health-concern-list'),
    path('signup/', UserRegistration.as_view(), name='user-registration'),
    path('login/', UserLogin.as_view(), name='user-login'),
     path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('allergies/',Allergy.as_view(),name="allergy_names"),
]
