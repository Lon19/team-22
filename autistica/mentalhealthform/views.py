from django.shortcuts import render
import csv, io
from django.contrib import messages
from django.contrib.auth.decorators import permission_required

# Create your views here.

from rest_framework import viewsets

from .serializer import MHFormDataSerializer
from .models import MHFormData


class MHFormDataViewSet(viewsets.ModelViewSet):
    queryset = MHFormData.objects.all().order_by('formID')
    serializer_class = MHFormDataSerializer


@permission_required('admin.can_add_log_entry')
def record_upload(request):
    template = "record_upload.html"

    prompt = {
        'order':'CSV order'
    }

    if request.method == "GET":
        return render(request,template,prompt)

    csv_file = request.FILES['file']

    if not csv_file.name.endswith('.csv'):
        messages.error(request,'this is not a csv')

    data_set = csv_file.read().decode('UTF-8')
    io_string = io.StringIO(data_set)
    next(io_string)
    for column in csv.reader(io_string, delimiter=',', quotechar="|"):
        _, created = MHFormData.objects.update_or_create(
            formID = column[26],
            username = 10,#column[2][:4],
            depression = (int(column[3])+int(column[5])+int(column[10])+
                int(column[16])+int(column[17])+int(column[21]))*2,
            anxiety = (int(column[2])+int(column[4])+int(column[7])+
                int(column[9])+int(column[15])+int(column[19])+int(column[20]))*2,
            stress = (int(column[1])+int(column[6])+int(column[8])+int(column[11])+
                int(column[12])+int(column[14])+int(column[18]))*2,
            date = column[24],
            q1 =  column[3],
            q2 =  column[4],
            q3 =  column[5],
            q4 =  column[6],
            q5 =  column[7],
            q6 =  column[8],
            q7 =  column[9],
            q8 =  column[10],
            q9 =  column[11],
            q10 =  column[12],
            q11 =  column[13],
            q12 =  column[14],
            q13 =  column[15],
            q14 =  column[16],
            q15 =  column[17],
            q16 =  column[18],
            q17 =  column[19],
            q18 =  column[20],
            q19 =  column[21],
            q20 =  column[22],
            q21 =  column[23],
)
    context = {}
    return render(request,template,context)
