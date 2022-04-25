import { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import api from "../utils/Api.js";
import { CurrentUserContext } from "../context/CurrentUserContext.js"


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false)
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);


  useEffect(() => {
    api.getUserProfile().then(setCurrentUser).catch((e) => { console.log(e) });
  }, []); //запрос на добавление данных о профиле 


  useEffect(() => {
    api.getInitialCards().then(setCards).catch((e) => { console.log(e) });
  }, []); // запрос на добавления карточек


  function handleCardLike(card) {
    // проверяем, есть ли уже лайк на карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    // => условие для выбора api, удаление лайка или его постановки...
    const promise = isLiked ? api.deleteLike(card._id) : api.addLike(card._id);
    // обработка запроса!
    promise.then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    }).catch((e) => { console.log(e) });
  };


  function handleCardDelete(card) {
    // удаление карточки из текущего JSON объекта.
    api.deleteCard(card._id).then(() => setCards(cards.filter(value => value._id !== card._id))).catch((e) => { console.log(e) })
  }


  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  }

  function handleUpdateUser(data) {
    api.setUserProfile(data)
      .then(data => setCurrentUser(data), closeAllPopups())
      .catch(e => console.log(e))
  }

  function handleUpdateAvatar(data) {
    api.updateAvatar(data.avatar)
      .then(data => setCurrentUser(data), closeAllPopups())
      .then(e => console.log(e))
  }


  function handleAddPlaceSubmit(data) {
    api.getNewCard(data)
      .then((newCard) => setCards([newCard, ...cards]), closeAllPopups())
      .catch(e => console.log(e));
  }



  return (

    <div className="page">
      <Header />
      <CurrentUserContext.Provider
        value={{ currentUser }}
      >
        <Main
          onOpenEditProfilePopup={handleEditProfileClick}
          onEditAvatarPopup={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          cards={cards}
        />
      </CurrentUserContext.Provider>
      <Footer />
      <CurrentUserContext.Provider value={{ currentUser }}>
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
      </CurrentUserContext.Provider>

      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
      />

      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onUpdateCard={handleAddPlaceSubmit}
      />

      <PopupWithForm
        onClose={closeAllPopups}
        popupSelector="confirm"
        title="Вы уверены?"
        isOpen={false}
      >
        <button
          type="submit"
          name="save"
          className="popup__form-submit popup__form-submit_fix"
        >
          Да
        </button>
      </PopupWithForm>

      <ImagePopup
        onClose={closeAllPopups}
        card={selectedCard}
      />
    </div>

  );
}

export default App;