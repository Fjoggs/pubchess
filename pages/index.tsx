import { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <section className="container">
        <div className="game">
          <div className="webcam" />
          <div className="board" />
          <div className="webcam" />
        </div>
        <div className="game">
          <div className="webcam" />
          <div className="board" />
          <div className="webcam" />
        </div>
        <div className="game">
          <div className="webcam" />
          <div className="board" />
          <div className="webcam" />
        </div>
        <div className="game">
          <div className="webcam" />
          <div className="board" />
          <div className="webcam" />
        </div>
        <div className="game">
          <div className="webcam" />
          <div className="board" />
          <div className="webcam" />
        </div>
      </section>
      <style jsx>
        {`
          .container {
            display: flex;
            justify-content: space-around;
            align-items: center;
          }

          .game {
            height: 500px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            margin: 5px;
          }

          .board {
            min-width: 150px;
            min-height: 150px;
            border: 1px black solid;
            background-image: url("../assets/chess.jpg");
          }

          .webcam {
            width: 100px;
            height: 100px;
            border: 1px black solid;
          }
        `}
      </style>
    </Fragment>
  );
};

export default Home;
