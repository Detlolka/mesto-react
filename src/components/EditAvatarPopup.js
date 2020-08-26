import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({onClose, isOpen, onUpdateAvatar}) {

    const avatarRefer = React.useRef();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onUpdateAvatar({
            avatar: avatarRefer.current.value
        });
        onClose();
        avatarRefer.current.value = '';
    }

    return (
        <PopupWithForm
        onSumbit={handleSubmit}
        name="avatar"
        title="Обновить аватар"
        buttonName="Сохранить"
        isOpen={isOpen}
        onClose={onClose}
        children={
          <React.Fragment>
            <input
              type="url"
              name="avatarPhoto"
              defaultValue=""
              className="popup__input popup__input_avatar"
              id="input-avatar"
              placeholder="Введите URL"
              ref={avatarRefer}
              value={avatarRefer.value}
              required
            />
            <span className="error" id="input-avatar-error" />
          </React.Fragment>
        }
      />

    )
}

export default EditAvatarPopup;