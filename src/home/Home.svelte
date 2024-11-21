<script>
  import AppLogo from '../assets/logo.svg';
  import WelcomeImage from '../assets/welcome.png';

  // let user_info = JSON.parse('user_info');
  const user_info = JSON.parse(sessionStorage.getItem('user_info'));

  const change_location = (location) => {
    window.location.href = location;
  };

  const logout = (event) => {
    event.preventDefault();
    sessionStorage.removeItem('user_info');
    sessionStorage.removeItem('token');
    change_location('/#/login');
  };

  if (Object.is(user_info, null)){
    change_location('/#/login');
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
    <li><a onclick={logout}>Cerrar sesión</a></li>
  </ul>
</nav>

<section>
  <div class='section' id='elementosPrincipales'>
    <h1 class='bienvenido'>Bienvenido.</h1>

    <img src={WelcomeImage} alt='bienvenida.jpg' class='imagen' />

    {#if user_info.user_type == 3 }
      <input
        type='button'
        value='Nuevo reporte'
        class='boton'
        onclick={() => change_location('/#/reports/new')}
      />
    {/if}

    <input
      type='button'
      value='Reportes'
      class='boton'
      onclick={() => change_location('/#/reports')}
    />

    {#if user_info.user_type == 1 }
      <input
        type='button'
        value='Tutores'
        class='boton'
        onclick={() => change_location('/#/tutors')}
      />

      <input
        type='button'
        value='Estudiantes'
        class='boton'
        onclick={() => change_location('/#/students')}
      />
    {/if}
  </div>
</section>

<footer>
    <h4>2023 ® Todos los derechos reservados</h4>
</footer>

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
  cursor: pointer;
}

.checkbtn {
  font-size: 30px;
  color: #fff;
  float: right;
  line-height: 80px;
  margin-right: 20px;
  margin-top: 16px;
  cursor: pointer;
  display: none;
}

#check {
  display: none;
}

.bienvenido {
  text-align: center;
  padding: 30px;
  font-size: 40px;
  font-family: 'Play', sans-serif;
}

.imagen {
  width: 250px;
  height: 260px;
  padding: 5px;
  display: block;
  margin: auto;
}

.boton {
  font-family: "Arial", sans-serif;
  background-color: #D9D9D9;
  border-radius: 5px;
  border: 2px solid #8B8B8B;
  padding: 15px;
  width: 180px;
  display: block;
  margin: auto;
  margin-top: 20px;
  font-size: 20px;
}

.boton:hover {
  border-color: #000000;
  background-color: #6c63ff;
  color: white;
  cursor: pointer;
}

footer h4 {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #797979;
  text-align: center;
  padding: 12px;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
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

@media (max-height: 570px) {
  .bienvenido {
    text-align: center;
    padding: 30px;
    font-size: 28px;
    font-family: 'Play', sans-serif;
  }

  .imagen {
    width: 200px;
    height: 210px;
    padding: 5px;
    display: block;
    margin: auto;
  }

  .boton {
    font-family: "Arial", sans-serif;
    background-color: #D9D9D9;
    border-radius: 5px;
    border: 2px solid #8B8B8B;
    padding: 12px;
    width: 150px;
    display: block;
    margin: auto;
    margin-top: 20px;
    font-size: 16px;
  }
}

@media (min-height: 800px) {
  .imagen {
    width: 450px;
    height: 460px;
    padding: 5px;
    display: block;
    margin: auto;
  }
}
</style>
