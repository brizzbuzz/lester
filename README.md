# Setup

1. Install [NVM](https://github.com/nvm-sh/nvm#installing-and-updating)
2. Run `nvm install 10.13.0`
3. Install AVN

```
nvm exec 10.13.0 npm install -g avn avn-nvm avn-n
nvm exec 10.13.0 avn setup
```
4. Run `nvm install 15.10.0`
5. Install [Tauri](https://tauri.studio/en/docs/getting-started/intro#setting-up-your-environment)
6. Clone repo
7. Run `yarn dev` and `yarn tauri dev` to launch the react and tauri development environments 
