from rest_framework import viewsets
from .serializers import PostSerializer, TagSerializer
from blog_api.models import Post, Tag


class TagViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing Tag instances.
    """
    serializer_class = TagSerializer
    queryset = Tag.objects.all().order_by('name')


class PostViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing Post instances.
    """
    serializer_class = PostSerializer
    queryset = Post.objects.all()
