// import { registerApplication, start } from "single-spa";
// import {
//   constructApplications,
//   constructRoutes,
//   constructLayoutEngine,
// } from "single-spa-layout";
//
// const routes = constructRoutes(
//   document.querySelector("#single-spa-layout") as HTMLTemplateElement
// );
// const applications = constructApplications({
//   routes,
//   loadApp({ name }) {
//     return System.import(name);
//   },
// });
// const layoutEngine = constructLayoutEngine({ routes, applications });
//
// applications.forEach(registerApplication);
// layoutEngine.activate();
// start();

import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@lester/spa-navbar",
  app: () => System.import("@lester/spa-navbar"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
