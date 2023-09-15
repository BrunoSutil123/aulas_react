import {Link} from "react-router-dom"


function Pagina_1() {
  return (
    <div>
        <h1>Página 1</h1>
        <p>Aperta logo o botão abaixo pra ir pra outra página onde vc vai ter que apertar outro botão pra voltar pra cá e fazer a mesma coisa de novo</p>
        <Link to= "/Pagina_2" >Simboraaaaaaaa</Link>
    </div>
  )
}

export default Pagina_1