from django.db import models
from django.db.models import Model

# Create your models here.

class MHFormData (models.Model):
    formID = models.BigIntegerField();
    username = models.BigIntegerField();
    depression = models.IntegerField();
    anxiety = models.IntegerField();
    stress = models.IntegerField();
    date = models.DateField();
    q1 =  models.PositiveSmallIntegerField();
    q2 =  models.PositiveSmallIntegerField();
    q3 =  models.PositiveSmallIntegerField();
    q4 =  models.PositiveSmallIntegerField();
    q5 =  models.PositiveSmallIntegerField();
    q6 =  models.PositiveSmallIntegerField();
    q7 =  models.PositiveSmallIntegerField();
    q8 =  models.PositiveSmallIntegerField();
    q9 =  models.PositiveSmallIntegerField();
    q10 =  models.PositiveSmallIntegerField();
    q11 =  models.PositiveSmallIntegerField();
    q12 =  models.PositiveSmallIntegerField();
    q13 =  models.PositiveSmallIntegerField();
    q14 =  models.PositiveSmallIntegerField();
    q15 =  models.PositiveSmallIntegerField();
    q16 =  models.PositiveSmallIntegerField();
    q17 =  models.PositiveSmallIntegerField();
    q18 =  models.PositiveSmallIntegerField();
    q19 =  models.PositiveSmallIntegerField();
    q20 =  models.PositiveSmallIntegerField();
    q21 =  models.PositiveSmallIntegerField();
