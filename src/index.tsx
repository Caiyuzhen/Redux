import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
	//🔥🔥引入 store 数据，包裹根组件
	<Provider store={ store }>
  		{/* <React.StrictMode> */}
	    	<App />
  		{/* </React.StrictMode> */}
  </Provider>
);

