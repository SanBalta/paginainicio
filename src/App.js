import logo from './logo.svg';
import './App.css';

function App() {
  return (
        <html>
      <body>
      <div class="container1">
        <h2>ESCUELA PREPARATORIA OFICIAL NO. 34</h2>
        <img src="https://epo34info.files.wordpress.com/2013/09/escudo-aniv.jpg" alt="logo" />
      </div>
  
    <main>
      <div class="login">  
        <form>
          <div class="mensaje">
            <p>Bienvenido</p>
          </div>

          <div class="email">
            <label for="email">Email</label>
            <input type ="email" id="email" name="email" required autofocus />
          </div>
              
          <div class="pass">
            <label for="pass">Contraseña</label>
            <input type ="password" id="pass" name="pass" required />
          </div>  

          <div class="enviar">
            <button type="submit">Login</button>
          </div>
        </form>  
      </div>
    </main>
  </body>
  </html>
  );
}

export default App;
