from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets

from .serializer import MHFormDataSerializer
from .models import MHFormData


class MHFormDataViewSet(viewsets.ModelViewSet):
    queryset = MHFormData.objects.all().order_by('formID')
    serializer_class = MHFormDataSerializer
