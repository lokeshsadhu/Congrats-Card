const element = (
  <div className="outer">
    <h1 className="heading">Congratulations</h1>
    <div className="inner">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="image"
      />
      <h2 className="heading-2">Kiran V</h2>
      <p>Vishnu Institute of Computer Education and Technology, Bhimavaram</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="image"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
