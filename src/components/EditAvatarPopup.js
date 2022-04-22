import { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const inputLinkRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputLinkRef.current.value)
    onUpdateAvatar({
      avatar: inputLinkRef.current.value,
    });
  }


  return (
    <>
      <PopupWithForm
        onClose={onClose}
        popupSelector="avatar"
        title="Обновить аватар"
        isOpen={isOpen}
        buttonText="Сохранить"
        formName="popupForm-avatar"
        onSubmit={handleSubmit}
        classNameForm="popup__form_avatar"
      >
        <fieldset className="popup__set">
          <input
            ref={inputLinkRef}
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
      </PopupWithForm>
    </>
  )
}

export default EditAvatarPopup;