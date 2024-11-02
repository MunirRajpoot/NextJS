'use client'
import Link from "next/link";
import styles from "./page.module.css";
import EventsStateFunctions from "@/components/EventsStateFunctions";

export default function Home() {
 
  return (
    <main className={styles.main}>
   <h2>Employee</h2>
      <Link href={'/add-emp'}>Add Employee</Link>
            <br/>
            <Link href={'/get-emp'}>Get Employee</Link>
      {/* <EventsStateFunctions /> */}
    </main>

  );
}
