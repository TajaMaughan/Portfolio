import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Oleo script swash caps:700', 'cursive']
  }
});

WebFont.load({
    google: {
      families: ['ZCOOL Xiaowei', 'serif']
    }
  });


ReactDOM.render(<App />, document.getElementById('root'));