import re
from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import Post, Comment


class AuthorSerializer(serializers.ModelSerializer):
    avatar_url = serializers.SerializerMethodField("avatar_url_field")

    def avatar_url_field(self, author):
        if re.match(r"^https?://", author.avatar_url):
            return author.avatar_url

        if "request" in self.context:
            scheme = self.context["request"].scheme
            host = self.context["request"].get_host()
            return scheme + "://" + host + author.avatar_url

        request

    class Meta:
        model = get_user_model()
        fields = ["username", "name", "avatar_url"]


class PostSerializer(serializers.ModelSerializer):
    author = AuthorSerializer(read_only=True)
    is_like = serializers.SerializerMethodField("is_like_field")

    def is_like_field(self, post):
        if "request" in self.context:
            user = self.context["request"].user
            return post.like_user_set.filter(pk=user.pk).exists()
        return False

    class Meta:
        model = Post
        fields = [
            "id",
            "author",
            "created_at",
            "photo",
            "caption",
            "location",
            "tag_set",
            "is_like",
        ]


class CommentSerializer(serializers.ModelSerializer):
    author = AuthorSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = ["id", "author", "message", "created_at"]

