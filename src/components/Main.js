import React from "react";
import Card from "./Card";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userAbout: "",
      userAvatar: "",
      cardItems: [],
    };
  }

  

  render() {
    return (
      <main className="content">
        <section className="profile">
          <div className="profile__avatar" onClick={this.props.onEditAvatar}>
            <img
              className="profile__image"
              src={this.state.userAvatar}
              alt="Аватарка"
            />
          </div>
          <div className="profile__info">
            <div className="profile__container">
              <h1 className="profile__title">{this.state.userName}</h1>
              <button
                type="button"
                className="profile__editButton"
                onClick={this.props.onEditProfile}
              ></button>
            </div>
            <h2 className="profile__subtitle">{this.state.userAbout}</h2>
          </div>
          <button
            type="button"
            className="profile__addButton"
            onClick={this.props.onEditPlace}
          ></button>
        </section>
        <section className="elements">
          {this.state.cardItems.map((card, i) => {
            return (
              <Card
                clickCard={this.props.onEditImage}
                deleteCard={this.props.onDeletePlace}
                card={card}
                key={i}
              />
            );
          })}
        </section>
      </main>
    );
  }
}

export default Main;
