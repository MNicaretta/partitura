import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <p>INÍCIO</p>
        <div className={styles.actions}>
          <button>novo</button>
          <button>abrir</button>
        </div>
      </div>
    </main>
  );
}
