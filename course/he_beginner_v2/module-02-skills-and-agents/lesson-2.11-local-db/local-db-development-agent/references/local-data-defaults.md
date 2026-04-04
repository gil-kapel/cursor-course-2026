# Local Data Defaults

Default choice:

- use SQLite when entities relate, filtering matters, or multiple CRUD paths exist
- use JSON only for tiny, temporary, human-readable data

Modeling defaults:

- define entities, fields, ids, states first
- keep storage behind one repository or helper boundary
- if Python-first, think in `sqlmodel` terms before writing raw queries
