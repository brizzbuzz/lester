# What does an MVP for Lester entail

- Single Deployable Image
- Lester Core
- Plugin API

### Single Deployable Image

Leveraging Tauri, we will wrap a statically generated website.  The webapp itself will be generated as a static distribution folder by [Next.JS](https://nextjs.org)

The web client is intended to be as light weight as possible, allowing for maximum responsibility to be shifted to the Rust backend. 

### Lester Core 

This is the Rust backend that will power Lester.  Here we should handle everything and anything to do with system integration.  Lester Core should also leverage the Tauri CLI builder, allowing for 
convenient hooks into the application from an inutuitive set of CLI operations.

### Plugin API

The plugin API is the crux of the problem that Lester is trying to solve.  Lester should not be overly opinionated on the tools that developers should be using, but instead offer a convenient medium for 
engineers to handle the variety of notifications, alerts, and information that they receive on a day to day basis.  By building an interface that allows for maximal (yet safe) flexibility, we can 
allow Lester to serve as the foundation upon which a variety of API driven plugins can be developed.
