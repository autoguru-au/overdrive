---
'@autoguru/overdrive': patch
---

Box: Adds an overflow prop and allows className to be clsx compatible

**FEATURES**

`ClassName` can now be sent in directly to Box instead of through clsx.

eg.

```diff
- <Box className={clsx(styles.one, styles.two)}>
+ <Box className={[styles.one, styles.two]}>
    Hello
</Box>

- <Box className={clsx({[styles.one]: maybeDoMe}, styles.two)}>
+ <Box className={[{[styles.one]: maybeDoMe}, styles.two]}>
    Hello
</Box>
```
