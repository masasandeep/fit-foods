from django.db import models
from django.contrib.auth.models import AbstractUser

class Allergies(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class HealthIssue(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name 

class User(AbstractUser):
    name = models.CharField(max_length=50,null=True)
    email = models.EmailField(unique=True,max_length=254)
    profile_image = models.ImageField(upload_to='profile_images/', blank=True, null=True)
    allergies = models.ManyToManyField(Allergies, related_name='users_with_allergies', blank=True)
    health_issues = models.ManyToManyField(HealthIssue, related_name='users_with_health_issues', blank=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.username
