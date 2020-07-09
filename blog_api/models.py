import os
from django.db import models


# utility functions
def get_image_path(instance, filename):
    return os.path.join('photos', str(instance.name), filename)


# Create your models here.
class Post(models.Model):
    """Individual Post/Essay for blog page"""
    title = models.CharField(max_length=255, null=True)
    tag = models.ManyToManyField('Tag', blank=True)
    content = models.TextField(max_length=5000, null=True)
    post_img = models.ImageField(upload_to=get_image_path, blank=True, null=True)
    date_created = models.DateTimeField(auto_now_add=True)
    last_updated = models.DateTimeField(auto_now=True)
    view_count = models.IntegerField(default=0)

    def list_tags(self):
        """Creates a string for the Tags to view on admin"""
        return ', '.join([tag.name for tag in self.tag.all()[:3]])


class Tag(models.Model):
    """Tags or the topic involved of the post/essay"""
    name = models.CharField(max_length=255, null=True)
    img = models.ImageField(upload_to=get_image_path, blank=True, null=True)

    def __str__(self):
        return self.name
