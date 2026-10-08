import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="hero-subtitle">EXPLORE THE WORLD</p>

          <h1>
            Discover Your Next <span>Adventure</span>
          </h1>

          <p className="hero-description">
            Find beautiful destinations, unforgettable experiences,
            and travel inspiration for your next journey.
          </p>

          <Link href="/destinations" className="hero-button">
            Explore Destinations
          </Link>
        </div>
      </section>

      <section className="destinations">
        <div className="section-heading">
          <p>POPULAR PLACES</p>

          <h2>Explore Popular Destinations</h2>

          <span>
            Discover some of the most beautiful places around the world.
          </span>
        </div>

        <div className="destination-grid">
          <div className="destination-card">
            <div className="destination-image india">
              <img src="india.jpg" alt="" width={230} height={230}/>
            </div>

            <div className="destination-info">
              <h3>India</h3>

              <p>
                Culture, history, beaches and beautiful landscapes.
              </p>

              <Link href="/destinations/india">
                Explore →
              </Link>
            </div>
          </div>

          <div className="destination-card">
            <div className="destination-image bali">
              <img src="bali.jpg" alt="" width={230} height={230}/>
            </div>

            <div className="destination-info">
              <h3>Bali</h3>

              <p>
                Tropical beaches, temples and unforgettable sunsets.
              </p>

              <Link href="/destinations/bali">
                Explore →
              </Link>
            </div>
          </div>

          <div className="destination-card">
            <div className="destination-image paris">
              <img src="paris.jpg" alt="" width={210} height={230}/>
            </div>

            <div className="destination-info">
              <h3>Paris</h3>

              <p>
                Art, architecture, food and the charm of the city.
              </p>

              <Link href="/destinations/paris">
                Explore →
              </Link>
            </div>
          </div>
        </div>

        <div className="view-all">
          <Link href="/destinations">
            <button className="view-button">View All Destinations &rarr;</button>
          </Link>
        </div>
      </section>

      <section className="why-us">
        <div className="section-heading">
          <p>TRAVEL BETTER</p>

          <h2>Everything You Need For Your Journey</h2>
        </div>

        <div className="features">
          <div className="feature">
            <div className="feature-icon">🌍</div>

            <h3>Discover Places</h3>

            <p>
              Explore amazing destinations and discover places
              worth visiting.
            </p>
          </div>

          <div className="feature">
            <div className="feature-icon">💡</div>

            <h3>Travel Tips</h3>

            <p>
              Get useful information to help you plan a better trip.
            </p>
          </div>

          <div className="feature">
            <div className="feature-icon">❤️</div>

            <h3>Create Memories</h3>

            <p>
              Find experiences that can turn your journey into
              lasting memories.
            </p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Explore?</h2>

        <p>Start discovering your next destination today.</p>

        <Link href="/destinations" className="cta-button">
          Start Exploring
        </Link>
      </section>

      
    </main>
  );
}
