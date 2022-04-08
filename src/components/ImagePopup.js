import closeIcon from "../images/popup__close-icon.svg";

function ImagePopup({ onClose, card }) {

  return card && (
    <div className="popup popup_type_image popup_opened">
      <div className="popup__container popup__container_image">
        <button className="popup__button-close" name="close" type="button" onClick={onClose}>
          <img
            src={closeIcon}
            alt="Закрыть"
            className="popup__close popup__close_type_image"
          />
        </button>
        <div className="popup__content">
          <img src={card.link} alt="Картинка" className="popup__image-full" />
          <p className="popup__text">{card.name}</p>
        </div>
      </div>
    </div>
  )
}

export default ImagePopup;