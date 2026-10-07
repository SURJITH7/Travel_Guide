import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";


const featured = [
  {
    name: "Bali",
    country: "Indonesia",
    image: "/bali.jpg",
    blurb: "Rice terraces, surf breaks and temple mornings.",
    href: "/destinations",
  },
  {
    name: "India",
    country: "South Asia",
    image: "/india.jpg",
    blurb: "Palaces, backwaters, mountains and street food in every state.",
    href: "/destinations",
  },
  {
    name: "Paris",
    country: "France",
    image: "/paris.jpg",
    blurb: "Museums, cafés and long walks along the Seine.",
    href: "/destinations",
  },
];

export default function Page() {
  return (
    <div className={styles.page}>
      

      <section className={styles.hero}>
        <Image src="/travel.jpg" alt="landscapes" fill  className={styles.heroImage}/>
        <div className={styles.heroShade} />
        <div className={styles.heroText}>
          <h1>
            Find your next trip, one place at a time.
          </h1>
          <p>
            Short, honest guides to where to go, what to see and when to visit.
          </p>
          <Link href="/destinations" className={styles.cta}>
            Browse destinations
          </Link>
        </div>
      </section>

      <main className={styles.main}>
        <div className={styles.sectionHead}>
          <h2>Popular right now</h2>
          <Link href="/destinations">See all destinations</Link>
        </div>

        <div className={styles.grid}>
          {featured.map((place) => (
            <Link href={place.href} key={place.name} className={styles.card}>
              <Image src={place.image} alt={`${place.name}, ${place.country}`} fill
                sizes="(max-width: 500px) 100vw, 33vw" className={styles.cardImage}/>
              <div className={styles.cardShade} />
              <div className={styles.cardText}>
                <span>{place.country}</span>
                <h3>{place.name}</h3>
                <p>{place.blurb}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Travel Guide</p>
        <Link href="/about">About this guide</Link>
      </footer>
    </div>
  );
}