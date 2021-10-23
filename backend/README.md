To use this project you should have PHP 8, composer and laravel installed.

To run this project you should write

    composer update
    composer install

Then you have to rename .env.example to .env
Create database uevent
Change DB_DATABASE=laravel to DB_DATABASE=uevent

Run commands to get the database up

    php artisan key:generate
    php artisan jwt:secret
    php artisan migrate --seed
