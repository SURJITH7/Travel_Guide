"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = async () => {
    const response = await fetch("/api/auth/logout", {
      method: "POST",
    });

    if (response.ok) {
      router.push("/login");
    }
  };

  return (
    <nav className={styles.navbar}>
      <div>
        <Link href="/" className={styles.logo}>
          Travel Guide
        </Link>
      </div>

      <div className={styles.links}>
        <Link href="/" className={styles.link}>
          Home
        </Link>

        <Link href="/destinations" className={styles.link}>
          Destinations
        </Link>

        <Link href="/about" className={styles.link}>
          About
        </Link>

        <button onClick={handleLogout} className={styles.logoutButton}>
          Logout
        </button>
      </div>
    </nav>
  );
}
