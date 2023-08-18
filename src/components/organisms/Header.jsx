import React from "react";

import favoritos from "../../img/Favoritos.svg";
import usuario from "../../img/Usuário.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <section class="cabecalho">
      <div class="container"></div>
      <div className="lista-menu">
        <p><Link to={"/"}>Inicio</Link></p>
        <p><Link to={"/users/logon"}>Cadastro</Link></p>
        <p><Link to={"/arts/cadastro"}>Cadastro de Artes</Link></p>
      </div>

      <div class="perfil">
        <i>
          <img src={favoritos} alt="" />
        </i>
        <i>
          <img src={usuario} alt="" />
        </i>
      </div>
    </section>
  );
}
