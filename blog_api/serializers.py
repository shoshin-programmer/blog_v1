from rest_framework import serializers
from blog_api.models import Post, Tag


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = (
            'name',
        )


class PostSerializer(serializers.ModelSerializer):

    tag = TagSerializer(many=True, read_only=True)

    class Meta:
        model = Post
        fields = (
            'title',
            'tag',
            'content',
            'post_img',
            'date_created',
            'last_updated',
        )
