"use client";

import ProductCard from "@/components/ProductCard/ProductCard";
import Image from "next/image";
import Link from "next/link";
import scenery from "@/assets/images/scenery.jpg";
import { Metadata } from "next";
// import HeavyComponent from "@/components/HeavyComponent";
import { useState } from "react";
import dynamic from "next/dynamic";
// import _ from "lodash";
// const HeavyComponent = dynamic(() => import("@/components/HeavyComponent"), {
//   ssr: false,
//   loading: () => <p>Loading...</p>,
// });

export default function Home() {
  const [isVisible, setVisible] = useState(false);
  return (
    <main>
      <h1>Hello, world</h1>
      <Link href="/users" className="font-mtchaealge">
        Users
      </Link>
      {/* <button className="btn" onClick={() => setVisible(true)}>
        show visible
      </button> */}
      {/* {isVisible && <HeavyComponent />} */}
      <button
        className="btn"
        onClick={async () => {
          const _ = (await import("lodash")).default;
          const users = [
            {
              name: "c",
            },
            {
              name: "b",
            },
            {
              name: "a",
            },
          ];
          const sorted = _.orderBy(users, ["name"]);
          console.log(sorted);
        }}
      >
        show visible
      </button>
      <ProductCard />
      {/* <Image src={scenery} alt="scenery" /> */}
      <div className="relative">
        <Image
          src="https://oss.perhaps.site/other/scenery.jpg"
          alt="scenery"
          fill
          className="object-cover"
          quality={75}
          priority
        />
      </div>

        <div></div>
        <div></div>
    </main>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  // const product = await fetch("");
  return {
    title: "product.title",
    description: "...",
  };
}
