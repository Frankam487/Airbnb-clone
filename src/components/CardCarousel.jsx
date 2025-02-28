import { useState } from "react";
import styles from "./CardCarousel.module.scss";

const cards = [
  {
    id: 1,
    images: [
      "./public/b343cf0b-c5c2-4449-96e0-5eb3535ec02d.avif",
      "./public/download.png",
      "./public/44c35e1c-3461-4b47-a376-246996c6cb56.avif",
      "./public/b30b5574-3ce2-41a8-8140-ae5793e59095.avif",
      "./public/3aaff4fc-7abd-428d-8baf-98a83a048b48.avif",
      "./public/1.avif",
      "./public/1.avif",
      "./public/b343cf0b-c5c2-4449-96e0-5eb3535ec02d.avif",
      "./public/download.png",
      "./public/44c35e1c-3461-4b47-a376-246996c6cb56.avif",
      "./public/b30b5574-3ce2-41a8-8140-ae5793e59095.avif",
      "./public/3aaff4fc-7abd-428d-8baf-98a83a048b48.avif",
      "./public/1.avif",
      "./public/1.avif",
      "./public/b343cf0b-c5c2-4449-96e0-5eb3535ec02d.avif",
      "./public/download.png",
      "./public/44c35e1c-3461-4b47-a376-246996c6cb56.avif",
      "./public/b30b5574-3ce2-41a8-8140-ae5793e59095.avif",
      "./public/3aaff4fc-7abd-428d-8baf-98a83a048b48.avif",
      "./public/1.avif",
      "./public/1.avif",
    ],
  },
  {
    id: 2,
    images: [
      "./public/b343cf0b-c5c2-4449-96e0-5eb3535ec02d.avif",
      "./public/download.png",
      "./public/44c35e1c-3461-4b47-a376-246996c6cb56.avif",
      "./public/b30b5574-3ce2-41a8-8140-ae5793e59095.avif",
      "./public/3aaff4fc-7abd-428d-8baf-98a83a048b48.avif",
      "./public/1.avif",
      "./public/1.avif",
      "./public/b343cf0b-c5c2-4449-96e0-5eb3535ec02d.avif",
      "./public/download.png",
      "./public/44c35e1c-3461-4b47-a376-246996c6cb56.avif",
      "./public/b30b5574-3ce2-41a8-8140-ae5793e59095.avif",
      "./public/3aaff4fc-7abd-428d-8baf-98a83a048b48.avif",
      "./public/1.avif",
      "./public/1.avif",
    ],

  },
  {
    id: 3,
    images: [
      "./public/b343cf0b-c5c2-4449-96e0-5eb3535ec02d.avif",
      "./public/download.png",
      "./public/44c35e1c-3461-4b47-a376-246996c6cb56.avif",
      "./public/b30b5574-3ce2-41a8-8140-ae5793e59095.avif",
      "./public/3aaff4fc-7abd-428d-8baf-98a83a048b48.avif",
      "./public/1.avif",
      "./public/1.avif",
      "./public/b343cf0b-c5c2-4449-96e0-5eb3535ec02d.avif",
      "./public/download.png",
      "./public/44c35e1c-3461-4b47-a376-246996c6cb56.avif",
      "./public/b30b5574-3ce2-41a8-8140-ae5793e59095.avif",
      "./public/3aaff4fc-7abd-428d-8baf-98a83a048b48.avif",
      "./public/1.avif",
      "./public/1.avif",
    ],
  },
  {
    id: 4,
    images: [
      "./public/b343cf0b-c5c2-4449-96e0-5eb3535ec02d.avif",
      "./public/download.png",
      "./public/44c35e1c-3461-4b47-a376-246996c6cb56.avif",
      "./public/b30b5574-3ce2-41a8-8140-ae5793e59095.avif",
      "./public/3aaff4fc-7abd-428d-8baf-98a83a048b48.avif",
      "./public/1.avif",
      "./public/1.avif",
      "./public/b343cf0b-c5c2-4449-96e0-5eb3535ec02d.avif",
      "./public/download.png",
      "./public/44c35e1c-3461-4b47-a376-246996c6cb56.avif",
      "./public/b30b5574-3ce2-41a8-8140-ae5793e59095.avif",
      "./public/3aaff4fc-7abd-428d-8baf-98a83a048b48.avif",
      "./public/1.avif",
      "./public/1.avif",
      "./public/b343cf0b-c5c2-4449-96e0-5eb3535ec02d.avif",
      "./public/download.png",
      "./public/44c35e1c-3461-4b47-a376-246996c6cb56.avif",
      "./public/b30b5574-3ce2-41a8-8140-ae5793e59095.avif",
      "./public/3aaff4fc-7abd-428d-8baf-98a83a048b48.avif",
      "./public/1.avif",
      "./public/1.avif",
    ],
  },
  {
    id: 5,
    images: [
      "./public/b343cf0b-c5c2-4449-96e0-5eb3535ec02d.avif",
      "./public/download.png",
      "./public/44c35e1c-3461-4b47-a376-246996c6cb56.avif",
      "./public/b30b5574-3ce2-41a8-8140-ae5793e59095.avif",
      "./public/3aaff4fc-7abd-428d-8baf-98a83a048b48.avif",
      "./public/1.avif",
      "./public/1.avif",
      "./public/b343cf0b-c5c2-4449-96e0-5eb3535ec02d.avif",
      "./public/download.png",
      "./public/44c35e1c-3461-4b47-a376-246996c6cb56.avif",
      "./public/b30b5574-3ce2-41a8-8140-ae5793e59095.avif",
      "./public/3aaff4fc-7abd-428d-8baf-98a83a048b48.avif",
      "./public/1.avif",
      "./public/1.avif",
    ],

  },
  {
    id: 6,
    images: [
      "./public/b343cf0b-c5c2-4449-96e0-5eb3535ec02d.avif",
      "./public/download.png",
      "./public/44c35e1c-3461-4b47-a376-246996c6cb56.avif",
      "./public/b30b5574-3ce2-41a8-8140-ae5793e59095.avif",
      "./public/3aaff4fc-7abd-428d-8baf-98a83a048b48.avif",
      "./public/1.avif",
      "./public/1.avif",
      "./public/b343cf0b-c5c2-4449-96e0-5eb3535ec02d.avif",
      "./public/download.png",
      "./public/44c35e1c-3461-4b47-a376-246996c6cb56.avif",
      "./public/b30b5574-3ce2-41a8-8140-ae5793e59095.avif",
      "./public/3aaff4fc-7abd-428d-8baf-98a83a048b48.avif",
      "./public/1.avif",
      "./public/1.avif",
    ],
  },
  {
    id: 7,
    images: [
      "./public/b343cf0b-c5c2-4449-96e0-5eb3535ec02d.avif",
      "./public/download.png",
      "./public/44c35e1c-3461-4b47-a376-246996c6cb56.avif",
      "./public/b30b5574-3ce2-41a8-8140-ae5793e59095.avif",
      "./public/3aaff4fc-7abd-428d-8baf-98a83a048b48.avif",
      "./public/1.avif",
      "./public/1.avif",
      "./public/b343cf0b-c5c2-4449-96e0-5eb3535ec02d.avif",
      "./public/download.png",
      "./public/44c35e1c-3461-4b47-a376-246996c6cb56.avif",
      "./public/b30b5574-3ce2-41a8-8140-ae5793e59095.avif",
      "./public/3aaff4fc-7abd-428d-8baf-98a83a048b48.avif",
      "./public/1.avif",
      "./public/1.avif",
      "./public/b343cf0b-c5c2-4449-96e0-5eb3535ec02d.avif",
      "./public/download.png",
      "./public/44c35e1c-3461-4b47-a376-246996c6cb56.avif",
      "./public/b30b5574-3ce2-41a8-8140-ae5793e59095.avif",
      "./public/3aaff4fc-7abd-428d-8baf-98a83a048b48.avif",
      "./public/1.avif",
      "./public/1.avif",
    ],
  },
  {
    id: 8,
    images: [
      "./public/b343cf0b-c5c2-4449-96e0-5eb3535ec02d.avif",
      "./public/download.png",
      "./public/44c35e1c-3461-4b47-a376-246996c6cb56.avif",
      "./public/b30b5574-3ce2-41a8-8140-ae5793e59095.avif",
      "./public/3aaff4fc-7abd-428d-8baf-98a83a048b48.avif",
      "./public/1.avif",
      "./public/1.avif",
      "./public/b343cf0b-c5c2-4449-96e0-5eb3535ec02d.avif",
      "./public/download.png",
      "./public/44c35e1c-3461-4b47-a376-246996c6cb56.avif",
      "./public/b30b5574-3ce2-41a8-8140-ae5793e59095.avif",
      "./public/3aaff4fc-7abd-428d-8baf-98a83a048b48.avif",
      "./public/1.avif",
      "./public/1.avif",
    ],

  },
  {
    id: 9,
    images: [
      "./public/b343cf0b-c5c2-4449-96e0-5eb3535ec02d.avif",
      "./public/download.png",
      "./public/44c35e1c-3461-4b47-a376-246996c6cb56.avif",
      "./public/b30b5574-3ce2-41a8-8140-ae5793e59095.avif",
      "./public/3aaff4fc-7abd-428d-8baf-98a83a048b48.avif",
      "./public/1.avif",
      "./public/1.avif",
      "./public/b343cf0b-c5c2-4449-96e0-5eb3535ec02d.avif",
      "./public/download.png",
      "./public/44c35e1c-3461-4b47-a376-246996c6cb56.avif",
      "./public/b30b5574-3ce2-41a8-8140-ae5793e59095.avif",
      "./public/3aaff4fc-7abd-428d-8baf-98a83a048b48.avif",
      "./public/1.avif",
      "./public/1.avif",
    ],
  },
  {
    id: 10,
    images: [
      "./public/b343cf0b-c5c2-4449-96e0-5eb3535ec02d.avif",
      "./public/download.png",
      "./public/44c35e1c-3461-4b47-a376-246996c6cb56.avif",
      "./public/b30b5574-3ce2-41a8-8140-ae5793e59095.avif",
      "./public/3aaff4fc-7abd-428d-8baf-98a83a048b48.avif",
      "./public/1.avif",
      "./public/1.avif",
      "./public/b343cf0b-c5c2-4449-96e0-5eb3535ec02d.avif",
      "./public/download.png",
      "./public/44c35e1c-3461-4b47-a376-246996c6cb56.avif",
      "./public/b30b5574-3ce2-41a8-8140-ae5793e59095.avif",
      "./public/3aaff4fc-7abd-428d-8baf-98a83a048b48.avif",
      "./public/1.avif",
      "./public/1.avif",
      "./public/b343cf0b-c5c2-4449-96e0-5eb3535ec02d.avif",
      "./public/download.png",
      "./public/44c35e1c-3461-4b47-a376-246996c6cb56.avif",
      "./public/b30b5574-3ce2-41a8-8140-ae5793e59095.avif",
      "./public/3aaff4fc-7abd-428d-8baf-98a83a048b48.avif",
      "./public/1.avif",
      "./public/1.avif",
    ],
  },
  {
    id: 11,
    images: [
      "./public/b343cf0b-c5c2-4449-96e0-5eb3535ec02d.avif",
      "./public/download.png",
      "./public/44c35e1c-3461-4b47-a376-246996c6cb56.avif",
      "./public/b30b5574-3ce2-41a8-8140-ae5793e59095.avif",
      "./public/3aaff4fc-7abd-428d-8baf-98a83a048b48.avif",
      "./public/1.avif",
      "./public/1.avif",
      "./public/b343cf0b-c5c2-4449-96e0-5eb3535ec02d.avif",
      "./public/download.png",
      "./public/44c35e1c-3461-4b47-a376-246996c6cb56.avif",
      "./public/b30b5574-3ce2-41a8-8140-ae5793e59095.avif",
      "./public/3aaff4fc-7abd-428d-8baf-98a83a048b48.avif",
      "./public/1.avif",
      "./public/1.avif",
    ],

  },
  {
    id: 12,
    images: [
      "./public/b343cf0b-c5c2-4449-96e0-5eb3535ec02d.avif",
      "./public/download.png",
      "./public/44c35e1c-3461-4b47-a376-246996c6cb56.avif",
      "./public/b30b5574-3ce2-41a8-8140-ae5793e59095.avif",
      "./public/3aaff4fc-7abd-428d-8baf-98a83a048b48.avif",
      "./public/1.avif",
      "./public/1.avif",
      "./public/b343cf0b-c5c2-4449-96e0-5eb3535ec02d.avif",
      "./public/download.png",
      "./public/44c35e1c-3461-4b47-a376-246996c6cb56.avif",
      "./public/b30b5574-3ce2-41a8-8140-ae5793e59095.avif",
      "./public/3aaff4fc-7abd-428d-8baf-98a83a048b48.avif",
      "./public/1.avif",
      "./public/1.avif",
    ],
  },
  {
    id: 13,
    images: [
      "./public/b343cf0b-c5c2-4449-96e0-5eb3535ec02d.avif",
      "./public/download.png",
      "./public/44c35e1c-3461-4b47-a376-246996c6cb56.avif",
      "./public/b30b5574-3ce2-41a8-8140-ae5793e59095.avif",
      "./public/3aaff4fc-7abd-428d-8baf-98a83a048b48.avif",
      "./public/1.avif",
      "./public/1.avif",
      "./public/b343cf0b-c5c2-4449-96e0-5eb3535ec02d.avif",
      "./public/download.png",
      "./public/44c35e1c-3461-4b47-a376-246996c6cb56.avif",
      "./public/b30b5574-3ce2-41a8-8140-ae5793e59095.avif",
      "./public/3aaff4fc-7abd-428d-8baf-98a83a048b48.avif",
      "./public/1.avif",
      "./public/1.avif",
      "./public/b343cf0b-c5c2-4449-96e0-5eb3535ec02d.avif",
      "./public/download.png",
      "./public/44c35e1c-3461-4b47-a376-246996c6cb56.avif",
      "./public/b30b5574-3ce2-41a8-8140-ae5793e59095.avif",
      "./public/3aaff4fc-7abd-428d-8baf-98a83a048b48.avif",
      "./public/1.avif",
      "./public/1.avif",
    ],
  },
  {
    id: 14,
    images: [
      "./public/b343cf0b-c5c2-4449-96e0-5eb3535ec02d.avif",
      "./public/download.png",
      "./public/44c35e1c-3461-4b47-a376-246996c6cb56.avif",
      "./public/b30b5574-3ce2-41a8-8140-ae5793e59095.avif",
      "./public/3aaff4fc-7abd-428d-8baf-98a83a048b48.avif",
      "./public/1.avif",
      "./public/1.avif",
      "./public/b343cf0b-c5c2-4449-96e0-5eb3535ec02d.avif",
      "./public/download.png",
      "./public/44c35e1c-3461-4b47-a376-246996c6cb56.avif",
      "./public/b30b5574-3ce2-41a8-8140-ae5793e59095.avif",
      "./public/3aaff4fc-7abd-428d-8baf-98a83a048b48.avif",
      "./public/1.avif",
      "./public/1.avif",
    ],

  },
  {
    id: 15,
    images: [
      "./public/b343cf0b-c5c2-4449-96e0-5eb3535ec02d.avif",
      "./public/download.png",
      "./public/44c35e1c-3461-4b47-a376-246996c6cb56.avif",
      "./public/b30b5574-3ce2-41a8-8140-ae5793e59095.avif",
      "./public/3aaff4fc-7abd-428d-8baf-98a83a048b48.avif",
      "./public/1.avif",
      "./public/1.avif",
      "./public/b343cf0b-c5c2-4449-96e0-5eb3535ec02d.avif",
      "./public/download.png",
      "./public/44c35e1c-3461-4b47-a376-246996c6cb56.avif",
      "./public/b30b5574-3ce2-41a8-8140-ae5793e59095.avif",
      "./public/3aaff4fc-7abd-428d-8baf-98a83a048b48.avif",
      "./public/1.avif",
      "./public/1.avif",
    ],
  },
  
];

const CardCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleHover = (cardId) => {
    setHoveredCard(cardId);
  };

  const handleImageChange = (direction, cardId) => {
    const card = cards.find((card) => card.id === cardId);
    const totalImages = card.images.length;

    setCurrentImageIndex((prevIndex) => {
      if (direction === "next") {
        return (prevIndex + 1) % totalImages;
      }
      return (prevIndex - 1 + totalImages) % totalImages;
    });
  };

  return (
    <div className={styles.cardsWrapper}>
      {cards.map((card) => (
        <div
          key={card.id}
          className={styles.card}
          onMouseEnter={() => handleHover(card.id)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className={styles.imageContainer}>
            <img
              src={card.images[currentImageIndex]}
              alt={card.title}
              className={styles.image}
            />
            {hoveredCard === card.id && (
              <div className={styles.arrowButtons}>
                <button
                  className={`${styles.arrowButton} ${styles.leftArrow}`}
                  onClick={() => handleImageChange("prev", card.id)}
                >
                  ❮
                </button>
                <button
                  className={`${styles.arrowButton} ${styles.rightArrow}`}
                  onClick={() => handleImageChange("next", card.id)}
                >
                  ❯
                </button>
              </div>
            )}
            <div className={styles.loveButton}>❤️</div>
            <div className={styles.indicators}>
              {card.images.map((_, index) => (
                <span
                  key={index}
                  className={`${styles.indicator} ${
                    index === currentImageIndex ? styles.active : ""
                  }`}
                ></span>
              ))}
            </div>
          </div>
          <h3 className={styles.cardTitle}>{card.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default CardCarousel;
