
const Categories = () => {
  return (
    <div className="categories">
      <div className="destination">
        <h4>Destination</h4>
        <input type="text" placeholder="Rechercher une destination" />
      </div>
      <div className="arrive">
        <h4>Arrive</h4>
        <h6>Quand</h6>
      </div>
      <div className="depart">
        <h4>Depart</h4>
        <h6>Quand</h6>
      </div>
      <div className="voyageurs">
        <h4>Voyageurs</h4>
        <input type="text" placeholder="Ajouter des voyages" />
      </div>
        <a href="">
          <i className="fas fa-search"></i>
        </a>
    </div>
  );
};

export default Categories;