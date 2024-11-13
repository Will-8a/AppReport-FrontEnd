<script>
  let cedula = $state('');
  let password = $state('');
  const api_server_hostname = 'https://appreport.pythonanywhere.com'


  const login = async (event) => {
    event.preventDefault();

    const endpoint = api_server_hostname + '/api/auth/login';

    try{
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: cedula,
          password: password
        })
      });

      if (response.ok){
        const data = await response.json();

        // save info in sessionStorage
        sessionStorage.setItem('token', data.token);
        sessionStorage.setItem('user_info', JSON.stringify(data.user_info));
      }
      else{
        // show notification
        console.log('response is not ok');
      }
    }

    catch(error){
      // show notification
      console.log(error);
    };
  }
</script>

<div class='background'></div>

<div class='container'>
  <h1>Iniciar sesión</h1>

  <form onsubmit={login}>
    <input
      type='text'
      name='cédula'
      placeholder='Cédula'
      autocomplete='username'
      bind:value={cedula}
      required
    />

    <input
      type='password'
      name='password'
      placeholder='Contraseña'
      autocomplete='current-password'
      bind:value={password}
      required
    />

    <input
      type='submit'
      value='Iniciar sesión'
      class='btn'
    />
  </form>
</div>


<style>
  .container{
    padding: 10px;
    width: 280px;
    height: 300px;
    background-color: #fff;
    border-radius: 5px;
    position: fixed;
    transform: translate(-50%, -50%);
    left:50%;
    top: 50%;
  }

  h1{
    font-family: 'Play', sans-serif;
    width: 90%;
    color: #000000;
    font-size: 32px;
    margin: 28px auto 20px;
    text-align: left;
  }

  form{
    text-align: center;
  }

  input{
    padding: 12px 0;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 2px solid #8B8B8B;
    text-align: center;
    width: 90%;
    font-size: 16px;
    transition: border .2s, background-color .2s;
  }

  .btn{
    font-family: 'Arial', sans-serif;
    background-color: #D9D9D9;
    color: #000000;
    line-height: 25px;
  }

  .btn:hover{
    border-color: #000000;
    background-color: #6c63ff;
    color: white;
    cursor: pointer;
  }

  .background{
    margin: 0px;
    position: fixed;
    background-color: #9e99ff;
    width: 100%;
    height: 100%;
    transform: 0%;
  }
</style>
