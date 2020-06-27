# storybook-addon-consumed

[![Version](https://img.shields.io/npm/v/storybook-addon-consumed.svg)](https://www.npmjs.com/package/storybook-addon-consumed)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=frubesss_storybook-addon-consumed&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=frubesss_storybook-addon-consumed)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=frubesss_storybook-addon-consumed&metric=security_rating)](https://sonarcloud.io/dashboard?id=frubesss_storybook-addon-consumed)

> [Storybook](https://storybook.js.org) addon to view where stories are consumed.

Live Demo

Example Repository

## Setup

### Install

```sh
npm install --save-dev storybook-addon-consumed

or

yarn add -D storybook-addon-consumed
```

### Register addon

Add the addon to your `addon.js` file found in the .storybook directoy (create the directory and file in the root of the project if needed).

```javascript
import 'storybook-addon-consumed/register'
```

Add the components import path that is used in the consuming reposotories

### Add parameters to story

```javascript
.addParameters({
    componentImportPath:
      'import MyComponent from org/example'
  });
```

#### Full Example

```javascript
import { storiesOf } from '@storybook/react';
import { MyComponent } from './MyComponent';

storiesOf('Components', module)
   .addParameters({
    componentImportPath:
      'import MyComponent from org/example',
  })
  .add('MyComponent', () => <MyComponent />);
```

### Setup Github Token

### Navigate to Consumed Tab

Warning about client side token

## Author

👤 Craig Robertson

* Website: [craigrobertson.me](https://craigrobertson.me)
* Github: [@frubesss](https://github.com/frubesss)
* Email: robetson.cra@gmail.com

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/frubesss/storybook-addon-consumed/issues). 

## Show your support

Give a ⭐️ if this project helped you!
