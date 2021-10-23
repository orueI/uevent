#!/bin/bash

composer update
composer install
mv .env.exampe .env
php artisan key:generate
php artisan jwt:secret
php artisan migrate --seed
