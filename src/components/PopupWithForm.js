import closeIcon from "../images/popup__close-icon.svg";

function PopupWithForm({ onClose, popupSelector, children, title, isOpen, buttonText, formName, onSubmit, classNameForm }) {
  const opened = isOpen ? "popup_opened" : "";
  return (
    <div className={`popup popup_type_${popupSelector} ${opened}`} >
      <div className="popup__container">
        <button className="popup__button-close" name="close" type="button" onClick={onClose}>
          <img
            src={closeIcon}
            alt="Закрыть"
            className={`popup__close popup__close_type_${popupSelector}`}
          />
        </button>
        <div className="popup__content">
          <h2 className="popup__title">{title}</h2>
          <form
            onSubmit={onSubmit}
            className={`popup__form ${classNameForm}`}
            name={formName}
          >
            {children}
            <button type="submit" name="save" className="popup__form-submit">{buttonText}</button>
          </form >
        </div>
      </div>
    </div >
  )
}

export default PopupWithForm;