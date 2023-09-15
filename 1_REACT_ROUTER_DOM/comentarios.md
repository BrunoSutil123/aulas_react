primeiro vc vai no terminal do 1_react_router_dom

depois vc cria a pasta com create vite@latest

depois npm i

npm i react-router-dom

------------------------------------------

após isso precisamos excluir as páginas indesejadas e q n vamos usar

depois criar uma pasta "pages" em src

dentro desta pasta colocar as duas páginas q vão se conectas logo

depois usamos o rfce nas duas páginas 1 e 2 pra cfriar o import delas

-------------------------------------------------
agora dentro de src criamos um arquivo chamado router.jsx

nele nós importamos as rotas "import{ Routes, Route } from "react-router-dom" "

importamos a página 1 e 2

usamos o rfce e criamos as rotas:

<Routes>
            <Route path="/" element={<Pagina_1/>} />
            <Route path="/Pagina_2" element={<Pagina_2/>} />
</Routes>

