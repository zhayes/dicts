/* @refresh reload */
import { render } from 'solid-js/web';
import {onMount} from 'solid-js';
import '@/assets/css/style.scss';
import { Router, Route } from "@solidjs/router";
import {setup_translate} from "@/utils/util";

import routes from '@/routes/index';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

onMount(()=>{
  setup_translate();
})

render(() => <Router>
  {
    routes.map(route => (
      <Route path={route.path} component={route.component} />
    ))
  }
</Router>, root!);
