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

<section>
  <div class="hscroll">
    <table>
      <thead>
        <tr class="cabecera">
          <th>ID</th>
          <th>N° Reporte</th>
          <th>Cedula estudiante</th>
          <th>Nombre estudiante</th>
          <th>Carrera</th>
          <th>Aprobación tutor</th>
          <th>Aprobación Coordinador</th>
          <!-- Read report button -->
          <th></th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
  </div>

  <div class="padre-paginacion">
    <div class="paginacion">
      <a href="">&laquo;</a>
      <a href="" class="activo">1</a>
      <a href="">&raquo;</a>
    </div>
  </div>
</section>

<style>
</style>
