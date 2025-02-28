const BasFooter = () => {
  return <div className="basFotter">
    <div className="first">
      2025 Airbnb, Inc. All rights reserved 
      <a href="">Confidentialité</a>
      <a href="">Conditions générales</a>
      <a href="">Plan du site</a>
      <a href="">Fonctionnement du site</a>
      <a href="">Infos sur l'entreprise</a>
    </div>
    <div className="second">
      <i className="fas fa-globe"></i>
      <h5>Francais</h5>
      <h2>$ {" "} USD </h2>
      <i className="fas fa-facebook"></i>
      <i className="fas fa-twitter"></i>
      <i className="fas fa-instagram"></i>
    </div>
  </div>;
};

export default BasFooter;