import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from "react-router-dom"

import { QueryClient, QueryClientProvider } from 'react-query';

import {UserContextProvider} from './context/UserContext';
import {PortfolioContextProvider} from './context/PortfolioContext';
import {IntlProvider} from "react-intl";

import messages_fr from "./translations/fr.json";
import messages_en from "./translations/en.json";

const messages = {
  'fr': {messages_fr},
  'en': {messages_en}
};

const locale = navigator.language.substring(0,2);

const queryClient = new QueryClient();
   
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <PortfolioContextProvider>
          <IntlProvider messages={messages[locale]} locale={locale} defaultLocale={'fr'} >
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </IntlProvider>
        </PortfolioContextProvider>
      </UserContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
