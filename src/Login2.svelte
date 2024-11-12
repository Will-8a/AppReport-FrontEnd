<script>
  let name = $state('world');
  let cedula = $state('');
  let password = $state('');

  const handlesubmit = async (event) => {
    event.preventDefault();
    let endpoint = '';
    console.log(endpoint)

    /*
    const response = await fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
      body
    });

    try {

    }
    catch {

    }
    */
    alert(cedula + ' ' + password);
  };

</script>

<form onsubmit={handlesubmit}>
  <input
    type='text'
    name='cedula'
    autocomplete='username'
    bind:value={cedula}
  />

  <input
    type='password'
    name='password'
    autocomplete='current-password'
    bind:value={password}
  />

  <button>Iniciar sesión</button>
</form>


<style>
</style>
