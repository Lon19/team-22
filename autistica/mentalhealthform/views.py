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
            username = column[2],
            depression = (column[3]+column[5]+column[10]+
                column[16]+column[17]+column[21])*2,
            anxiety = (column[2]+column[4]+column[7]+
                column[9]+column[15]+column[19]+column[20])*2,
            stress = column[1]+column[6]+column[8]+column[11]+
                column[12]+column[14]+column[18],
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
            q18 =  mcolumn[20],
            q19 =  mcolumn[21],
            q20 =  column[22],
            q21 =  column[23],
        )
    context = {}
    return render(request,template,context)
