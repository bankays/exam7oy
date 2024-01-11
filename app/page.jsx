"use client";
import styles from "./page.module.css";
import Nav from "./components/nav/page";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [changeproducts, setChangeproducts] = useState("");
  console.log(changeproducts);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/?category={changeproducts}`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((erorr) => console.log(erorr));
  }, [changeproducts]);

  return (
    <main className={styles.main}>
      <p>Home</p>
      <button onClick={() => setChangeproducts("Clothes")}>clothes</button>
      <button onClick={() => setChangeproducts("Electronics")}>tech</button>
      <div className="cards">
        {products.map((product) => (
          <Link key={product.id} href={`/projects/${product.id}`}>
            <div className="card">
              <h1>{product.title}</h1>
              <h2>{product.name}</h2>
              <img className="image" src={product.images[0]} alt="" />
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
