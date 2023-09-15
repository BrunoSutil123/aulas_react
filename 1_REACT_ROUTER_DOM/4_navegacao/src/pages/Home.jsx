import {Link} from "react-router-dom"       /*importa o Link na página navegação, e logo após o Home vc coloca como se fosse onde será clicado pra ir */

function Home() {
  return (
    <div>
        <h1>Home</h1>
        <Link to= "/usuarios" >Ir para usuários</Link>
    </div>
  )
}


export default Home