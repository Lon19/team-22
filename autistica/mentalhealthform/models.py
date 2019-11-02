from django.db import models
from django.db.models import Model

# Create your models here.

class MHFormData (models.Model):
    formID = models.CharField(max_length=20);
    username = models.CharField(max_length=20);
    depression = models.BigIntegerField();
    anxiety = models.BigIntegerField();
    stress = models.BigIntegerField();
    date = models.DateField();
    q1 =  models.PositiveIntegerField();
    q2 =  models.PositiveIntegerField();
    q3 =  models.PositiveIntegerField();
    q4 =  models.PositiveIntegerField();
    q5 =  models.PositiveIntegerField();
    q6 =  models.PositiveIntegerField();
    q7 =  models.PositiveIntegerField();
    q8 =  models.PositiveIntegerField();
    q9 =  models.PositiveIntegerField();
    q10 =  models.PositiveIntegerField();
    q11 =  models.PositiveIntegerField();
    q12 =  models.PositiveIntegerField();
    q13 =  models.PositiveIntegerField();
    q14 =  models.PositiveIntegerField();
    q15 =  models.PositiveIntegerField();
    q16 =  models.PositiveIntegerField();
    q17 =  models.PositiveIntegerField();
    q18 =  models.PositiveIntegerField();
    q19 =  models.PositiveIntegerField();
    q20 =  models.PositiveIntegerField();
    q21 =  models.PositiveIntegerField();
