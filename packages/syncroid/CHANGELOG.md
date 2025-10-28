# Changelog


## &ensp; [` 📦 syncroid@0.2.0  `](https://github.com/kh4f/syncroid/compare/vite-plugin-syncroid@0.1.0...syncroid@0.2.0)

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⚠️ BREAKING CHANGES
- `include` and `exclude` config options have been renamed to `includePattern` and `excludePatterns`. <sup>[1]</sup>
- The `syncroid` function signature was changed. Now it accepts an options object with optional `exclude` paths. <sup>[2]</sup>
- `syncroid` signature changed to accept `root` and `include` RegExp array instead of entry list. <sup>[3]</sup>

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✨ Features
- **finder**: 
  - add `aggregatePaths` option to return parent directory if all children match [`2d53c05`](https://github.com/kh4f/syncroid/commit/2d53c05)
  - add support for excluding paths [`dedeeaa`](https://github.com/kh4f/syncroid/commit/dedeeaa)
- **config**: make `root` and `dest` options optional [`c1c7bbd`](https://github.com/kh4f/syncroid/commit/c1c7bbd)
- **syncroid**: switch to recursive regex-based path matching [`a2c498d`](https://github.com/kh4f/syncroid/commit/a2c498d) ⚠️<sup>[3]</sup>

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🚜 Refactoring
- **syncroid**: accept options object and support `exclude` paths [`6c35180`](https://github.com/kh4f/syncroid/commit/6c35180) ⚠️<sup>[2]</sup>

##### &emsp;&ensp;&nbsp;&nbsp; [_All Release Commits_](https://github.com/kh4f/syncroid/compare/vite-plugin-syncroid@0.1.0...syncroid@0.2.0) &ensp;•&ensp; _Oct 26, 2025_


## &ensp; [` 📦 syncroid@0.1.0  `](https://github.com/kh4f/syncroid/commits/syncroid@0.1.0)

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✨ Features
- remove entry from destination before pushing if entry is a directory [`7484a51`](https://github.com/kh4f/syncroid/commit/7484a51)
- add initial implementation with simple `adb push` execution [`39e1fb2`](https://github.com/kh4f/syncroid/commit/39e1fb2)

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🩹 Fixes
- switch to synchronous commands execution to avoid race condition [`ccef789`](https://github.com/kh4f/syncroid/commit/ccef789)
- avoid leading slash path conversion by using POSIX path methods [`24cd793`](https://github.com/kh4f/syncroid/commit/24cd793)

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⚡ Performance
- optimize file transfer by adding `--sync` to `adb push` [`29a2427`](https://github.com/kh4f/syncroid/commit/29a2427)

##### &emsp;&ensp;&nbsp;&nbsp; [_All Release Commits_](https://github.com/kh4f/syncroid/commits/syncroid@0.1.0) &ensp;•&ensp; _Oct 23, 2025_