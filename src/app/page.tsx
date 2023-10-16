import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>co nhung luc anh nghi anh chang thoat ra duoc dau</p>
        <Link href="/facebook">Facebook</Link>
        <a href="/instagram">Instagram</a>
        <a href="/tiktok">Tiktok</a>
      </div>
    </main>
  );
}
