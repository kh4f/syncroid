# Changelog


## &ensp; [` 📦 syncroid@0.5.0  `](https://github.com/kh4f/syncroid/compare/syncroid@0.4.0...syncroid@0.5.0)

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✨ Features
- **core**: export types from `@/types` in package entrypoint [`1cb253c`](https://github.com/kh4f/syncroid/commit/1cb253c)

##### &emsp;&ensp;&nbsp;&nbsp; [_All Release Commits_](https://github.com/kh4f/syncroid/compare/syncroid@0.4.0...syncroid@0.5.0) &ensp;•&ensp; _Oct 30, 2025_


## &ensp; [` 📦 syncroid@0.4.0  `](https://github.com/kh4f/syncroid/compare/syncroid@0.3.0...syncroid@0.4.0)

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⚠️ BREAKING CHANGES
- Removed support for `verbose` value in `logLevel` config property. <sup>[1]</sup>
- The configuration option `root` has been renamed to `source`. <sup>[2]</sup>

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✨ Features
- **syncroid**: 
  - add logging for sync progress [`ab7c16f`](https://github.com/kh4f/syncroid/commit/ab7c16f)
  - support `include`/`exclude` pattern-based file filtering [`d003c72`](https://github.com/kh4f/syncroid/commit/d003c72)

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🩹 Fixes
- **syncroid**: prevent error if destination directory does not exist [`4b05d8f`](https://github.com/kh4f/syncroid/commit/4b05d8f)

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🚜 Refactoring
- **utils**: simplify logging and error handling [`98d5ad3`](https://github.com/kh4f/syncroid/commit/98d5ad3) ⚠️<sup>[1]</sup>
- **syncroid**: rename `root` option to `source` [`8127f4e`](https://github.com/kh4f/syncroid/commit/8127f4e) ⚠️<sup>[2]</sup>

##### &emsp;&ensp;&nbsp;&nbsp; [_All Release Commits_](https://github.com/kh4f/syncroid/compare/syncroid@0.3.0...syncroid@0.4.0) &ensp;•&ensp; _Oct 30, 2025_


## &ensp; [` 📦 syncroid@0.3.0  `](https://github.com/kh4f/syncroid/compare/syncroid@0.2.0...syncroid@0.3.0)

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⚠️ BREAKING CHANGES
- The `include`, `exclude`, and `aggregatePaths` options have been removed. Syncroid now performs a full directory sync. <sup>[1]</sup>
- The default destination path for syncing files has been changed to `/storage/emulated/0/documents/syncroid`. <sup>[2]</sup>

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✨ Features
- **syncroid**: 
  - remove files from destination that no longer exist in source [`eb84453`](https://github.com/kh4f/syncroid/commit/eb84453)
  - abort sync on runner failure [`687bf1d`](https://github.com/kh4f/syncroid/commit/687bf1d)

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⚡ Performance
- **syncroid**: batch directory removals into single `adb` call [`7d563da`](https://github.com/kh4f/syncroid/commit/7d563da)

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🚜 Refactoring
- **syncroid**: remove granular file selection, always mirror all files [`a6d0dc9`](https://github.com/kh4f/syncroid/commit/a6d0dc9) ⚠️<sup>[1]</sup>
- **defaults**: change default `dest` path to `/storage/emulated/0/documents/syncroid` [`d21639b`](https://github.com/kh4f/syncroid/commit/d21639b) ⚠️<sup>[2]</sup>

##### &emsp;&ensp;&nbsp;&nbsp; [_All Release Commits_](https://github.com/kh4f/syncroid/compare/syncroid@0.2.0...syncroid@0.3.0) &ensp;•&ensp; _Oct 30, 2025_


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
- **config**: rename `include`/`exclude` to `includePattern`/`excludePatterns` [`c5b4e32`](https://github.com/kh4f/syncroid/commit/c5b4e32) ⚠️<sup>[1]</sup>
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