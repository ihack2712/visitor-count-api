# visitor-count-api

This is a project built with Deno to track the amount of visitors on different GitHub repositories.

The project relies on [countapi](https://countapi.xyz/).

## Usage

Import the module from deno.land:

```ts
// Imports
import { count } from "https://deno.land/x/vca/mod.ts";
```

Call it:

```ts
const visitorCount = await count("github.com", "octocat", "octocat");
```
