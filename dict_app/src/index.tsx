/* @refresh reload */
import { render } from 'solid-js/web';
import {onMount} from 'solid-js';
import '@/assets/css/style.scss';
import { Router, Route } from "@solidjs/router";
import {setup_translate} from "@/utils/util";
import Layout from '@/components/Layout';
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

render(() => <Layout>
  <Router>
    {
      routes.map(route => (
        <Route path={route.path} component={route.component} />
      ))
    }
  </Router>

  <div class="text-center text-sm text-gray-500 p-4 leading-6">
    <div>{ new Date().getFullYear() <= 2024 ? 2024 : `2024 - ${new Date().getFullYear()}`}</div>
    <a href="https://beian.miit.gov.cn" target="_blank" class="text-blue-500 text-xs">赣ICP备2024046423号</a>
  </div>
</Layout>, root!);
