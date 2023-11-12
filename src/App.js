import "./App.css";
import drawer from "./images/drawers.jpg";
import Profile from "./profile";
function App() {
  return (
    <main>
      <section className="drawers-container">
        <img src={drawer} alt="flower" id="flower" />
      </section>
      <section className="content">
        <h4>
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h4>

        <small>
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </small>
        <Profile />
      </section>
    </main>
  );
}

export default App;
