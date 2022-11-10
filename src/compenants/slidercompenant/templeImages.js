import { FadeIn } from "./animation";
import { useFadeAnimation } from "./usedFadeAnimation";
import React, { useState, useRef, useEffect, useCallback } from "react";
import "./templeImages.css";

const MILLIS = 1000;
const initialIndex = 0;
const SlideShow = ({ slides, intervalBetweenSlidesSec = 5 }) => {
  const [activeSlide, setActiveSlide] = useState({
    slide: slides[initialIndex],
    index: initialIndex,
  });
  const { showAnimation, animate } = useFadeAnimation();
  const intervalRef = useRef();
  const changeSlides = useCallback(() => {
    setActiveSlide(({ index }) => {
      const nextIndex = (index + 1) % slides.length;
      return {
        slide: slides[nextIndex],
        index: nextIndex,
      };
    });
    animate();
  }, [slides, animate]);

  useEffect(() => {
    intervalRef.current = setInterval(
      changeSlides,
      intervalBetweenSlidesSec * MILLIS
    );

    return () => clearInterval(intervalRef.current);
  }, [changeSlides, intervalBetweenSlidesSec]);

  const {
    slide: { url, alt, title },
  } = activeSlide;
  return (
    <div style={{ position: "relative", height: "100%" }}>
      <FadeIn active={showAnimation}>
        <div className="templeBackground">
          <img className="templeIMG" src={url} alt={alt} title={title} />
        </div>
      </FadeIn>
      <div className="title-body">
        <h1 className="PageTitle">SIMPLY SCHEDULE</h1>
        <div className="card-body">
          <p className="card-text">
            Scheduling interviews with local church leaders made simple.
          </p>
        </div>
      </div>
      <div
        style={{ position: "absolute", zIndex: 1, bottom: 1, width: "100%" }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          {slides.map((_, index) => {
            return (
              <span
                key={index}
                style={{ paddingRight: index !== slides.length - 1 ? 20 : 0 }}
              ></span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default function ImageSlider() {
  return (
    <div className="App">
      <div>
        <SlideShow
          slides={[
            {
              name: "LDS TEMPLE",
              url: "https://i.pinimg.com/originals/51/b9/29/51b9298c6a5911d8accdf4dc1aaef41c.jpg",
              copyright: "Mark Petty",
            },
            {
              name: "LDS TEMPLE",
              url: "https://i.pinimg.com/originals/28/a3/69/28a369ed866ae2fb11c6ba2399a0d95a.jpg",
              copyright: "Jeff Christensen",
            },
            {
              name: "LDS TEMPLE",
              url: "https://th.bing.com/th/id/R.585c7fb83a44fd7ece54ed92ac01d775?rik=pT6KA9HtiVV%2fQg&pid=ImgRaw&r=0&sres=1&sresct=1",
              copyright: "Mark Petty",
            },
            {
              name: "LDS TEMPLE", //
              url: "https://i.pinimg.com/originals/dd/ef/5d/ddef5d67924695ee67e72b989e33c1dc.jpg",
              copyright: "Jeff Christensen",
            },
            {
              name: "LDS TEMPLE",
              url: "https://i.pinimg.com/originals/db/13/9b/db139bdf3ab5f756a4e4ef9d08a20cdc.jpg",
              copyright: "Mark Petty",
            },
            {
              name: "LDS TEMPLE",
              url: "https://www.robertaboyd.com/images/thumbs/0002000_rome-temple-beacon-to-the-world.jpeg",
              copyright: "Jeff Christensen",
            },
            {
              name: "LDS TEMPLE",
              url: "https://bloximages.chicago2.vip.townnews.com/tucson.com/content/tncms/assets/v3/editorial/1/06/106344ee-48db-531b-9174-4e97fdc1585b/55c52c85dec9c.image.jpg?resize=1200%2C949",
              copyright: "Mark Petty",
            },
            {
              name: "LDS TEMPLE",
              url: "https://i.pinimg.com/originals/40/5e/88/405e884ad130e51ea043d48d0eb3b7a4.jpg",
              copyright: "Jeff Christensen",
            },
          ]}
          //800 450 images
        />
      </div>
    </div>
  );
}
