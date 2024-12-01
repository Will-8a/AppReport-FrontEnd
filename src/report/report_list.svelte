<script>
  import AppLogo from '../assets/logo.svg';
  import { onMount }  from 'svelte';

  let { params } = $props();
  let current_page_number = $state(parseInt(params.page_number));
  let weekly_reports = $state([]);

  const user_info = JSON.parse(sessionStorage.getItem('user_info'));
  const user_token = sessionStorage.getItem('token');

  const api_server_hostname = 'https://appreport.pythonanywhere.com'


  const change_location = (location) => {
    window.location.href = location;
  }

  if (Object.is(user_info, null)){
    change_location('/#/login');
  }

  const fetch_reports_list = async (current_page_number) => {
    let endpoint = api_server_hostname + '/api/weekly_reports';
    let student_id = null
    let tutor_id = null

    if (user_info.user_type === 3){
      const student_info = JSON.parse(sessionStorage.getItem('student_info'))
      student_id = student_info.id
    }
    else if (user_info.user_type === 2){
      tutor_id = user_info.id;
    }

    const query_params = new URLSearchParams({
      page: current_page_number,
      tutor_id: tutor_id,
      student_id: student_id  // i don't think that this is right
    })

    // set url with params
    const url_with_params = `${endpoint}?${query_params.toString()}`;

    const requests = new Request(url_with_params, {
      method: 'GET',
      headers: new Headers({
        'Content-Type':'application/json',
        'token': user_token
      })
    });

    try{
      const response = await fetch(requests);

      const data = await response.json()
      if (typeof data.message === typeof 'string'){
        weekly_reports = {};
      }
      else{
        weekly_reports = data.message;
      }
    }
    catch(error){
      console.error(error);
    }
  }

  onMount(() => fetch_reports_list(current_page_number))

  // update the url without recharging
  const update_url = (page_number) => {
    history.pushState(null, '', `/#/reports/p/${page_number}`);
  }

  const next_page = (event) => {
    event.preventDefault();

    current_page_number += 1;
    update_url(current_page_number);
    fetch_reports_list(current_page_number);
  }

  const previous_page = (event) => {
    event.preventDefault();

    if (current_page_number > 1) {
      current_page_number -= 1;
      update_url(current_page_number);
      fetch_reports_list(current_page_number);
    }
  }

  const logout = (event) => {
    event.preventDefault();

    sessionStorage.clear();
    change_location('/#/login');
  }

  const read_report = (report_id) => {
    change_location(`/#/reports/${report_id}`);
  }
</script>

<nav>
  <input type='checkbox' id='check'/>

  <!-- burger icon -->
  <label for='check' class='checkbtn'>
    <div class='burger'></div>
    <div class='burger'></div>
    <div class='burger'></div>
  </label>

  <img src={AppLogo} alt='logo' class='logo' />

  <ul>
    <li><a href="">Reportes</a></li>
    <li><a href="">Contacto</a></li>
    <li>
      <a
        href='/#/login'
        role='button'
        onclick={logout}
      >
        Cerrar sesión
      </a>
    </li>
  </ul>
</nav>

<section>
  <div class="hscroll">
    <table>
      <thead>
        <tr class="cabecera">
          <th>ID</th>
          <th>N° Reporte</th>
          {#if user_info.user_type !== 3}
          <th>Cedula estudiante</th>
          <th>Nombre estudiante</th>
          {/if}
          <th>Carrera</th>
          <th>Aprobación tutor</th>
          <th>Aprobación Coordinador</th>
          <!-- Read report button -->
          <th></th>
        </tr>
      </thead>
      <tbody>
      {#each weekly_reports as weekly_report}
        <tr>
          <td>{weekly_report.report_id}</td>
          <td>{weekly_report.week_number}</td>
          {#if user_info.user_type !== 3}
          <td>{weekly_report.username}</td>
          <td>{weekly_report.first_name + ' ' + weekly_report.last_name}</td>
          {/if}
          <td></td>
          {#if weekly_report.coordinator_approval === 0}
          <td>Sin aprobar</td>
          {:else if weekly_report.coordinator_approval === 1}
          <td>Aprobado</td>
          {:else}
          <td>Desaprobado</td>
          {/if}
          {#if weekly_report.tutor_approval === 0}
          <td>Sin aprobar</td>
          {:else if weekly_report.tutor_approval === 1}
          <td>Aprobado</td>
          {:else}
          <td>Desaprobado</td>
          {/if}
          <td>
            <button
              onclick={() => read_report(weekly_report.report_id)}
            >
              Leer reporte
            </button>
          </td>
        </tr>
      {/each}
      </tbody>
    </table>
  </div>

  <div class="padre-paginacion">
    <div class="paginacion">
      <a href="" onclick={previous_page}>&laquo;</a>
      <a href="" class="activo">{current_page_number}</a>
      <a href="" onclick={next_page}>&raquo;</a>
    </div>
  </div>
</section>

<style>
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
  font-family: 'Play', sans-serif;
}

nav {
  background: #9e99ff;
  height: 80px;
  width: 100%;
  position: sticky;
  top: 0
}

.logo {
  padding-left: 20px;
  padding-top: 20px;
  height: 60px;
  position: absolute;
}

div.burger{
  width: 35px;
  height: 5px;
  background-color: white;
  margin: 6px 0;
}

nav ul {
  float: right;
}

nav ul li {
  display: inline-block;
  line-height: 80px;
  margin: 0 5px;
}

nav ul li a {
  color: #fff;
  font-size: 18px;
  padding: 7px 13px;
  border-radius: 3px;
  text-transform: uppercase;
}

li a:hover {
  background: #6c63ff;
  transition: .5s;
}

.checkbtn {
  font-size: 30px;
  color: #fff;
  float: right;
  line-height: 80px;
  margin-top: 20px;
  margin-right: 20px;
  cursor: pointer;
  display: none;
}

#check {
  display: none;
}

.cabecera {
  margin-top: 10px;
}

.padre-paginacion{
  text-align: center;
}

.paginacion {
  display: inline-block;
}

.paginacion a {
  color: black;
  float: left;
  padding: 8px 16px;
}

.paginacion a.activo {
  background-color: #6c63ff;
  color: #fff;
}

.paginacion a:hover:not(.activo){
  background-color: #6c63ff;
  color: #fff;
}

/* table style */

table {
  padding: 10px;
  width: 100%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

table th {
  background-color: #6c63ff;
  padding: 10px;
  color: #fff;
}

table td {
  background-color: #e4dddd;
  padding: 10px;
  color: black;
}

/* media queries */
@media (max-width: 700px) {
  .hscroll {
    overflow-x: auto;
  }
}

@media (max-width: 952px) {
  nav ul li a {
    font-size: 16px;
  }
}

@media (max-width: 858px) {
  .checkbtn {
    display: block;
  }

  ul {
    position: fixed;
    width: 100%;
    height: 100vh;
    background: #2c3e50;
    top: 80px;
    right: -100%;
    text-align: center;
    transition: all .5s;
  }

  nav ul li {
    display: block;
    margin: 50px 0;
    line-height: 30px;
  }

  nav ul li a {
    font-size: 20px;
  }

  li a:hover {
    background: none;
    color: #6c63ff;
  }

  #check:checked~ul {
    right: 0;
  }
}
</style>
