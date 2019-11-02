from django.contrib import admin
from .models import MHFormData
# Register your models here.
from import_export.admin import ImportExportModelAdmin

admin.site.register(MHFormData)

class ViewAdmin(ImportExportModelAdmin):
    pass
