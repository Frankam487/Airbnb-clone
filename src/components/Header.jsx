const Header = () => {
  return (
    <div className="header">
      <img src="/download.png" alt="" />
      <div className="logement">
        <li className="loge">
          <a href="">Logement</a>
        </li>
        <li className="loge2">
          <a href="">Experiences</a>
        </li>
      </div>
      <div className="connexion">
        <li>
          <a href="">Mettre mon logement sur Aibnb</a>
        </li>
        <li>
          <a href="">
            {" "}
            <i className="fa-solid fa-globe"></i>
          </a>
        </li>
        <div className="burger">
          <a href="">
             <i className="fa-solid fa-bars"></i>
         </a>
          <a href="">
             <i className="fa-solid fa-user"></i>
         </a>
        </div>
      </div>
    </div>
  );
};

export default Header;