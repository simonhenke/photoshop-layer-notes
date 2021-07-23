# React Demo Plugin

This is a demo project to show how to use React + UXP to build interactive plugin UIs for Adobe Photoshop

## Install dependencies

First, make sure that `yarn` is installed on your system.

```
npm install -g yarn
```

Then, after you ensure that your terminal is in the root of this project, use `yarn` to install the various dependencies needed:

```
yarn install
```

## Build Process

There are two ways to build the plugin for use in Photoshop:

* `yarn watch` will build a development version of the plugin, and recompile everytime you make a change to the source files. The result is placed in `dist` folder. 
* `yarn build` will build a production version of the plugin and place it in `dist` folder. It will not update every time you make a change to the source files.

> You **must** run either `watch` or `build` prior to trying to use within Photoshop!

## Launching in Photoshop

You can use the UXP Developer Tools to load the plugin into Photoshop.

If the plugin hasn't already been added to your workspace in the UXP Developer Tools, you can add it by clicking "Add Plugin...". You can either add the `dist` folder or the `plugin` folder - if you add the plugin folder - then you need to set the relative path to build folder ( 'dist' ) in the Plugin's Load Option.

Once added, you can load it into Photoshop by clicking the ••• button on the corresponding row, and clicking "Load". Switch to Photoshop and you should see the starter panels.

## What this plugin does

This plugin lets the user add notes to specific layers. Selecting a layer will refresh the panel automatically. If no layer is selected, all notes will be listed.

Since this is a demo plugin, the use of it is limited, for example there's no persisting of the data etc.

