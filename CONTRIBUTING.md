# Food Turtle — Commit Message Convention

We use Conventional Commits with these prefixes:

| Prefix      | When to use                                           | Example                                      |
|-------------|-------------------------------------------------------|----------------------------------------------|
| `feat:`     | A new feature                                         | `feat: add item bagging confirmation`       |
| `fix:`      | A bug fix                                             | `fix: prevent checkout with empty order`     |
| `docs:`     | Documentation only changes                            | `docs: update README with setup steps`       |
| `style:`    | Formatting, missing semicolons, etc (no logic change) | `style: format with Prettier`                |
| `refactor:` | Code change that neither fixes a bug nor adds a feature | `refactor: extract ApiAdapter methods`    |
| `perf:`     | Improves performance                                  | `perf: reduce SQLite query time`             |
| `test:`     | Adding or fixing tests                                | `test: add validation for UPC length`        |
| `chore:`    | Tooling, config, setup, maintenance                   | `chore: add .env.example files`              |
| `ci:`       | CI/CD changes                                         | `ci: add GitHub Actions workflow`            |
| `build:`    | Changes to build system or dependencies               | `build: upgrade React to 18.3`               |
| `revert:`   | Reverts a previous commit                             | `revert: feat: bad payment flow`             |

### Rules
- Lowercase after the colon
- No period at the end
- Keep it short but descriptive

This makes our Git history beautiful, searchable, and automatically generates changelogs later.

