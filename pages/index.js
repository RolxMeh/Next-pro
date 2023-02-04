import Link from "next/link";
import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function Home() {
  function solution(pic) {
    let newArr = [];
    return newArr.push(pic);
  }

  console.log(solution("abc", "bbb"));
  return (
    <div className={styles.container}>
      <Head>
        <title>Next tutorial</title>
      </Head>
      <Link href="/about">About</Link>
      <Link href="/Profile">Profile</Link>
      <h1>Hello world</h1>
    </div>
  );
}
