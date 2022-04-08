import { useState, useEffect } from "react";
import pencil from '../images/profile__settings.png'
import plus from '../images/profile__add-button.svg'
import Card from './Card';
import api from "../utils/Api.js";




function Main({ onOpenEditProfilePopup, onEditAvatarPopup, onAddPlace, onCardClick }) {

  const [userData, setUserData] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserProfile().then((res) => setUserData(res)).catch((e) => { console.log(e) });
  }, []); //запрос на добавление данных о профиле

  useEffect(() => {
    api.getInitialCards().then((res) => setCards(res)).catch((e) => { console.log(e) });
  }, []); // запрос на добавления карточек

  return (
    <main>
      <section className="profile">
        <div className="profile__avatar-container" onClick={onEditAvatarPopup}>
          <div className="profile__avatar" style={{ backgroundImage: `url(${userData.avatar})` }} ></div>
          <div className="profile__layer"></div>
        </div>
        <div className="profile__info">
          <div className="profile__settings">
            <h1 className="profile__title">{userData.name}</h1>
            <button className="profile__item-button-edit" type="button" onClick={onOpenEditProfilePopup}>
              <img
                src={pencil}
                alt="Изменить"
                className="profile__image-edit-button"
              />
            </button>
          </div>
          <h2 className="profile__subtitle">{userData.about}</h2>
        </div>
        <button className="profile__item-button-add" type="button" onClick={onAddPlace}>
          <img
            src={plus}
            alt="Добавить"
            className="profile__image-add-button"
          />
        </button>
      </section>
      <section className="card-grid">{cards.map((card) => (
        <Card card={card} onCardClick={onCardClick} key={card._id} />
      )
      )}</section>
    </main>
  )
}

export default Main;

