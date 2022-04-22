function Card({ card, onCardClick, currentUser, onCardLike, onCardDelete }) {
  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = isOwn ? 'card-grid__button-remove-card' : 'card-grid_button-remove-card-hidden';

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const isLiked = card.likes.some(i => i._id === currentUser._id);

  const cardLikeButtonClassName = `card-grid__like ${isLiked ? "card-grid__like_activate" : ""}`

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeCard(){
    onCardLike(card);
  }

  function handleDeleteClick(){
    onCardDelete(card)
  }

  return (
    <div className="card-grid__item" key={card._id}>
      <img src={card.link} className="card-grid__image" alt="#" onClick={handleClick} />
      <button type="button" className={cardDeleteButtonClassName} onClick={handleDeleteClick}></button>
      <div className="card-grid__block">
        <h2 className="card-grid__subtitle">{card.name}</h2>
        <div className="card-grid__like-item">
          <button type="button" className={cardLikeButtonClassName} onClick={handleLikeCard}></button>
          <div className="card-grid__like-counter">{card.likes.length}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;