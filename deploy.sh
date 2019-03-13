#!/bin/bash

ssh smurakami.com "cd /var/www/apps/whiteday/; git pull origin master"
# scp -r . smurakami.com:/var/www/apps/whiteday
