<a href="https://DevExpress.com/">
    <img src="https://community.devexpress.com/blogs/aspnet/DevExpress-Powered-Color-Large.png" alt="DevExpress logo" title="DevExpress" align="right" />
</a>

Free DevExpress Bootstrap v4 / v5 Themes
=====================================

This repository contains free and open source themes that were created for websites built using Bootstrap v4 and v5.

> **Note**  
> Built-in themes for DevExpress Blazor components are now available as a **DevExpress.Blazor** dependency (v22.1+). Refer to the following topic for information: [Applying Devexpress Blazor Themes](https://docs.devexpress.com/Blazor/401523/common-concepts/customize-appearance/themes).

## Table of Contents
- [What's Included](#whats-included)
    - [DevExpress Blazing Berry](#devexpress-blazing-berry)
    - [DevExpress Blazing Dark](#devexpress-blazing-dark)
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

### DevExpress Blazing Dark

![Blazing Berry](/media/Blazing_Dark.png)

[Open CSS File](dist/blazing-dark/bootstrap.css) | [Open Minimized CSS File](dist/blazing-dark/bootstrap.min.css)  |  [View Demo](https://devexpress.github.io/bootstrap-themes/index.html?theme=blazing-dark)

### DevExpress Office White

![Office White](/media/Office_White.png)

[Open CSS File](dist/office-white/bootstrap.css) | [Open Minimized CSS File](dist/office-white/bootstrap.min.css) | [View Demo](https://devexpress.github.io/bootstrap-themes/index.html?theme=office-white)


### DevExpress Purple

![Purple](/media/Purple.png)

[Open CSS File](dist/purple/bootstrap.css) | [Open Minimized CSS File](dist/purple/bootstrap.min.css) | [View Demo](https://devexpress.github.io/bootstrap-themes/index.html?theme=purple)


## Getting Started

The [/dist/](dist) and [/dist.v5/](dist.v5) folders include nested folders whose names correspond to theme names: [blazing-berry](dist/blazing-berry), [blazing-dark](dist/blazing-dark), [office-white](dist/office-white), and [purple](dist/purple). Each nested folder contains the following theme-related files:

1) Theme stylesheets that you can apply to your application. 
* **bootstrap.css** - a ready-to-use CSS file.
* **bootstrap.min.css** - a ready-to-use minimized CSS file.

2) Theme source files that you can [customize](#customization) to create your own theme.
* **_variables.scss** - a file with [v4](https://getbootstrap.com/docs/4.6/getting-started/theming/#variable-defaults) / [v5](https://getbootstrap.com/docs/5.0/customize/sass/#variable-defaults) variables.
* **_styles.scss** - a file with custom CSS rules.
* **{theme_name}.scss** - a theme file that imports variables, the default Bootstrap theme, and custom CSS rules. Do not change the *import* order is this file.

## Customization

Do the following to customize the theme source files and compile the resulting theme:
1. Clone or download this repository.
1. Go to the **dist/{theme_name}** or **dist.v5/{theme_name}** folder. Open the **_variables.scss** file and modify [v4](https://getbootstrap.com/docs/4.6/getting-started/theming/#variable-defaults) / [v5](https://getbootstrap.com/docs/5.0/customize/sass/#variable-defaults) variable values. You can also add your own variables.
1. In the same folder, open the **_styles.scss** file. Modify CSS rules or create custom rules. You can use a browser’s Developer Tools to [inspect UI elements](https://www.devexpress.com/Support/Center/Question/Details/K18570/how-to-inspect-css-rules).
1. Install [Node.js and npm](https://nodejs.org/en/download/) if they do not exist on your machine.
1. Go to the folder where the **package.json** file is located. Open the console window and run `npm install` to install all the dependencies.
1. Execute the  `npm i --global gulp` command to install the [gulp](https://gulpjs.com/) globally.
3. Run `gulp` to compile all themes once or `gulp watch` to turn on the watcher that recompiles themes as soon as you change source SCSS files. 

This overwrites the **bootstrap.css** and **bootstrap.min.css** files for each theme in the **dist** and **dist.v5** folders.

## Copyright and License

Copyright © 2018-2022 [Developer Express Inc.](https://devexpress.com/) All trademarks or registered trademarks are property of their respective owners. 
This project code is released under the [MIT License](LICENSE).

## More Information

Read this [blog post](https://community.devexpress.com/blogs/aspnet/archive/2018/08/15/free-devexpress-bootstrap-4-themes.aspx) for more information about this repository.

## Support and Feedback

Welcome to our [Support Center](https://supportcenter.devexpress.com/ticket/create) if you want to ask questions, share ideas, or report an issue.
