# Memory Maintenance Workflow

## Purpose
Define how Project Brain should be updated after every completed development task.

## BEFORE TASK
1. **Read**:
   * `brain/master-memory.md`
   * `brain/architecture.md`
   * `brain/patterns.md`
   * `brain/decisions.md` (if present)

2. **Understand**:
   * Existing architecture
   * Existing patterns
   * Current roadmap phase

## DURING TASK
1. Follow existing patterns.
2. Reuse existing components.
3. Reuse existing constants.
4. Avoid introducing duplicate patterns.

## AFTER TASK
Review changes and determine whether any of the following require updates:
* Architecture changed
* New pattern introduced
* Existing pattern modified
* New reusable component added
* New page added
* New section added
* Roadmap progress changed
* Content model changed

Update relevant Brain files accordingly.

### Decision Matrix

| Change Type | Brain File To Update |
|---|---|
| New reusable component | `patterns.md` |
| New page | `architecture.md`, `roadmap.md` |
| New content structure | `content-model.md` |
| New design rule | `patterns.md`, `master-memory.md` |
| New route | `architecture.md` |

## ROADMAP TRACKING
Use the following standard format for marking roadmap phases and deliverables:
* `[ ]` Not Started
* `[/]` In Progress
* `[x]` Completed
* `[-]` Blocked

## QUALITY RULES
Project Brain must always:
* Reflect actual codebase state
* Avoid assumptions
* Remain concise
* Remain useful for future AI agents
* Prefer facts over plans
