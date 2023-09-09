from rest_framework import generics
from .models import  *
# from .serializers import FoodSerializer, HealthConcernSerializer
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.views import APIView
<<<<<<< HEAD
from .serializers import UserSerializer,GetSerializer,AllergySerializer,HealthSerializer
from rest_framework.decorators import api_view
=======
from .serializers import UserSerializer,GetSerializer
from rest_framework.decorators import api_view, permission_classes
>>>>>>> 49dacee1cad9628a627846766e23c4499d847afd
from django.contrib.auth import authenticate
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token
    
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
    
    
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
                "username":user.username,
                "refresh": str(refresh),
                "access": str(refresh.access_token)
            })
        return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)
    
class Display(APIView):
    def get(self,request):
        user = User.objects.all()
        serial = GetSerializer(user,many=True)
        return Response(serial.data)
<<<<<<< HEAD
    
    
class Allergy(APIView):
    def get(self,request):
        data = Allergies.objects.all()
        serializer = AllergySerializer(data,many=True)
        return Response(serializer.data)
    
class Health(APIView):
    def get(self,request):
        data = HealthIssue.objects.all()
        serializer = HealthSerializer(data,many=True)
        return Response(serializer.data)
=======
# Django views.py
@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_username(request):
    new_username = request.data.get('new_username')
    if new_username:
        request.user.username = new_username
        request.user.save()
        return Response({'message': 'Username updated successfully'}, status=status.HTTP_200_OK)
    else:
        return Response({'error': 'New username is required'}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def update_password(request):
    new_password = request.data.get('new_password')
    if new_password:
        request.user.set_password(new_password)
        request.user.save()
        return Response({'message': 'Password updated successfully'}, status=status.HTTP_200_OK)
    else:
        return Response({'error': 'New password is required'}, status=status.HTTP_400_BAD_REQUEST)
>>>>>>> 49dacee1cad9628a627846766e23c4499d847afd
