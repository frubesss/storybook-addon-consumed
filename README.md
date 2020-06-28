# storybook-addon-consumed

[![Version](https://img.shields.io/npm/v/storybook-addon-consumed.svg)](https://www.npmjs.com/package/storybook-addon-consumed)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=frubesss_storybook-addon-consumed&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=frubesss_storybook-addon-consumed)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=frubesss_storybook-addon-consumed&metric=security_rating)](https://sonarcloud.io/dashboard?id=frubesss_storybook-addon-consumed)

> [Storybook](https://storybook.js.org) addon to view where stories are consumed in Github Repositories.

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

### Add Github Personal Access Token

Create a .env file in the root of your application and add your Github Personal Access Token that can be created [here](https://github.com/settings/tokens/new), with a scope of repo.

```env
GITHUB_SEARCH_API_TOKEN=***Created Personal Access Token****
```

### Creat Middleware

Custom middleware is needed to protect the Github Personal Access Token from the outside world.

### Navigate to Consumed Tab

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
