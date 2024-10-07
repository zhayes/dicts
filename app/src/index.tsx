/* @refresh reload */
import { render } from 'solid-js/web';
import '@/assets/css/style.scss';
import { Router, Route } from "@solidjs/router";

import routes from '@/routes/index';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => <Router>
  {
    routes.map(route => (
      <Route path={route.path} component={route.component} />
    ))
  }
</Router>, root!);
