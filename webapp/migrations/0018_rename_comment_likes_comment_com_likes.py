# Generated by Django 4.0.5 on 2022-09-15 13:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('webapp', '0017_comment_comment_likes'),
    ]

    operations = [
        migrations.RenameField(
            model_name='comment',
            old_name='comment_likes',
            new_name='com_likes',
        ),
    ]