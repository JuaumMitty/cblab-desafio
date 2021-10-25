from django.db import models

# Create your models here.


class Usuarios(models.Model):
    id = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=254)
    email = models.EmailField(max_length=254, unique=True)
    password = models.CharField(max_length=254)
    userAdmin = models.BooleanField(default=False)
