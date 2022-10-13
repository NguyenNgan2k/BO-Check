import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';

const App = (props) => <Container>{props.children}</Container>;

App.propTypes = {
  children: PropTypes.node,
};

export default App;
