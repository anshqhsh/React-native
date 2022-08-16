import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';

import {Provider} from 'react-redux';
import AppInner from './AppInner';
import store from './src/store';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppInner />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
