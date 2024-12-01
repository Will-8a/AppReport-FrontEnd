<script>
  import Router from 'svelte-spa-router';

  import Home from './home/Home.svelte';
  import Login from './auth/Login.svelte';
  import NewUser from './user/new_user.svelte';
  import NewStudent from './user/new_student.svelte';
  import ReportsList from './report/report_list.svelte';
  import NewReport from './report/new_Report.svelte';
  import Report from './report/report.svelte';

  const routes = {
    '/': Home,
    '/login': Login,
    '/tutors/new': NewUser,
    '/students/new': NewStudent,
    '/reports/p/:page_number': ReportsList,
    '/reports/new': NewReport,
    '/reports/:report_id': Report
  };

</script>

<Router {routes} />

<style>
</style>
