# storybook-addon-consumed

[![Version](https://img.shields.io/npm/v/storybook-addon-consumed.svg)](https://www.npmjs.com/package/storybook-addon-consumed)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=frubesss_storybook-addon-consumed&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=frubesss_storybook-addon-consumed)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=frubesss_storybook-addon-consumed&metric=security_rating)](https://sonarcloud.io/dashboard?id=frubesss_storybook-addon-consumed)

> Storybook addon to view where stories are consumed.

## Install

```sh
npm install --save-dev storybook-addon-consumed

or

yarn add -D storybook-addon-consumed
```

Add the components import path that is used in the consuming reposotories

```javascript
.addParameters({
    componentImportPath:
      'import MyComponent from org/example'
  });
```

## Example

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
