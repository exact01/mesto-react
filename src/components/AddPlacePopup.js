import { useState } from "react";
import PopupWithForm from "./PopupWithForm";


function AddPlacePopup({ isOpen, onClose, onUpdateCard }) {

  const [name, setName] = useState("");
  const [link, setLink] = useState("");


  function handleChangeNameLink(e) {
    setName(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  function handleSubmitCard(e) {
    e.preventDefault();
    onUpdateCard({ name, link })
  }



  return (
    <>
      <PopupWithForm
        onClose={onClose}
        popupSelector="add-card"
        title="Новое место"
        isOpen={isOpen}
        buttonText="Сохранить"
        formName="popupForm-card"
        onSubmit={handleSubmitCard}
        classNameForm="popup__form_add-card"
      >
        <fieldset className="popup__set">
          <input
            defaultValue=''
            onChange={handleChangeNameLink}
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
            defaultValue=''
            onChange={handleChangeLink}
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
      </PopupWithForm>
    </>
  )
}


export default AddPlacePopup;