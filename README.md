# Uche's jsonresume Theme

This is the my own custom theme to create a resume with [JSON Resume](http://jsonresume.org/).
It is based on [Bootstrap CSS](https://getbootstrap.com/) and features a printable 2-column layout.

[See example here](https://umennel.github.io/jsonresume-theme-umennel/) (don't forget to check out the print view)

**Note:** Most browsers hide background colors in the print view by default. You need to enable background colors to generate a fully featured print view.

## Getting started

To get started, make sure you installed [node.js](http://howtonode.org/how-to-install-nodejs) and [npm](http://howtonode.org/introduction-to-npm).
Node version should be >= 20.

1. Clone this repository
```bash
git clone https://github.com/umennel/jsonresume-theme-umennel
```
2. Clone the `resumed` local theme example template with [degit](https://github.com/Rich-Harris/degit)
```bash
npx degit rbardini/resumed/examples/with-local-theme
```
3. Copy or link the content of this repo as a subdirectory
4. Modify the file package.json in the local theme example template to look like this:
```json
{
  "private": true,
  "type": "module",
  "scripts": {
    "init": "resumed init",
    "start": "resumed --theme jsonresume-theme-umennel"
  },
  "dependencies": {
    "jsonresume-theme-umennel": "file:./jsonresume-theme-umennel",
    "resumed": "^3.0.0"
  }
}
```
5. Install dependencies, create and render resume:
```bash
npm install
npm run init
npm start
```

## Customization

### Content

To build your own resume, create a `resume.json` file in the current folder and follow the [json resume schema](https://jsonresume.org/schema/).

**Note:** The theme uses [Font Awesome](https://fontawesome.com/) icons to generate the network icons in the contact section. If you don't see an icon displayed, check if there is a [Font Awesome](https://fontawesome.com/) icon available for your specific network.

I addition to the the json resume schema, this theme also supports:

  - adding `keywords` to a `work` item

### Layout/Style

The easiest way to customize the layout and style of this theme is by modifying `style.css`. You may also want to adapt `print.css` to achieve a specific print style. The print style is very useful for PDF generation as well.

## Contribute

Feel free to fork the project and submit pull requests or [open an issue](https://github.com/umennel/jsonresume-theme-umennel/issues/new) if you find something not working for you.

## License

Available under [GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html).
