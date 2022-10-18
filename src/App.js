import React, {FC} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Provider as ReduxProvider} from 'react-redux';
import {combineReducers, createStore} from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import {SpreadoSetupProvider} from 'spreado';
import {
  spreadoReduxReducerPack,
  SpreadoSetupForReduxReactQuery
} from 'spreado/for-redux-react-query';
import './App.css';
import { ComponentA } from './ComponentA';

const store = createStore(combineReducers(spreadoReduxReducerPack), composeWithDevTools());
const queryClient = new QueryClient();
const spreadoSetup = new SpreadoSetupForReduxReactQuery({store, queryClient});

function App() {
  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <SpreadoSetupProvider setup={spreadoSetup}>
          <ComponentA />
        </SpreadoSetupProvider>
      </QueryClientProvider>
    </ReduxProvider>
  );
}

export default App;
