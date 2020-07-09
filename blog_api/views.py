from rest_framework import viewsets
from .serializers import PostSerializer, TagSerializer
from blog_api.models import Post, Tag
from rest_framework import generics


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

    def retrieve(self, request, *args, **kwargs):
        obj = self.get_object()
        obj.view_count = obj.view_count + 1
        obj.save(update_fields=("view_count", ))
        return super().retrieve(request, *args, **kwargs)


class RecentPostListView(generics.ListCreateAPIView):
    queryset = Post.objects.all().order_by('date_created')
    serializer_class = PostSerializer


class TopPostListView(generics.ListCreateAPIView):
    queryset = Post.objects.all().order_by('view_count')
    serializer_class = PostSerializer
