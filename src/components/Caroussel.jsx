import { useRef } from "react";
import styles from "./LensCarousel.module.scss";

const lenses = [
  { name: "Piscines", icon: "#3dfcs", link: "https://www.google.com" },
  { name: "Iconique", icon: "🏖️", link: "#" },
  { name: "Surf", icon: "⛰️", link: "#" },
  { name: "Design", icon: "🌆", link: "#" },
  { name: "Grandes demeures", icon: "🌾", link: "#" },
  { name: "Chambres", icon: "💎", link: "#" },
  { name: "Bateaux", icon: "🌴", link: "#" },
  { name: "Cuisines equipees", icon: "🌴", link: "#" },
  { name: "Domes", icon: "🌴", link: "#" },
  { name: "Au pird des pistes", icon: "🌴", link: "#" },
  { name: "Nouveautes", icon: "🌴", link: "#" },
  { name: "Camping", icon: "🌴", link: "#" },
  { name: "Tendance", icon: "🌴", link: "#" },
  { name: "Wow !", icon: "🌴", link: "#" },
  { name: "Villes emblematiques", icon: "🌴", link: "#" },
  { name: "Avec vue ", icon: "🌴", link: "#" },
  { name: "Camapgne ", icon: "🌴", link: "#" },
  { name: "Bord de leac", icon: "🌴", link: "#" },
  { name: "Chateaux", icon: "🌴", link: "#" },
  { name: "Bord de mer", icon: "🌴", link: "#" },
  { name: "Sous les tropiques", icon: "🌴", link: "#" },
  { name: "Parcs nationaux ", icon: "🌴", link: "#" },
  { name: "Canavanes", icon: "🌴", link: "#" },
  { name: "Iles ", icon: "🌴", link: "#" },
  { name: "Arctique", icon: "🌴", link: "#" },
  { name: "Plages ", icon: "🌴", link: "#" },
  { name: "Chambres d'hotes", icon: "🌴", link: "#" },
];

const Carousel = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const container = carouselRef.current;
    const scrollAmount = container.clientWidth * 0.5;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.carouselWrapper}>
      <button className={styles.navButton} onClick={() => scroll("left")}>
        ❮
      </button>
      <div className={styles.carousel} ref={carouselRef}>
        {lenses.map((lens, index) => (
          <a key={index} href={lens.link} className={styles.lens}>
            <span className={styles.icon}>{lens.icon}</span>
            {lens.name}
          </a>
        ))}
      </div>
      <button className={styles.navButton} onClick={() => scroll("right")}>
        ❯
      </button>
    </div>
  );
};

export default Carousel;
