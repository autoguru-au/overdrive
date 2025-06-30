---
mode: agent
---

## Formatting

Run the format command to enforce consistent formatting.

```bash
yarn format
```

## Linting

Check for any linting issues prior to generating a changeset.

```bash
yarn lint
```

## Changeset

This package uses `changeset` for version management. **Every publishable change
must include a changeset.**

### Generate a Changeset

```bash
yarn changeset
```

There are multiple text entry steps to the command.

### Changeset Description Format

Write descriptions from the user's perspective:

## Final Checklist

Before marking a task complete:

- [ ] Code is formatted and linted
- [ ] Documentation is updated
- [ ] Changeset is created and committed
- [ ] No performance regressions introduced

Remember: The goal is to maintain a high-quality, reliable component library
that serves as the foundation for all AutoGuru applications.
