from blog_api.views import PostViewSet, TagViewSet, RecentPostListView, TopPostListView
from django.urls import path
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'post', PostViewSet, basename='post')
router.register(r'tag', TagViewSet, basename='tag')
urlpatterns = router.urls

urlpatterns += [
    path('recent_posts', RecentPostListView.as_view(), name="recent-posts"),
    path('top_posts', TopPostListView.as_view(), name="top-posts"),
]
