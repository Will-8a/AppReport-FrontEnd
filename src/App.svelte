<script>
  import Router from 'svelte-spa-router';

  import Login from './auth/Login.svelte';

  const routes = {
    '/login': Login
  };
</script>

<Router {routes} />

<style>
</style>
