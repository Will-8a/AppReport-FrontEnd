<script>
  import { notify } from '../stores/notification_store';
  import Notification from '../components/Notification.svelte';

  import AppLogo from '../assets/logo.svg';

  const user_info = JSON.parse(sessionStorage.getItem('user_info'));
  const student_info = JSON.parse(sessionStorage.getItem('student_info'))
  const user_token = sessionStorage.getItem('token');

  const api_server_hostname = 'https://appreport.pythonanywhere.com'

  const change_location = (location) => {
    window.location.href = location;
  }

  let week_number = $state('');
  let hours = $state('');
  let sunday_summary = $state('');
  let monday_summary = $state('');
  let tuesday_summary = $state('');
  let wednesday_summary = $state('');
  let thursday_summary = $state('');
  let friday_summary = $state('');

  const logout = (event) => {
    event.preventDefault();
    sessionStorage.removeItem('user_info');
    sessionStorage.removeItem('token');
    change_location('/#/login');
  }

  const upload_report = async (event) => {
    event.preventDefault();

    const endpoint = api_server_hostname + '/api/weekly_reports';

    try{
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'token': user_token
        },
        body: JSON.stringify({
          student_id: student_info.id,
          tutor_id: student_info.tutor_id,
          week_number: week_number,
          hours: hours,
          sunday_summary: sunday_summary,
          monday_summary: monday_summary,
          tuesday_summary: tuesday_summary,
          wednesday_summary: wednesday_summary,
          thursday_summary: thursday_summary,
          friday_summary: friday_summary
        })
      });

      if (response.ok){
        notify('Reporte creado exitosamente', 'success')
        change_location('/#/');
      }
    }
    catch(error){
        notify('Ocurrio un error interno', 'failed')
    };
  };

  if (Object.is(user_info, null)){
    change_location('/#/login');
  }
  else if(user_info.user_type !== 3){
    change_location('/#/');
  }
</script>

<Notification />

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
        onclick={logout}
        role='button'
      >
        Cerrar sesión
      </a>
    </li>
  </ul>
</nav>

<div id='camposReportes'>
  <form>
    <div class='padding'>
      <div class='cabecera' id='cabecera'>
        <input
          name='cedula_estudiante'
          type='text'
          id='cedulaEstudiante'
          readonly
          required
          hidden
        >
      </div>

      <label for="numeroReporte" class="nroreporte">
        <b>Nro° de Reporte</b>
      </label>
      <input
        name="numero_reporte"
        type="number"
        placeholder="Numero del reporte"
        class="field"
        id="numeroReporte"
        min="0"
        bind:value={week_number}
        required
      />

      <label for="horasReporte" class="texthorastotales">
        <b>Horas Totales</b>
      </label>
      <input
        name="horas_reporte"
        type="number"
        placeholder="Horas del reporte"
        class="field"
        id="horasReporte"
        min="0"
        bind:value={hours}
        required
      />

      <h2>Resumen de actividades</h2>

      <label for="resumenDomingo">Domingo</label>

      <br>

      <textarea
        id="resumenDomingo"
        name="resumen_domingo"
        bind:value={sunday_summary}
      ></textarea>

      <br>

      <label for="resumenLunes">Lunes</label>
      <br>
      <textarea
        id="resumenLunes"
        name="resumen_lunes"
        bind:value={monday_summary}
      ></textarea>

      <br>

      <label for="resumenMartes">Martes</label>
      <br>
      <textarea
        id="resumenMartes"
        name="resumen_martes"
        bind:value={tuesday_summary}
      ></textarea>

      <br>

      <label for="resumenMiercoles">Miercoles</label>
      <br>
      <textarea
        id="resumenMiercoles"
        name="resumen_miercoles"
        bind:value={wednesday_summary}
      ></textarea>

      <br>

      <label for="resumenJueves">Jueves</label>
      <br>
      <textarea
        id="resumenJueves"
        name="resumen_jueves"
        bind:value={thursday_summary}
      ></textarea>

      <br>

      <label for="resumenViernes">Viernes</label>
      <br>
      <textarea
        id="resumenViernes"
        name="resumen_viernes"
        bind:value={friday_summary}
      ></textarea>

      <br>

      <div class="btn_box">
        <input
          id="botonGuardar"
          type="button"
          value="Guardar"
          class="botones"
          onclick={upload_report}
        />

        <input
          id="botonCerrar"
          type="button"
          value="Cancelar"
          class="botones"
          onclick={() => change_location('/#/')}
        />
      </div>
    </div>
  </form>
</div>

<style>
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
}

nav {
  background: #9e99ff;
  height: 80px;
  width: 100%;
  /* mantener barra de navegación 
  arriba */
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
  /* margin-right: 20px; */
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
  font-family: 'Play', sans-serif;
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
  margin-right: 20px;
  margin-top: 20px;
  cursor: pointer;
  display: none;
}

#check {
  display: none;
}

#camposReportes input {
  font-family: "Play", sans-serif;
  background-color: #D9D9D9;
  border-radius: 5px;
  border: 2px solid #8B8B8B;
  padding: 5px;
  width: 130px;
  margin: auto;
  margin-top: 10px;
  margin-right: 10px;
  font-size: 15px;
  text-align: center;
}

#camposReportes label {
  font-family: 'Play', sans-serif;
  margin: auto;
  color: #8B8B8B;
}

.cabecera {
  margin-top: 10px;
}

#camposReportes h2 {
  font-family: 'Play', sans-serif;
  text-align: center;
  font-size: 20px;
  padding-top: 15px;
  padding-bottom: 10px;
}

#camposReportes textarea {
  font-family: 'Play', sans-serif;
  width: 100%;
  height: 150px;
  padding: 10px 10px;
  box-sizing: border-box;
  border: 2px solid #8B8B8B;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  resize: vertical; /* Permite cambiar el tamaño verticalmente */
}

.padding {
  padding-left: 10px;
  padding-right: 10px;
}

.botones {
  width: 100% !important;
  cursor: pointer;
  margin-top: 10px !important;
  padding:12px  !important;
  font-size: 16px !important;
}

/* media queries */

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

@media (max-width: 938px) {
  #camposReportes input.field{
    margin-right: 100%;
    width: 60%;
    display: block;
    margin: auto;
  }

  #camposReportes label b {
    display: block;
    text-align: center;
    width: 100%;
    padding-top: 10px;
  }
}
</style>
