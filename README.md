<!-- # ASTAR CORE UI COMPONENTS
## Getting Started
Before starting, it's mandatory to create a .yarnrc file or update with new one on top directory of the project

```registry "http://10.154.4.36:30012/repository/astar-core-npm-group/"```

After editing `.yarnrc` file, specific project dependency should be added via `npm`

```npm install astar-core-ui-components --save```

or `yarn`

```yarn add astar-core-ui-components```

## Usage

Here is a quick example to get started:

```
import React from 'react';
import { LoginView } from 'astar-core-ui-components';

function App(props) {
  return (
    <LoginView {...props}/>
  );
}
```

## Contributing
After implementation, first thing to do is testing code quality and coverage with:

```npm run test```

If the code passed unit tests, create a pull request to <b>master</b> branch, then build it up with:

``` npm build ```

That will generate ready-to-deploy code bundles into a `build` folder. Before publishing, it's needed to login npm repository with:

``` npm login --registry=http://10.154.4.36:30012/repository/astar-core-npm-registry/ ```

Then in order to deploy new package, just execute :

``` npm publish ```

#### How to Proceed?

Rollup.js builds the project and generates `index.js` and `index.es.js` bundles which are expected from `npm` as seen first 4 lines of `package.json` :

```
...
  "name": "astar-core-ui-components",
  "version": "1.0.1",
  "main": "build/index.js",
  "module": "build/index.es.js",
...
``` -->
