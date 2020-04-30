import React from "react";

function createCard(emoji) {
  return <Card key={emoji.id} icon={emoji.emoji} title={emoji.name} text={emoji.info} />;
}

function Card(props) {
  return (
    <div className="col-md-3">
      <div className="card">
        <div className="card-img-container">{props.icon}</div>

        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default createCard;
