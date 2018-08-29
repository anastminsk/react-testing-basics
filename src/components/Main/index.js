import React, { Fragment } from 'react';
import App from '../App/App.js';
import Link from '../Link';
import Foo from '../Foo';

const Main = () => {
  return (
    <Fragment>
      <App />
      <Link title="TUT.BY" url="https://www.tut.by/" />
      <Foo />
    </Fragment>
  );
};

export default Main;
