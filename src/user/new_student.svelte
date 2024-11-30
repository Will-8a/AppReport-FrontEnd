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

<div class="container">
  <h1>Nuevo estudiante</h1>
  <label for="cedula">Cedula</label>
  <input
    id="cedula"
    type="text"
    name="cedula"
    placeholder="Cedula"
  >

  <label for="primerNombre">Primer nombre</label>
  <input
    id="primerNombre"
    type="text"
    name="primerNombre"
    placeholder="Primer nombre"
  >

  <label for="segundoNombre">Segundo nombre</label>
  <input
    id="segundoNombre"
    type="text"
    name="segundoNombre"
    placeholder="Segundo nombre"
  >

  <label for="primerApellido">Primer apellido</label>
  <input
    id="primerApellido"
    type="text"
    name="primerApellido"
    placeholder="Primer apellido"
  >

  <label for="segundoApellido">Segundo apellido</label>
  <input
    id="segundoApellido"
    type="text"
    name="segundoApellido"
    placeholder="Segundo apellido"
  >

  <label for="contranena">Contrasena</label>
  <input
    id="contrasena"
    type="text"
    name="contrasena"
    placeholder="Contraseña"
  >

  <label for="email">Email</label>
  <input
    id="email"
    type="email"
    name="email"
    placeholder="Correo Electronico"
  >

 <label for="cedulaTutor">Cedula Tutor</label>
 <input
   id="cedulaTutor"
   type="text"
   name="cedula tutor"
   placeholder="Cedula tutor"
 >

 <label for="carrera">Carrera</label>
 <select id="carrera" name="carrera">
   <option>INFORMÁTICA</option>
   <option>ADMINISTRACIÓN DE EMPRESAS</option>
   <option>ADMINISTRACIÓN DE PERSONAL</option>
 </select>

  <div>
    <input
      id="botonGuardar"
      type="button"
      value="Guardar datos"
      class="botones"
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
    >
  </div>
</div>

<style>
</style>
