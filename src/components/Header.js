import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className='header'>
        <i class="fa fa-bars" aria-hidden="true"></i>
          <img src='https://cdn.dribbble.com/assets/logo-small-2x-9fe74d2ad7b25fba0f50168523c15fda4c35534f9ea0b1011179275383035439.png' alt='Dribbble logo' />
          <i class="fa fa-home" aria-hidden="true"></i>
        </div>
      </nav>
    );
  }
}

export default Header;
