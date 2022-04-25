import { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState(" ");
  const [description, setDescription] = useState(" ");
  const { currentUser } = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about)
  }, [currentUser, isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value)
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();


    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      description
    });
  }
  return (
      <PopupWithForm
        onClose={onClose}
        popupSelector="edit"
        title="Редактировать профиль"
        isOpen={isOpen}
        buttonText="Сохранить"
        formName="popupForm-edit"
        onSubmit={handleSubmit}
        classNameForm="popup__form_type_edit"
      >
        <fieldset className="popup__set">
          <input
            value={name || ''}
            onChange={handleChangeName}
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
            value={description || ''}
            onChange={handleChangeDescription}
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
      </PopupWithForm>
  )
}

export default EditProfilePopup;