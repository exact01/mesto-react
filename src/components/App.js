import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null)

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

  function closeAllPopups(selector) {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }



  return (

    <div className="page">
      <Header />
      <Main onOpenEditProfilePopup={handleEditProfileClick} onEditAvatarPopup={handleEditAvatarClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} />
      <Footer />


      <PopupWithForm onClose={closeAllPopups} popupSelector="edit" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} buttonText="Сохранить">
        <form
          className="popup__form popup__form_type_edit"
          name="popupForm-edit"
          noValidate
        >
          <fieldset className="popup__set">
            <input
              readOnly
              defaultValue=''
              className="popup__input-profile"
              type="text"
              name="username"
              id="form-title"
              minLength="2"
              maxLength="40"
              placeholder="Имя"
              required
            />
            <div className="popup__span-error">
              <span className="form-title-error popup__error popup__span-fix">
              </span>
            </div>
            <input
              readOnly
              defaultValue=''
              type="text"
              name="profession"
              className="popup__input-profile"
              id="form-subtitle"
              minLength="2"
              maxLength="200"
              placeholder="О себе"
              required
            />
            <div className="popup__span-error">

              <span
                className="form-subtitle-error popup__error popup__span-fix"
              ></span>
            </div>
          </fieldset>
        </form>
      </PopupWithForm>


      <PopupWithForm onClose={closeAllPopups} popupSelector="add-card" title="Новое место" isOpen={isAddPlacePopupOpen} buttonText="Сохранить">
        <form className="popup__form popup__form_add-card" name="popupForm-card">
          <fieldset className="popup__set">
            <input
              readOnly
              defaultValue=''
              type="text"
              name="name"
              className="popup__input-profile popup__input-profile_name"
              id="form-name"
              placeholder="Название"
              minLength="2"
              maxLength="30"
              required
            />
            <div className="popup__span-error">

              <span
                className="form-name-error popup__error popup__span-fix"
              ></span>
            </div>
            <input
              readOnly
              defaultValue=''
              type="url"
              name="link"
              className="popup__input-profile popup__input-profile_link"
              id="form-link"
              placeholder="Ссылка на картинку"
              required
            />
            <div className="popup__span-error">

              <span
                className="form-link-error popup__error popup__span-fix"
              ></span>
            </div>
          </fieldset>
        </form>
      </PopupWithForm>


      <PopupWithForm onClose={closeAllPopups} popupSelector="confirm" title="Вы уверены?" isOpen={false}>
        <button
          type="submit"
          name="save"
          className="popup__form-submit popup__form-submit_fix"
        >
          Да
        </button>
      </PopupWithForm>


      <PopupWithForm onClose={closeAllPopups} popupSelector="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} buttonText="Сохранить">
        <form className="popup__form popup__form_avatar" name="popupForm-avatar">
          <fieldset className="popup__set">
            <input
              readOnly
              defaultValue=''
              type="url"
              name="link"
              className="popup__input-profile"
              id="form-avatar"
              placeholder="Ссылка на картинку"
              required
            />
            <div className="popup__span-error">
              <span
                className="form-avatar-error popup__error popup__span-fix"
              ></span>
            </div>
          </fieldset>
        </form>
      </PopupWithForm>

      <ImagePopup onClose={closeAllPopups} card={selectedCard} />
    </div>

  );
}

export default App;