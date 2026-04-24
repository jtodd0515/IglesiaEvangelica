import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";// Optional CSS module

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src="/churchLogo.jpg" alt="Church Logo" width={50} height={50} />
      </div>
      <ul className={styles.navLinks}>
        <li><Link href="/">Inicio</Link></li>
        <li><Link href="/about">Acerca de</Link></li>
        <li><Link href="/services">Horarios de servicio</Link></li>
        <li><Link href="/contact">Contacto</Link></li>
      </ul>
    </nav>
  );
}
