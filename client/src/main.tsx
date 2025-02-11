import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

import { createTheme, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const theme = createTheme({
  defaultRadius: 6,
  primaryColor: 'yellow',
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <Notifications />
      <App />
    </MantineProvider>
  </StrictMode>
);
