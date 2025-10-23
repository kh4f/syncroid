# Changelog


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