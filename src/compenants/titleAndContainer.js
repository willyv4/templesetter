import CardButton from "./card";
import ImageSlider from "./templeImages";
import "./titleAndContainer.css";

function BackgroundImageBox() {
  return (
    <div className="BackgroundImage">
      <div className="title-body">
        <h1 className="PageTitle">SIMPLY SCHEDULE</h1>
        <div className="card-body">
          <p className="card-text">
            Scheduling interviews with local church leaders made simple.
          </p>
        </div>
      </div>
      <CardButton />
      <ImageSlider />
    </div>
  );
}

export default BackgroundImageBox;
