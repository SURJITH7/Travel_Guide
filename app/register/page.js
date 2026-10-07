"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./register.module.css";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    setMessage(data.message);

    if (response.ok) {
      router.push("/login");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formBox}>
        <h1 className={styles.title}>Register New Account</h1>

        <form onSubmit={handleRegister}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Email</label>

            <input
              className={styles.input}
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Password</label>

            <input
              className={styles.input}
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className={styles.button} type="submit">
            Register
          </button>

          <p className={styles.loginText}>
            Already have an account?{" "}
            <Link href="/login" className={styles.link}>
              Login
            </Link>
          </p>

        </form>

        {message && (
          <p className={styles.message}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
}