import React, { Component } from 'react';
import PropTypes from 'prop-types';

//const Link = ({ title, url }) => <a href={url}>{title}</a>;

class Link extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  handleClick = () => {
    alert('Link was clicked');
    this.setState({
      clicked: true
    });
  }

  render() {
    const { title, url } = this.props;

    return <a href={url} onClick={this.handleClick}>{title}</a>;
  }
}

Link.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Link;
