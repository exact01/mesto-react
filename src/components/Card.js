function Card(props) {
  const {card, onCardClick} = props;

  function handleClick() {
    onCardClick(card);
  }  

  return (
    <div className="card-grid__item" key={card._id}>
      <img src={card.link} className="card-grid__image" alt="#" onClick={handleClick}/>
      <button type="button" className="card-grid__button-remove-card"></button>
      <div className="card-grid__block">
        <h2 className="card-grid__subtitle">{card.name}</h2>
        <div className="card-grid__like-item">
          <button type="button" className="card-grid__like"></button>
          <div className="card-grid__like-counter">{card.likes.length}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;