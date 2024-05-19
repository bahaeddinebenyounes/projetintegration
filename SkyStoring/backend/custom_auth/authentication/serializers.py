from core.models import UserProfile
from rest_framework import fields, serializers
from django.contrib.auth.hashers import make_password
from django.contrib.auth.password_validation import validate_password


class SignupSerializer(serializers.ModelSerializer):
    """
    Serializer for creating new user using signup form
    """
    class Meta:
        model = UserProfile
        fields = ['id', 'username', 'email', 'password', 'role']  # Include 'role' field
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        if validate_password(validated_data['password']) == None:
            password = make_password(validated_data['password'])
            user = UserProfile.objects.create(
                username=validated_data['username'],
                email=validated_data['email'],
                password=password,
                role=validated_data['role'],  # Save 'role' field
            )
        return user

