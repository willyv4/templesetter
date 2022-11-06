import { FadeIn } from "./animation";
import { useFadeAnimation } from "./usedFadeAnimation";
import React, { useState, useRef, useEffect, useCallback } from "react";

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
        <div>
          <img
            src={url}
            alt={alt}
            title={title}
            style={{ height: "110%", width: "160%", background: "cover" }}
          />
        </div>
      </FadeIn>
      <div
        style={{ position: "absolute", zIndex: 1, bottom: 1, width: "100%" }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          {slides.map((_, index) => {
            return (
              <span
                key={index}
                style={{ paddingRight: index !== slides.length - 1 ? 20 : 0 }}
              >
                {/* <button
                  style={{
                    height: 16,
                    display: "inline-block",
                    borderRadius: "100%",
                    background: activeSlide.index === index ? "black" : "white",
                  }}
                  onClick={() => {
                    setActiveSlide({
                      slide: slides[index],
                      index,
                    });
                    animate();
                    clearInterval(intervalRef.current);
                    intervalRef.current = setInterval(
                      changeSlides,
                      intervalBetweenSlidesSec * MILLIS
                    );
                  }}
                /> */}
              </span>
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
      <div style={{ height: 700, width: 1000 }}>
        <SlideShow
          slides={[
            {
              name: "san diego temple",
              url: "https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-9063-thumb.jpg",
              copyright: "",
            },
            {
              name: "Fort Lauderdale Florida",
              url: "https://churchofjesuschristtemples.org/assets/img/temples/fort-lauderdale-florida-temple/fort-lauderdale-florida-temple-3787-thumb.jpg",
              copyright: "Nick White",
            },
            {
              name: "Gilbert Arizona",
              url: "https://churchofjesuschristtemples.org/assets/img/temples/gilbert-arizona-temple/gilbert-arizona-temple-3802-thumb.jpg",
              copyright: "David Palmer",
            },
            {
              name: "Hamilton New Zealand",
              url: "https://churchofjesuschristtemples.org/assets/img/temples/hamilton-new-zealand-temple/hamilton-new-zealand-temple-31317-thumb.jpg",
              copyright: "Mark Petty",
            },
            {
              name: "Brigham City Utah",
              url: "https://churchofjesuschristtemples.org/assets/img/temples/brigham-city-utah-temple/brigham-city-utah-temple-3906-thumb.jpg",
              copyright: "Neil D Johnson",
            },
            {
              name: "Bountiful Utah",
              url: "https://churchofjesuschristtemples.org/assets/img/temples/bountiful-utah-temple/bountiful-utah-temple-4118-thumb.jpg",
              copyright: "Doug Havens",
            },
            {
              name: "Buenos Aires Argentina",
              url: "https://churchofjesuschristtemples.org/assets/img/temples/buenos-aires-argentina-temple/buenos-aires-argentina-temple-4087-main.jpg",
              copyright: "Noelia Valle",
            },
            {
              name: "Brisbane Australia",
              url: "https://churchofjesuschristtemples.org/assets/img/temples/brisbane-australia-temple/brisbane-australia-temple-11348-thumb.jpg",
              copyright: "Tony Barnett",
            },
            {
              name: "Calgary Alberta",
              url: "http://www.ldschurchtemples.com/calgary/gallery/images/calgary-mormon-temple1.jpg",
              copyright: "Cly Salleh",
            },
            {
              name: "Boise Idaho",
              url: "https://churchofjesuschristtemples.org/assets/img/temples/boise-idaho-temple/boise-idaho-temple-3852-thumb.jpg",
              copyright: "Aaron Nuffer",
            },
            {
              name: "Boston Massachusetts",
              url: "https://churchofjesuschristtemples.org/assets/img/temples/boston-massachusetts-temple/boston-massachusetts-temple-9899-thumb.jpg",
              copyright: "Ken Brown",
            },
            {
              name: "Albuquerque New Mexico",
              url: "https://churchofjesuschristtemples.org/assets/img/temples/albuquerque-new-mexico-temple/albuquerque-new-mexico-temple-3429-thumb.jpg",
              copyright: "Aaron Nuffer",
            },
            {
              name: "Salt Lake",
              url: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg",
              copyright: "David C. Moore",
            },
            {
              name: "Madrid Spain",
              url: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/056-Madrid-Spain-Temple.jpg",
              copyright: "Scott Zimmerman",
            },
            {
              name: "Manaus Brazil",
              url: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/138-Manaus-Brazil-Temple.jpg",
              copyright: "Gilvan Santos da Silva",
            },
            {
              name: "Manti Utah",
              url: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/003-Manti-Utah-Temple-icon.jpg",
              copyright: "Ronald E. Larsen",
            },
            {
              name: "Mesa Arizona",
              url: "https://churchofjesuschristtemples.org/assets/img/temples/mesa-arizona-temple/mesa-arizona-temple-19367-icon.jpg",
              copyright: "Tracy Crump",
            },
            {
              name: "Montreal Quebec",
              url: "https://churchofjesuschristtemples.org/assets/img/temples/montreal-quebec-temple/montreal-quebec-temple-10671-main.jpg",
              copyright: "Jeff Christensen",
            },
            {
              name: "Mount Timpanogos Utah",
              url: "https://churchofjesuschristtemples.org/assets/img/temples/mount-timpanogos-utah-temple/mount-timpanogos-utah-temple-1496-thumb.jpg",
              copyright: "Steven M. Reyes",
            },
            {
              name: "Houston Texas",
              url: "https://churchofjesuschristtemples.org/assets/img/temples/houston-texas-temple/houston-texas-temple-23480-thumb.jpg",
              copyright: "Brittany Price",
            },
            {
              name: "Idaho Falls Idaho",
              url: "https://churchofjesuschristtemples.org/assets/img/temples/idaho-falls-idaho-temple/idaho-falls-idaho-temple-31085-icon.jpg",
              copyright: "Rick Satterfield",
            },
            {
              name: "Jordan River Utah",
              url: "https://churchofjesuschristtemples.org/assets/img/temples/jordan-river-utah-temple/jordan-river-utah-temple-7270-icon.jpg",
              copyright: "Steven M. Reyes",
            },
            {
              name: "Johannesburg South Africa",
              url: "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-22456.jpg",
              copyright: "Shaun Thomas",
            },
            {
              name: "Kansas City Missouri",
              url: "https://churchofjesuschristtemples.org/assets/img/temples/kansas-city-missouri-temple/kansas-city-missouri-temple-3928.jpg",
              copyright: "Randy Johnson",
            },
            {
              name: "Kona Hawaii",
              src: "https://churchofjesuschristtemples.org/assets/img/temples/kona-hawaii-temple/kona-hawaii-temple-31695-thumb.jpg",
              copyright: "Scott Bosshardt",
            },
            {
              name: "Kyiv Ukraine",
              src: "https://churchofjesuschristtemples.org/assets/img/temples/kyiv-ukraine-temple/kyiv-ukraine-temple-3990-thumb.jpg",
              copyright: "Gennadiy Nosenko",
            },
            {
              name: "Laie Hawaii",
              url: "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple/laie-hawaii-temple-3830.jpg",
              copyright: "Rick Satterfield",
            },
            {
              name: "Logan Utah",
              url: "https://churchofjesuschristtemples.org/assets/img/temples/logan-utah-temple/logan-utah-temple-22073.jpg",
              copyright: "Andy Nelson",
            },
            {
              name: "London England",
              url: "https://churchofjesuschristtemples.org/assets/img/temples/london-england-temple/london-england-temple-7194.jpg",
              copyright: "Dave Newman",
            },
          ]}
        />
      </div>
    </div>
  );
}
