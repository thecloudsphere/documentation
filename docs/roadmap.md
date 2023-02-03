---
sidebar_position: 101
---

# Roadmap

## Blueprint: Update schedule

The reconciliation process, configurable via the ``reconcile_schedule`` argument
of a blueprint, ensures that a deployment is in the right state. However, this
does not take into account changes to the blueprint itself.

Via ``update_schedule`` it is now possible to check for changes to a blueprint or
the availability of a new version.

When changes are identified, the new version is updated if necessary, depending
on the configuration of the template, and changes are applied by performing a
reconciliation.
