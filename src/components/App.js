import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from  './Footer';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditProfilePopupOpen: false,
            isAddPlacePopupOpen: false,
            isEditAvatarPopupOpen: false,
            isOpenImagePopupOpen: null,
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
            isAddPlacePopupOpen: false
        })
    }

    handleEditAvatarClick = () => {
        this.setState({
            isEditAvatarPopupOpen: false
        })
    }

    handleEditDeleteClick = () => {
        this.setState({
            isDeletePlacePopupOpen: false
        })
    }

    handleEditImageClick = (cardImage) => {
        this.setState({
            isOpenImagePopupOpen: cardImage
        })
    }

    closeAllPopups = () => {
        this.setState({
            isEditProfilePopupOpen: false,
            isAddPlacePopupOpen: false,
            isEditAvatarPopupOpen: false,
            isOpenImagePopupOpen: null,
            isDeletePlacePopupOpen: false,
        })
    }

    render() {
        return (
            <div className='page'>
                <Header />
                <Main 
                editProfile={this.handleEditProfileClick}
                editPlace={this.handleEditPlaceClick}
                editImage={this.handleEditImageClick}
                deletePlace={this.handleEditDeleteClick}
                editAvatar={this.handleEditAvatarClick}
                />
                <Footer />
            </div>
        )
    }
}
export default App;