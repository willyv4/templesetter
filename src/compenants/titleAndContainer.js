import CardButton from "./card";
import "./titleAndContainer.css";

function BackgroundImageBox() {
  //   const [showComponent, setShowComponent] = useState(false);
  //   const handleClick = () => setShowComponent(!showComponent);

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
    </div>
  );
}

export default BackgroundImageBox;
