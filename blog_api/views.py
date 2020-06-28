from rest_framework import viewsets
from .serializers import PostSerializer
from blog_api.models import Post


class PostViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing Post instances.
    """
    serializer_class = PostSerializer
    queryset = Post.objects.all()
