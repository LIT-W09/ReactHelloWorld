
//import { add, subtract } from './my-module.js';

//const result = subtract(10, 520);
//console.log(result);

//import foo, { add, subtract } from './my-module.js';

//console.log(foo(10, 50));

import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';


import MyFirstComponent from './MyFirstComponent';
import Reversed from './Reversed';
import NumberLister from './NumberLister';

// ReactDom.render(<MyFirstComponent />, document.getElementById('root'));

// ReactDom.render(<Reversed />, document.getElementById('root'));
ReactDom.render(<NumberLister />, document.getElementById('root'));



