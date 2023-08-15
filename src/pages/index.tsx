import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary','bg-blue-500', styles.heroBanner)}>
//       <div className="container">
//         <h1 className="hero__title">{siteConfig.title}</h1>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/intro">
//             Docusaurus Tutorial - 5min ⏱️
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <div className="container py-20 flex flex-col">
          {/* Avatar */}
          <div className="avatar mb-10">
            <div className="w-24 rounded-full">
              <img src="/imgs/profile.png" />
            </div>
          </div>
          {/* Title */}
          <div className="prose prose-gray max-w-none mb-10">
            <h1 className="my-0">Hwansoo Kim</h1>
            <h3 className="mt-1">
              who loves software development and people around me
            </h3>
          </div>
          {/* Description */}
          <div className="prose mb-10">
            <p>
              Hwansoo Kim is a seasoned software engineer and technical lead
              with extensive experience spanning various areas of software
              engineering. This includes expertise in web, mobile, cloud
              infrastructure, data engineering, and IoT products. His career has
              consistently demonstrated his ability to analyze business
              requirements and develop optimal software solutions, while also
              excelling in leadership roles, leading technical teams, and
              managing software development lifecycles.
            </p>
          </div>
          {/* Carousel */}
          <div className="mb-10">
            <div className="carousel h-56 w-full">
              <div className="carousel-item">
                <img src="/imgs/futureplay.jpg" alt="Burger" />
              </div>
              <div className="carousel-item">
                <img src="/imgs/honeybees.jpg" alt="Burger" />
              </div>
              <div className="carousel-item">
                <img src="/imgs/wahome.jpg" alt="Burger" />
              </div>
              <div className="carousel-item">
                <img src="/imgs/8rowing.jpg" alt="Burger" />
              </div>
            </div>
          </div>
          {/* Stats */}
          <div className="stats shadow w-[50rem] mb-10">
            <div className="stat">
              <div className="stat-title">Companies I Joined</div>
              <div className="stat-value">5</div>
              <div className="stat-desc">From Jul 2009</div>
            </div>

            <div className="stat">
              <div className="stat-title">Startups I Cofounded</div>
              <div className="stat-value">4</div>
              <div className="stat-desc">From Jul 2012</div>
            </div>
          </div>
          {/* History */}
          <div>
            <div className="prose">
              <h3>
                Feb 2023 ~ Current - Director of Engineering at STCLab, Inc
              </h3>
              <p>
                Leading and developing cloud-native products for autoscaling
                across various platforms using Rust.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
