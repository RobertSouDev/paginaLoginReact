import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit (event) {
    event.preventDefault()
    console.log("Envio!!!")
    console.log(`${username} e a senha ${password}`)

    alert("Enviando os dados")
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Acesse o sistema</h1>
        <div>
          <input type="email" placeholder="E-mail" onChange={(e) =>{
            setUsername(e.target.value)
          }} />
        </div>
        <div>
          <input type="password" placeholder="senha" onChange={(e)=>{
            setPassword(e.target.value)
          }} />
        </div>

        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            salva
          </label>
          <a href="#">Esqueceu a senha?</a>
        </div>
        <button>Entra</button>

        <div className="signup-link">
          <p>
            Não tem uma conta? <a href="#">Registrar</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
