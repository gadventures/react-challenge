import React from 'react';
import { Hotels } from './hotels/Hotels';
import './styles/_global.scss';
import {Layout} from './core/layout';

function App() {
  return (
    <Layout>
      <Hotels />
    </Layout>
  );
}

export default App;
