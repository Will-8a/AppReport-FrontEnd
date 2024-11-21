<script>
  import Router from 'svelte-spa-router';

  import Home from './home/Home.svelte';
  import Login from './auth/Login.svelte';

  const routes = {
    '/': Home,
    '/login': Login
  };
</script>

<Router {routes} />

<style>
</style>
