<script>
  import Router from 'svelte-spa-router';

  import Home from './home/Home.svelte';
  import Login from './auth/Login.svelte';
  import NewReport from './report/new_Report.svelte';

  const routes = {
    '/': Home,
    '/login': Login,
    '/reports/new': NewReport
  };
</script>

<Router {routes} />

<style>
</style>
