import React from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithImage from "./PopupWithImage";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import api from "../utils/api";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      isEditAvatarPopupOpen: false,
      selectedCard: null,
      isDeletePlacePopupOpen: false,
      currentUser: {
        userName: "",
        userAbout: "",
        userAvatar: "",
        userId: "",
      },
      cardItems: [],
      isLoadingUpdate: {
        editProfile: false,
        editAvatar: false,
        createPlace: false,
      },
    };
  }

  handleEditProfileClick = () => {
    this.setState({
      isEditProfilePopupOpen: true,
    });
  };

  handleEditPlaceClick = () => {
    this.setState({
      isAddPlacePopupOpen: true,
    });
  };

  handleEditAvatarClick = () => {
    this.setState({
      isEditAvatarPopupOpen: true,
    });
  };

  handleEditDeleteClick = () => {
    this.setState({
      isDeletePlacePopupOpen: true,
    });
  };

  handleEditImageClick = (cardImage) => {
    this.setState({
      selectedCard: cardImage,
    });
  };

  closeAllPopups = () => {
    this.setState({
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      isEditAvatarPopupOpen: false,
      selectedCard: null,
      isDeletePlacePopupOpen: false,
    });
  };

  //смена данных пользователя
  handleUpdateUser = (name, about) => {
    api
      .changeUserInfo(name, about)
      .then((user) =>
        this.setState({
          currentUser: {
            ...this.state.currentUser,
            userName: user.name,
            userDescription: user.about,
          },
        })
      )
      .catch((err) => console.error(err));
  };

  //Смена аватара пользователя
  handleUpdateAvatar = (avatar) => {
    api
      .changeAvatar(avatar)
      .then((user) =>
        this.setState({
          currentUser: {
            ...this.state.currentUser,
            userAvatar: user.avatar,
          },
        })
      )
      .catch((err) => console.error(err));
  };

  //Удаление карточки и пересоздание массива
  handleCardDelete = (cardId) => {
    api
      .deleteCard(cardId)
      .then((res) => {
        const newCards = this.state.cardItems.filter((c) => c._id !== cardId);
        this.setState({
          cardItems: newCards,
        });
      })
      .catch((err) => console.error(err));
  };

  //Постановка лайка и удаление лайка
  changeCardLike = (card) => {
    const isLiked = card.likes.some(
      (i) => i._id === this.state.currentUser.userId
    );
    api
      .likeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        const newCards = this.state.cards.map((c) =>
          c._id === card._id ? newCard : c
        );
        this.setState({
          cardItems: newCards,
        });
      })
      .catch((err) => console.error(err));
  };

  //Добавление новой карточки
  handleAddPlaceSubmit = (name, link) => {
    api
      .createCard(name, link)
      .then((newCard) => {
        this.setState({
          cardItems: [...this.state.cardItems, newCard],
        });
      })
      .catch((err) => console.error(err));
  };

  //Перенесен Api в App
  componentDidMount() {
    Promise.all([api.getInitialCards(), api.getUserInfo()])
      .then(([cardItems, user]) => {
        this.setState({
          currentUser: {
            userName: user.name,
            userAbout: user.about,
            userAvatar: user.avatar,
            userId: user.id,
          },
          cardItems,
        });
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <CurrentUserContext.Provider value={this.state.currentUser}>
        <div className="page">
          <Header />
          <Main
            onEditProfile={this.handleEditProfileClick}
            onEditPlace={this.handleEditPlaceClick}
            onEditImage={this.handleEditImageClick}
            onDeletePlace={this.handleEditDeleteClick}
            onEditAvatar={this.handleEditAvatarClick}
          />
          <Footer />
          <PopupWithForm
            name="delete-place"
            title="Вы уверены?"
            buttonName="Да"
            isOpen={this.state.isDeletePlacePopupOpen}
            onClose={this.closeAllPopups}
          />
          <EditProfilePopup
            isOpen={this.state.isEditProfilePopupOpen}
            onClose={this.closeAllPopups}
            onUpdateUser={(name, about) => this.handleUpdateUser(name, about)}
          />

          <EditAvatarPopup            
            isOpen={this.state.isEditAvatarPopupOpen}
            onClose={this.closeAllPopups}
            onUpdateAvatar={({ avatar }) => this.handleUpdateAvatar(avatar)}
          />

          <PopupWithForm
            name="card"
            title="Новое место"
            buttonName="Создать"
            isOpen={this.state.isAddPlacePopupOpen}
            onClose={this.closeAllPopups}
            children={
              <React.Fragment>
                <input
                  type="text"
                  name="placeName"
                  defaultValue=""
                  className="popup__input popup__input_place"
                  id="input-place"
                  placeholder="Название"
                  required
                  minLength="1"
                  maxLength="30"
                  pattern="[А-ЯЁа-яёA-Za-z-\s]*"
                />
                <span className="error" id="input-place-error" />

                <input
                  type="url"
                  name="placePhoto"
                  defaultValue=""
                  className="popup__input popup__input_image"
                  id="input-url"
                  placeholder="Ссылка на картинку"
                  required
                />
                <span className="error" id="input-url-error" />
              </React.Fragment>
            }
          />

          <PopupWithImage
            card={this.state.selectedCard}
            onClose={this.closeAllPopups}
          />
        </div>
      </CurrentUserContext.Provider>
    );
  }
}

export default App;
