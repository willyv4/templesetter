import CardButton from "./card";
import ImageSlider from "./slidercompenant/templeImages";
import "./titleAndContainer.css";

function BackgroundImageBox() {
  return (
    <div className="BackgroundImage">
      <ImageSlider></ImageSlider>
      <CardButton />
    </div>
  );
}

export default BackgroundImageBox;
