# Generated by Django 4.2.9 on 2024-05-19 13:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_tokenblacklist'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='role',
            field=models.CharField(choices=[('parent', 'Parent'), ('babysitter', 'Babysitter')], default='parent', max_length=20),
        ),
    ]
