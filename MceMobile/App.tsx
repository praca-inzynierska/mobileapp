import React from 'react';
import { Provider } from 'mobx-react'
import RootNavigator from './src/navigation'

class App extends React.Component<{}, {}> {
  
  componentDidMount() {
    //stores init
  }

  render() {
    return (
      <Provider>
        <RootNavigator />
      </Provider>
    );
  }
  
};

export default App;
