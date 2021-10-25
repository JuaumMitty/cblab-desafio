from rest_framework import serializers
from myapp import models


class UsuariosSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Usuarios
        fields = '__all__'
