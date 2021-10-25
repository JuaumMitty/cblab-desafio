from rest_framework import viewsets
from myapp.api import serializers
from myapp import models


class UsuariosViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.UsuariosSerializer
    queryset = models.Usuarios.objects.all()
