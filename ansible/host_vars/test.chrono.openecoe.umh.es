---
# configuration for production

env: production
hostname: openecoe-chrono
app_fqdn: test.openecoe.umh.es
app_port: 6080
app_port_ssl: 6443

ansible_connection: local

# Enviroment Config
project_main_controller: openECOE-CHRONO
project_path: "{{base_path}}/{{project_main_controller}}"

venv_path: "{{base_path}}/.venv_chrono"
requirements_path: "{{project_path}}/requirements.txt"

git_repo: "git@github.com:openECOE/openECOE-chrono.git"
git_branch: develop

# Enviroment Config
app_secret_key: 'f24b05095b4748a8b9d13df5cdb9d83c'
app_debug: False
app_testing: False

app_workers: 1

supervisor_user: root
supervisor_password: 'kkGFGhiK06BXdEW9gKi4j5VD'

#Deactivate supervisor http server in production
supervisor_inet_http_server_enable: false

gunicorn_server: "localhost:9000"
gunicorn_params: "--worker-class eventlet"
gunicorn_module: "{{project_main_controller}}:app"