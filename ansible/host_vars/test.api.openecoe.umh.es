---
# configuration for production

env: production
hostname: openecoe-api
app_fqdn: test.api.openecoe.umh.es

ansible_connection: local

git_repo: "git@github.com:openECOE/openECOE-API.git"
git_branch: develop

# Enviroment Config
project_main_controller: openECOE-API
project_path: "{{base_path}}/{{project_main_controller}}"

venv_path: "{{base_path}}/.venv"
requirements_path: "{{project_path}}/requirements.txt"

database_name: "{{project_main_controller}}_{{env}}"
database_user: "openecoe"
database_password: "8luz80d6OAqboKCasW2X"

# Enviroment Config
app_secret_key: 'f24b05095b4748a8b9d13df5cdb8d83c'
bcrypt_log_rounds: 13
app_debug: False
app_testing: False
sqlalchemy_track_modifications: False

api_auth: True
app_workers: 4

supervisor_user: root
supervisor_password: 'kkGFGhiK06BXdEW9gKi4j5VD'

#Deactivate supervisor http server in production
supervisor_inet_http_server_enable: false

gunicorn_server: "localhost:8000"
gunicorn_module: "{{project_main_controller}}:app"