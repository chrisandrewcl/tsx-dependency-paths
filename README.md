# tsx dependency path

This is a minimal reproduction of what seems to be an issue when using tsx with workspace dependencies that use alias.

## Overview

This is a monorepo with two packages:

### dependency package

A package with aliased imports (tsconfig paths). Relevant files:

- [src/config](packages/dependency/src/config.ts): a file required within the package
- [src/testWithAlias.ts](packages/dependency/src/testWithAlias.ts): it requires config using an alias
- [src/testWithoutAlias.ts](packages/dependency/src/testWithoutAlias.ts): it requires config using its relative path, without an alias

### main package

This packages uses tsx and depends on the `dependency` package. Relevant files:

- [src/thisFailsWithTsx.ts](packages/main/src/thisFailsWithTsx.ts): it depends on the `dependency` package portion that uses aliases; this can be tested with `pnpm tsxFail`
- [packages/main/src/thisWorksWithTsx.ts](packages/main/src/thisWorksWithTsx.ts): it depends on the `dependency` package portion that does't use aliases; this can be tested with `pnpm tsxOk`
- [packages/main/build.js](packages/main/build.js): an esbuild build script for reference, which works on both cases (with and without aliases); this can be tested with `pnpm build && pnpm builtWithAlias`
