from rest_framework import generics
from .models import  *
# from .serializers import FoodSerializer, HealthConcernSerializer
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.views import APIView
from .serializers import UserSerializer
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate
class   UserRegistration(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            # profile_image = request.data.get('profile_image')  # Assuming you're sending the image in the request
            # if profile_image:
            #     UserProfile.objects.create(user=user, profile_image=profile_image)
            refresh = RefreshToken.for_user(user)
            return Response({
                "username": serializer.data,
                "refresh": str(refresh),
                "access": str(refresh.access_token)
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class UserLogin(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        user = authenticate(email=email, password=password)
        if user:
            refresh = RefreshToken.for_user(user)
            return Response({
                "username": user.username,
                "user_id": user.id,
                "refresh": str(refresh),
                "access": str(refresh.access_token)
            })
        return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)
