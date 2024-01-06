#!/bin/bash

# Create a Python virtual environment
python3 -m venv .venv

# Activate the virtual environment
source .venv/bin/activate

# Install dependencies
pip install -r api/hms/requirements.txt

# Copy the .env.example to the .env file
cp api/hms/.env.example .env

# Setup .env values
sed -i "s/DB_HOST=68.178.225.224/" .env
sed -i "s/DB_USER=msd_admin/" .env
sed -i "s/DB_PASSWORD=SeamanTrans@2023/" .env
sed -i "s/DB_NAME=hms/" .env
sed -i "s/API_PORT=5001/" .env
sed -i "s/DB_POOL_NAME=msd_hms_api/" .env
sed -i "s/DB_POOL_SIZE=5/" .env
sed -i "s/DB_RECONNECT_MAX_RETRY=3/" .env
sed -i "s/FLASK_JSON_SORT_KEYS=False/" .env
sed -i "s/CORS_ALLOWED_ORIGINS=*/" .env

# Deactivate the virtual environment
deactivate
