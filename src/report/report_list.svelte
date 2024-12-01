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
