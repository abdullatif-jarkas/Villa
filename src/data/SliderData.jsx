import img1 from "./../assets/imgs/hero-01.jpg";
import img2 from "./../assets/imgs/hero-02.jpg";
import img3 from "./../assets/imgs/hero-03.jpg";
import pal from "./../assets/imgs/palestine.png";
import syria from "./../assets/imgs/syria.png";

export const data = [
  {
    img: img1,
    text: "Hurry! Get the Best Villa for you",
    city: (
      <p
        className="slide-city"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "fit-content",
        }}
      >
        Syria, <span>Banias</span>
        <img src={syria} style={{ width: 30, marginLeft: 5 }} alt="" />
      </p>
    ),
  },
  {
    img: img2,
    text: "Be Quick! Get the best villa in town",
    city: (
      <p
        className="slide-city"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "fit-content",
        }}
      >
        Palestine, <span>Gaza</span>
        <img src={pal} style={{ width: 30, marginLeft: 5 }} alt="" />
      </p>
    ),
  },
  {
    img: img3,
    text: "Act Now! Get the highest level penthouse",
    city: (
      <p className="slide-city">
        Spain, <span>Barcelona</span>
      </p>
    ),
  },
];

