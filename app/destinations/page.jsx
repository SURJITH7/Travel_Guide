import Link from "next/link";
import styles from "./page.module.css";

const destinations = [
  {
    id: 1,
    name: "Manali",
    country: "India",
    description: "Scenic beauty, snow-capped mountains, and adventure activities.",
    emoji: "🏔️",
  },
  {
    id: 2,
    name: "Rome",
    country: "Italy",
    description:"Explore beautiful architecture, art, food and the famous Colosseum.",
    emoji: "🏛️",
  },
  {
    id: 3,
    name: "Tokyo",
    country: "Japan",
    description:
      "Experience modern cities, traditional culture, food and technology.",
    emoji: "🗾",
  },
  {
    id: 4,
    name: "Dubai",
    country: "UAE",
    description:
      "Discover luxury shopping, modern architecture and desert adventures.",
    emoji: "🏙️",
  },
  {
    id: 5,
    name: "Switzerland",
    country: "Europe",
    description:
      "Enjoy beautiful mountains, lakes, villages and breathtaking views.",
    emoji: "🏔️",
  },
  {
    id: 6,
    name: "Maldives",
    country: "Indian Ocean",
    description:
      "Relax on beautiful islands with crystal-clear water and beaches.",
    emoji: "🏝️",
  },
];

export default function Destinations() {
  return (
    <main className={styles.container}>
      {/* Page Header */}

      <section className={styles.heading}>
        <p>EXPLORE THE WORLD</p>

        <h1>Popular Destinations</h1>

        <span>
          Discover beautiful places and find inspiration for your next trip.
        </span>
      </section>

      {/* Destination Cards */}

      <section className={styles.grid}>
        {destinations.map((destination) => (
          <div className={styles.card} key={destination.id}>
            
            <div className={styles.image}>
              <span>{destination.emoji}</span>
            </div>

            <div className={styles.content}>
              <p className={styles.country}>
                {destination.country}
              </p>

              <h2>{destination.name}</h2>

              <p className={styles.description}>
                {destination.description}
              </p>

              <Link
                href={`/destinations/${destination.name.toLowerCase()}`}
                className={styles.link}
              >
                View Destination →
              </Link>
            </div>

          </div>
        ))}
      </section>
    </main>
  );
}
