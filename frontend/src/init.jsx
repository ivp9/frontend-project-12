import React from 'react';
import ReactDOM from 'react-dom/client';
import i18next from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';

import App from './Components/AppComponent.jsx';
import resources from './locales/ru.js';

const initApp = async () => {
  const i18n = i18next.createInstance();

  await i18n
    .use(initReactI18next)
    .init({ resources, fallbackLng: 'ru' });

  const root = ReactDOM.createRoot(document.getElementById('root'));

  return root.render(
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>,
  );
};

export default initApp;
