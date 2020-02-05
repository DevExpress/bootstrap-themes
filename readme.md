<a href="https://DevExpress.com/">
    <img src="https://community.devexpress.com/blogs/aspnet/DevExpress-Powered-Color-Large.png" alt="DevExpress logo" title="DevExpress" align="right" />
</a>

Free DevExpress Bootstrap v4 Themes
=====================================

This repository contains free and open source themes that were created for websites built using Bootstrap v4 or later.

## Table of Contents
- [What's Included](#whats-included)
    - [DevExpress Blazing Berry](#devexpress-blazing-berry)
    - [DevExpress Office White](#devexpress-office-white)
    - [DevExpress Purple](#devexpress-purple)
- [Getting Started](#getting-started)
- [Customization](#customization)
- [Copyright and License](#copyright-and-license)
- [More Information](#more-information)


## What's Included

### DevExpress Blazing Berry

![Blazing Berry](/media/Blazing_Berry.png)

[Open CSS File](dist/blazing-berry/bootstrap.css) | [Open Minimized CSS File](dist/blazing-berry/bootstrap.min.css)  |  [View Demo](https://devexpress.github.io/bootstrap-themes/index.html?theme=blazing-berry)

### DevExpress Office White

![Office White](/media/Office_White.png)

[Open CSS File](dist/office-white/bootstrap.css) | [Open Minimized CSS File](dist/office-white/bootstrap.min.css) | [View Demo](https://devexpress.github.io/bootstrap-themes/index.html?theme=office-white)


### DevExpress Purple

![Purple](/media/Purple.png)

[Open CSS File](dist/purple/bootstrap.css) | [Open Minimized CSS File](dist/purple/bootstrap.min.css) | [View Demo](https://devexpress.github.io/bootstrap-themes/index.html?theme=purple)


## Getting Started

The [/dist/](dist) folder includes nested folders whose names correspond to theme names: [blazing-berry](dist/blazing-berry), [office-white](dist/office-white), and [purple](dist/purple). Each nested folder contains the following theme-related files:

1) Theme stylesheets that you can apply to your application. 
* **bootstrap.css** - a ready-to-use CSS file.
* **bootstrap.min.css** - a ready-to-use minimized CSS file.

2) Theme source files that you can [customize](#customization) to create your own theme.
* **_variables.scss** - a file with [variables](https://getbootstrap.com/docs/4.4/getting-started/theming/#variable-defaults).
* **_styles.scss** - a file with custom CSS rules.
* **{theme_name}.scss** - a theme file that imports variables, the default Bootstrap theme, and custom CSS rules. Do not change the *import* order is this file.

## Customization

Do the following to customize the theme source files and compile the resulting theme:
1. Clone or download this repository.
1. Open the **dist/{theme_name}/_variables.scss** file and modify [variable values](https://getbootstrap.com/docs/4.4/getting-started/theming/#variable-defaults). You can also add your own variables.
1. Open the **dist/{theme_name}/_styles.scss** file. Modify CSS rules or create custom rules. You can use a browser’s Developer Tools to [inspect UI elements](https://www.devexpress.com/Support/Center/Question/Details/K18570/how-to-inspect-css-rules).
1. Install [Node.js and npm](https://nodejs.org/en/download/) if they do not exist on your machine.
1. Go to the folder where the **package.json** file is located. Open the console window and run `npm install` to install all the dependencies.
1. Execute the  `npm i --global gulp` command to install the [gulp](https://gulpjs.com/) globally.
3. Run `gulp` to compile all themes once or `gulp watch` to turn on the watcher that recompiles themes as soon as you change source SCSS files. 

This creates two new CSS files (**bootstrap.css** and **bootstrap.min.css**) in each theme's folder or overwrites the existing files according to your changes.


## Copyright and License

Copyright © 2018-2020 [Developer Express Inc.](https://devexpress.com/) All trademarks or registered trademarks are property of their respective owners. 
This project code is released under the [MIT License](LICENSE).

## More Information

Read this [blog post](https://community.devexpress.com/blogs/aspnet/archive/2018/08/15/free-devexpress-bootstrap-4-themes.aspx) for more information about this repository.
