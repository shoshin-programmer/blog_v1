from blog_api.views import PostViewSet, TagViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'post', PostViewSet, basename='post')
router.register(r'tag', TagViewSet, basename='tag')
urlpatterns = router.urls
