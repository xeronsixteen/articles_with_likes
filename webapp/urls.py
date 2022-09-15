from django.urls import path
from django.views.generic import RedirectView

# from webapp.views import IndexView, CreateArticle, ArticleView, UpdateArticle, DeleteArticle, CreateCommentView, \
#     UpdateComment, DeleteComment,

from webapp.views import LikeView, IndexView, CreateArticle, ArticleView, UpdateArticle, DeleteArticle, \
    CreateCommentView, UpdateComment, DeleteComment

app_name = "webapp"

urlpatterns = [
    path('', IndexView.as_view(), name="index"),
    path('articles/', RedirectView.as_view(pattern_name="index")),
    path('articles/add/', CreateArticle.as_view(), name="create_article"),
    path('article/<int:pk>/', ArticleView.as_view(), name="article_view"),
    path('article/<int:pk>/update/', UpdateArticle.as_view(), name="update_article"),
    path('article/<int:pk>/delete/', DeleteArticle.as_view(), name="delete_article"),
    path('article/<int:pk>/comment/add/', CreateCommentView.as_view(), name="article_comment_create"),
    path('comments/<int:pk>/update/', UpdateComment.as_view(), name="update_comment"),
    path('comments/<int:pk>/delete/', DeleteComment.as_view(), name="delete_comment"),
    path('like/<int:pk>/', LikeView, name='like_article'),

]
