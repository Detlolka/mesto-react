import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from  './Footer';
import PopupWithImage from './PopupWithImage';
import PopupWithForm from './PopupWithForm';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditProfilePopupOpen: false,
            isAddPlacePopupOpen: false,
            isEditAvatarPopupOpen: false,
            selectedCard: null,
            isDeletePlacePopupOpen: false,
        }
    }

    handleEditProfileClick = () => {
        this.setState({
            isEditProfilePopupOpen: true
        })
    }

    handleEditPlaceClick = () => {
        this.setState({
            isAddPlacePopupOpen: true
        })
    }

    handleEditAvatarClick = () => {
        this.setState({
            isEditAvatarPopupOpen: true
        })
    }

    handleEditDeleteClick = () => {
        this.setState({
            isDeletePlacePopupOpen: true
        })
    }

    handleEditImageClick = (cardImage) => {
        this.setState({
            selectedCard: cardImage
        })
    }

    closeAllPopups = () => {
        this.setState({
            isEditProfilePopupOpen: false,
            isAddPlacePopupOpen: false,
            isEditAvatarPopupOpen: false,
            selectedCard: null,
            isDeletePlacePopupOpen: false,
        })
    }

    render() {
        return (
            <div className='page'>
                <Header />
                <Main 
                onEditProfile={this.handleEditProfileClick}
                onEditPlace={this.handleEditPlaceClick}
                onEditImage={this.handleEditImageClick}
                onDeletePlace={this.handleEditDeleteClick}
                onEditAvatar={this.handleEditAvatarClick}
                />
                <Footer />
                <PopupWithForm name="delete-place" title="Вы уверены?" buttonName="Да" isOpen={this.state.isDeletePlacePopupOpen} onClose={this.closeAllPopups} />
                <PopupWithForm                                                                
                  name="profile"
                  title="Редактировать профиль"
                  buttonName="Сохранить"
                  isOpen={this.state.isEditProfilePopupOpen} onClose={this.closeAllPopups}
                  children={(
                   <React.Fragment>
                         <input type="text" name="profileName" defaultValue="Жак-Ив Кусто" className="popup__input popup__input_name"
                         id="input-name" placeholder="Имя" required minLength="2" maxLength="40"
                         pattern="[А-ЯЁа-яёA-Za-z-\s]*" />
                         <span className="error" id="input-name-error"></span>

                         <input type="text" name="profileAbout" defaultValue="Исследователь океана" className="popup__input popup__input_about"
                         id="input-about"   placeholder="О себе" required minLength="2" maxLength="200" />
                        <span className="error" id="input-about-error"></span>
                  </React.Fragment>
                )} />

                <PopupWithForm
                   name="card"
                   title="Новое место"
                   buttonName="Создать"
                   isOpen={this.state.isAddPlacePopupOpen}
                   onClose={this.closeAllPopups}
                   children={(
                       <React.Fragment>
                           <input type="text" name="placeName" defaultValue="" className="popup__input popup__input_place"
                           id="input-place" placeholder="Название" required minLength="1" maxLength="30" pattern="[А-ЯЁа-яёA-Za-z-\s]*" />
                           <span className="error" id="input-place-error"></span>

                           <input type="url" name="placePhoto" defaultValue="" className="popup__input popup__input_image"
                           id="input-url" placeholder="Ссылка на картинку" required />
                          <span className="error" id="input-url-error"></span>
                       </React.Fragment>
                   )} />

                   <PopupWithForm
                      name="avatar"
                      title="Обновить аватар"
                      buttonName="Сохранить"
                      isOpen={this.state.isEditAvatarPopupOpen}
                      onClose={this.closeAllPopups}
                      children={(
                          <React.Fragment>
                              <input type="url" name="avatarPhoto" defaultValue="" className="popup__input popup__input_avatar"
                              id="input-avatar" placeholder="Введите URL" required />
                              <span className="error" id="input-avatar-error"></span>     
                          </React.Fragment>
                      )} />


                <PopupWithImage card={this.state.selectedCard} onClose={this.closeAllPopups} />
            </div>
        )
    }
}

export default App;