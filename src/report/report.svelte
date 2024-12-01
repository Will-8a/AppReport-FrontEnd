<script>
  import AppLogo from '../assets/logo.svg';

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
        required
      />

      <h2>Resumen de actividades</h2>

      <label for="resumenDomingo">Domingo</label>

      <br>

      <textarea
        id="resumenDomingo"
        name="resumen_domingo"
      ></textarea>

      <br>

      <label for="resumenLunes">Lunes</label>
      <br>
      <textarea
        id="resumenLunes"
        name="resumen_lunes"
      ></textarea>

      <br>

      <label for="resumenMartes">Martes</label>
      <br>
      <textarea
        id="resumenMartes"
        name="resumen_martes"
      ></textarea>

      <br>

      <label for="resumenMiercoles">Miercoles</label>
      <br>
      <textarea
        id="resumenMiercoles"
        name="resumen_miercoles"
      ></textarea>

      <br>

      <label for="resumenJueves">Jueves</label>
      <br>
      <textarea
        id="resumenJueves"
        name="resumen_jueves"
      ></textarea>

      <br>

      <label for="resumenViernes">Viernes</label>
      <br>
      <textarea
        id="resumenViernes"
        name="resumen_viernes"
      ></textarea>

      <br>

      <div class="btn_box">
        <input
          id="botonAprobar"
          type="button"
          value="Aprobar"
          class="botones"
        />

        <input
          id="botonDesaprobar"
          type="button"
          value="Desaprobar"
          class="botones"
        />

        <input
          id="botonCerrar"
          type="button"
          value="Cerrar"
          class="botones"
        />
      </div>
    </div>
  </form>
</div>

<style>
</style>
