from rest_framework import serializers
from .models import *
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'email','Allergies','Health concerns')

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data['Allergies'],
            last_name=validated_data['Health concerns'],
        )
        user.set_password(validated_data['password'])
        user.save()
        return user
