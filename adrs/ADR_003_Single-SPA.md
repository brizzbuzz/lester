# Single-SPA

## What is Single-SPA?

Simply put, single-spa is a javascript router for front-end microservices. It allows you to
define a slim entrypoint, and inject other front end modules dynamically through an import map.

## What does this mean in practice?

Essentially, by using single-spa as the entrypoint into Lester, we can enable a _totally_
configurable experience, down to its very core. It also enables plugins to be composable,
allowing for nested, swappable modules 🤯

## Ok show me

The PR that this ADR is associated with adds a bunch of new files, that when launched in concert will
provide a tiny glimpse into what is possible here. At the root, we have three important folders

- `src-tauri`
- `src-root`
- `spa-navbar`

`src-tauri` is where all of the Tauri code lives, responsible for spawning the application that will
host the single-spa process. `src-root` is where our single-spa root lives, and is the entrypoint for all
other modules into Lester. `spa-navbar` is a totally independent single-spa [parcel](https://single-spa.js.org/docs/parcels-overview)
that can be mounted in our application for demo purposes.

To get the demo running, you need to launch a couple processes

1. Head on over into the `src-navbar` folder, run `yarn install` and then and run `yarn start --port 8500`. This will host the navbar component on your localhost
2. Head on over into the `src-root` folder, run `yarn install` and run both `yarn dev:web` and `yarn dev:server`. This will spawn our
   single-spa root application as well as the tauri daemon to view the application.

At this point, you should see a Tauri application has been launched, with the following message:

_@lester/spa-navbar is mounted!_

Congratulations, you have officially run a frontend microservice 🎉
