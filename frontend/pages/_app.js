import React from 'react';
import App from 'next/app';
import Page from '../components/Page';

class FurnicommerceApp extends App {

  render () {

    const { Component } = this.props;

    return (
      <Page>
        <Component />
      </Page>
    )
  }

}

export default FurnicommerceApp;
