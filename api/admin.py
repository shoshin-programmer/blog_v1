from django.contrib import admin
from api.models import Post, Tag

# Register your models here.

admin.site.register(Tag)


class PostAdmin(admin.ModelAdmin):
    """Administration object for Book models.
    Defines:
     - fields to be displayed in list view (list_display)
     - adds inline addition of book instances in book view (inlines)
    """
    list_display = ('title', 'list_tags')


admin.site.register(Post, PostAdmin)
