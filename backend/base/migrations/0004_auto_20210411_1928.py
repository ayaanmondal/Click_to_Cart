# Generated by Django 3.1.7 on 2021-04-11 19:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_product_image'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='countinstock',
            new_name='countInstock',
        ),
    ]
