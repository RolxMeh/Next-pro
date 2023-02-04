import Link from "next/link";
import styles from "../styles/Navbar.module.css";

function solution(pic) {
  return "*****" + pic + "*****";
}

console.log(solution(["abc", "bbb"]));
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/Profile">Profile</Link>
        <Link href="/about">About</Link>
      </div>
    </div>
  );
};

export default Navbar;
