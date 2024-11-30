<script>
  import AppLogo from '../assets/logo.svg';

  const user_info = JSON.parse(sessionStorage.getItem('user_info'));
  const user_token = sessionStorage.getItem('token');

  const api_server_hostname = 'https://appreport.pythonanywhere.com'

  let cedula = $state('');
  let first_name = $state('');
  let middle_name = $state('');
  let last_name = $state('');
  let second_last_name = $state('');
  let password = $state('');
  let email = $state('');

  const change_location = (location) => {
    window.location.href = location;
  }

  const logout = (event) => {
    event.preventDefault();
    sessionStorage.removeItem('user_info');
    sessionStorage.removeItem('token');
    change_location('/#/login');
  }

  // redirect to login page if user info is 'null' in sessionStorage
  if (Object.is(user_info, null)){
    change_location('/#/login');
  }

  const upload_info = async (event) => {
    event.preventDefault();

    const endpoint = api_server_hostname + '/api/admin/tutor';

    try{
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'token': user_token
        },
        body: JSON.stringify({
          username: cedula,
          first_name: first_name,
          middle_name: middle_name,
          last_name: last_name,
          second_last_name: second_last_name,
          password: password,
          email: email
        })
      });

      if (response.ok){
        console.log('user created');
        change_location('/#/');
      }
      else{
        console.error('error');
      }
    }
    catch(error){
      console.error(error);
    }
  };
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
        onclick={logout}
        role='button'
      >
        Cerrar sesión
      </a>
    </li>
  </ul>
</nav>

<div class="container">
  <h1>Nuevo usuario</h1>
  <label for="cedula">Cedula</label>
  <input
    id="cedula"
    type="text"
    name="cedula"
    placeholder="Cedula"
    bind:value={cedula}
  >

  <label for="primerNombre">Primer nombre</label>
  <input
    id="primerNombre"
    type="text"
    name="primerNombre"
    placeholder="Primer nombre"
    bind:value={first_name}
  >

  <label for="segundoNombre">Segundo nombre</label>
  <input
    id="segundoNombre"
    type="text"
    name="segundoNombre"
    placeholder="Segundo nombre"
    bind:value={middle_name}
  >

  <label for="primerApellido">Primer apellido</label>
  <input
    id="primerApellido"
    type="text"
    name="primerApellido"
    placeholder="Primer apellido"
    bind:value={last_name}
  >

  <label for="segundoApellido">Segundo apellido</label>
  <input
    id="segundoApellido"
    type="text"
    name="segundoApellido"
    placeholder="Segundo apellido"
    bind:value={second_last_name}
  >

  <label for="contranena">Contrasena</label>
  <input
    id="contrasena"
    type="text"
    name="contrasena"
    placeholder="Contraseña"
    bind:value={password}
  >

  <label for="email">Email</label>
  <input
    id="email"
    type="email"
    name="email"
    placeholder="Correo Electronico"
    bind:value={email}
  >

  <div>
    <input
      id="botonGuardar"
      type="button"
      value="Guardar datos"
      class="botones"
      onclick={upload_info}
    >

    <input
      id="botonHabilitarEdicion"
      value="Nuevo tutor"
      type="button"
      class="botones"
      hidden
    >

    <input
      id="botonCerrar"
      type="button"
      value="Cerrar"
      class="botones"
      onclick={() => change_location('/#/')}
    >
  </div>
</div>

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
  position: fixed;
  top: 0
}

.container{
  padding: 10px;
  height: 300px;
  background-color: #fff;
  border-radius: 5px;
  margin-top: 104px;
}

h1{
  font-family:'Play', sans-serif;
  width: 90%;
  color: #000000;
  font-size: 32px;
  margin: 28px auto;
  margin-bottom: 20px;
  text-align: left;
}

input {
  padding: 12px 0;
  margin-bottom: 10px ;
  border-radius: 5px;
  border: 2px solid #8B8B8B;
  text-align: center;
  width: 100%;
  font-size: 16px;
  transition: border .2s, background-color .2s;
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
  margin-right: 20px;
  margin-top: 20px;
  cursor: pointer;
  display: none;
}

#check {
  display: none;
}

.botones {
  width: 100% !important;
  cursor: pointer;
  margin-top: 10px !important;
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
</style>
