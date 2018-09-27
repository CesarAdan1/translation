import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Header from './components/Header';
import Shots from './components/Shots';

import './App.css';

import { name, year } from './data/author';

import { translate, Trans } from 'react-i18next';

const styles = {
  textAlign: 'center',
  margin: '35px 0',
  fontSize: '13px',
  color: '#AAA'
};

class App extends Component {
  changeLanguage = e => {
    this.props.i18n.changeLanguage(e.target.textContent.toLowerCase());
  };

  render() {
    return (
      <div>
        <Header />
        <div className='lang'>
          <button className='btn' onClick={ this.changeLanguage }>ES</button>
          <button className='btn' onClick={ this.changeLanguage }>EN</button>
        </div>
        <nav className='filters'>
          <ul>
            <li>
              <Link to="/All">
                <Trans>All</Trans>
                <i className='fa fa-chevron-down' />
              </Link>
            </li>
            <li>
              <Link to ="/Popular">
                <Trans>Popular</Trans>
                <i className='fa fa-chevron-down' />
              </Link>
            </li>
            <li>
              <Link to="/Recent">
                <Trans>Recent</Trans>
                <i className='fa fa-chevron-down' />
              </Link>
            </li>
            <li>
              <Link to="/Debut">
                <Trans>Debut</Trans>
                <i className='fa fa-chevron-down' />
              </Link>
            </li>
          </ul>
        </nav>
        <Shots />
        <p style={ styles }>Written by { name }. { year } .</p>
      </div>
    );
  }
}

export default translate('translations')(App);
