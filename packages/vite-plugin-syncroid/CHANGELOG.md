# Changelog


## &ensp; [` 📦 vite-plugin-syncroid@0.3.0  `](https://github.com/kh4f/syncroid/compare/vite-plugin-syncroid@0.2.0...vite-plugin-syncroid@0.3.0)

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✨ Features
- **core**: re-export `UserConfig` type from `syncroid` [`eee8c6f`](https://github.com/kh4f/syncroid/commit/eee8c6f)

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🧩 Dependencies
- **peer-deps**: relax `vite` peer dependency to `^7.1` [`5f1a513`](https://github.com/kh4f/syncroid/commit/5f1a513)

##### &emsp;&ensp;&nbsp;&nbsp; [_All Release Commits_](https://github.com/kh4f/syncroid/compare/vite-plugin-syncroid@0.2.0...vite-plugin-syncroid@0.3.0) &ensp;•&ensp; _Oct 31, 2025_


## &ensp; [` 📦 vite-plugin-syncroid@0.2.0  `](https://github.com/kh4f/syncroid/compare/vite-plugin-syncroid@0.1.0...vite-plugin-syncroid@0.2.0)

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⚠️ BREAKING CHANGES
- The plugin parameters have been updated to match the new `syncroid` signature. <sup>[1]</sup>

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🚜 Refactoring
- **plugin**: 
  - replace `args` parameter with direct `UserConfig` usage [`7108248`](https://github.com/kh4f/syncroid/commit/7108248)
  - update function signature for `syncroid` v0.4.0 [`e053cb2`](https://github.com/kh4f/syncroid/commit/e053cb2) ⚠️<sup>[1]</sup>
  - move `type` outside import braces to prevent extra `"vite"` import in bundle [`7c14af7`](https://github.com/kh4f/syncroid/commit/7c14af7)

##### &emsp;&ensp;&nbsp;&nbsp; [_All Release Commits_](https://github.com/kh4f/syncroid/compare/vite-plugin-syncroid@0.1.0...vite-plugin-syncroid@0.2.0) &ensp;•&ensp; _Oct 30, 2025_


## &ensp; [` 📦 vite-plugin-syncroid@0.1.0  `](https://github.com/kh4f/syncroid/commits/vite-plugin-syncroid@0.1.0)

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✨ Features
- **core**: add initial Vite plugin implementation with sync on `closeBundle` [`28345a0`](https://github.com/kh4f/syncroid/commit/28345a0)

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🧩 Dependencies
- **deps**: add `vite` to `devDependencies` and `peerDependencies` [`8127a14`](https://github.com/kh4f/syncroid/commit/8127a14)

##### &emsp;&ensp;&nbsp;&nbsp; [_All Release Commits_](https://github.com/kh4f/syncroid/commits/vite-plugin-syncroid@0.1.0) &ensp;•&ensp; _Oct 23, 2025_