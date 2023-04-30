---
sidebar_position: 200
---

# Appendix

## Schemas

[Yamale](https://github.com/23andMe/Yamale) is a schema validator for YAML.
It is used in ``tcsctl`` via the ``validate`` command to check used YAML files
for correctness.

The schemas are maintained in the
[thecloudsphere/tcsctl](https://github.com/thecloudsphere/tcsctl/tree/main/tcsctl/schemas)
repository.

### Blueprint

```yaml
---
blueprint:
  author: str()
  repository_server: str()
  repository: str()
  name: str()
  description: str(multiline=True)
  reconcile_schedule: str(required=False)
  environment: include('environment')
  versions: list(include('version'), min=1)
  control: include('control', required=False)
  inputs: list(include('input'))
  outputs: list(include('output'))

---
version:
  version: str()

input:
  name: str()
  destination: any(str(), include('destination'))
  default: str(required=False)
  required: bool()
  description: str(multiline=True)
  visibility: enum('private', required=False)

output:
  name: str()
  source: any(str(), include('source'))
  description: str(multiline=True)
  visibility: enum('private', required=False)

control:
  type: str()
  arguments: list(include('control_argument'))

control_argument:
  name: str()
  value: str()
  type: enum('string', 'file', required=False)

destination:
  type: enum('environment', 'file')
  path: str(required=False)

source:
  type: str()
  path: str()

environment:
  repository: str()
  name: str()
  version: str()
  overrides: include('environment_overrides', required=False)

environment_overrides:
  blueprint_source: str(required=False)
  blueprint_source_key: str(required=False)
  blueprint_version: str(required=False)
  working_directory: str(required=False)
  outputs_directory: str(required=False)
  makefile: str(required=False)
  makefile_pre_processing: str(required=False)
  makefile_processing: str(required=False)
  makefile_post_processing: str(required=False)
```

### Client configuration

```yaml
---
log_level: enum('INFO', 'DEBUG', required=False)
profiles: map(str(), include('profile'))

---
profile:
  api_url: str()
  api_version: enum('v1')
  insecure: bool(required=False)
  auth: include('auth')

auth:
  organisation: str(required=False)
  project: str(required=False)
  username: str()
  password: str(required=False)
```

### Environment

```yaml
---
environment:
  author: str()
  repository_server: str()
  repository: str()
  name: str()
  image: str()
  command: str()
  description: str(multiline=True)
  versions: list(include('version'), min=1)
  inputs: list(include('input'))
  outputs: list(include('output'))

---
version:
  version: str()

input:
  name: str()
  destination: any(str(), include('destination'))
  default: str(required=False)
  required: bool()
  description: str(multiline=True)
  visibility: enum('private', required=False)

output:
  name: str()
  source: any(str(), include('source'))
  description: str(multiline=True)
  visibility: enum('private', required=False)

destination:
  type: enum('environment', 'file')
  path: str(required=False)

source:
  type: str()
  path: str()
```

### Template

```yaml
---
map(str(), include('template'))

---
template:
  blueprint: any(str(), include('blueprint'))
  blueprint_version: str()
  environment: any(str(), include('environment'))
  environment_version: str(required=False)
  inputs: map(str(), include('input'))

input: any(str(), include('extented_input'))

extented_input:
  type: enum('file')
  path: str(required=False)
  template: bool(required=False)

blueprint:
  name: str()
  repository: str(required=False)
  repository_key: str(required=False, multiline=True)
  repository_server: str(required=False)

environment:
  name: str()
  repository: str(required=False)
  repository_key: str(required=False, multiline=True)
  repository_server: str(required=False)
```
