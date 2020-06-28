from django.contrib import admin
from api.models import Post, Tag

# Register your models here.

admin.site.register(Tag)


class PostAdmin(admin.ModelAdmin):
    """ displays on list the tags and the title """
    list_display = ('title', 'list_tags')


admin.site.register(Post, PostAdmin)
