import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

function HistoryItem(props: {
  title: string;
  date: string;
  location: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="prose flex mb-10 md:flex-row flex-col max-w-full">
      <div className="flex-1">
        <h3 className="mt-0 mb-1 text-lg leading-5">{props.title}</h3>
        <div className="flex flex-row">
          <p className="prose-gray my-0 md:text-sm text-xs">{props.date}</p>
          <p className="prose-gray my-0 md:text-sm text-xs ml-4">
            {props.location}
          </p>
        </div>
        <div className="text-sm mt-3">{props.children}</div>
      </div>
    </div>
  );
}

function InterestingIcon(props: { src: string }) {
  return <img src={props.src} className="max-w-10 max-h-10 m-0 mr-1" />;
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <div className="container py-20 flex flex-col">
          {/* Avatar and Title*/}
          <div className="flex md:flex-row flex-col items-center mb-20">
            {/* Avatar */}
            <div className="avatar mb-4 md:mb-0">
              <div className="w-40 rounded-full">
                <img src="/imgs/profile.png" />
              </div>
            </div>
            {/* Title */}
            <div className="prose prose-gray max-w-none md:ml-10 md:text-left text-center">
              <h1 className="my-0">Hwansoo Kim</h1>
              <h3 className="md:mt-1 my-0">
                who loves software development and people around me and
              </h3>
              <div className="mt-2 flex md:flex-row flex-col">
                <h3 className="my-0">is interested in</h3>
                <div className="flex flex-1 md:justify-start justify-center items-center ml-4 not-prose">
                  <InterestingIcon src="/imgs/rust-icon.png" />
                  <InterestingIcon src="/imgs/cncf.jpeg" />
                  <InterestingIcon src="/imgs/k8s.png" />
                  <InterestingIcon src="/imgs/gc.png" />
                  <InterestingIcon src="/imgs/aws.png" />
                </div>
              </div>
            </div>
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
            <div className="carousel h-56 w-full space-x-8">
              <div className="carousel-item">
                <img
                  src="/imgs/futureplay.jpg"
                  alt="Futureplay"
                  className="rounded-box"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/imgs/honeybees.jpg"
                  alt="Honeybees"
                  className="rounded-box"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/imgs/wahome.jpg"
                  alt="Wahome"
                  className="rounded-box"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/imgs/8rowing-2.jpg"
                  alt="8rowing"
                  className="rounded-box"
                />
              </div>
            </div>
          </div>
          {/* Stats */}
          {/* <div className="stats shadow w-[50rem] mb-10">
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
          </div> */}
          {/* History */}
          <div className="w-full">
            <HistoryItem
              title="Technical Advisor at Presidential Committee on the Digital Platform Government"
              date="Oct 2023 ~ Current"
              location="Seoul, Korea"
            >
              <p className="my-0">
                • Advising the government on the cloud digital transformation of
                government services.
              </p>
            </HistoryItem>
            <HistoryItem
              title="Director of Engineering at STCLab, Inc"
              date="Feb 2023 ~ Current"
              location="Seoul, Korea"
            >
              <p className="my-0">
                • Creator of the open-source project called Wave Autoscale -{" "}
                <a href="https://waveautoscale.com">
                  https://waveautoscale.com
                </a>
              </p>
              <p className="my-0">
                • Leading and developing cloud-native products for autoscaling
                across various platforms using Rust.
              </p>
            </HistoryItem>
            <HistoryItem
              title="CTO & Director at FuturePlay"
              date="Jan 2021 ~ Jan 2023"
              location="Seoul, Korea"
            >
              <p className="my-0">
                • Led and developed the digital transformation of the startup
                accelerator developing online services with our dev team.
              </p>
              <p className="my-0">
                • Enhanced the software development and the lifecycle by using
                trending tech stacks and methodologies like Relay(GraphQL) with
                Hasura, AWS serverless stacks, and BDD(Cucumber.js)
              </p>
              <p className="my-0">
                • Provided technical consulting for portfolio companies we've
                invested in to help their growth.
              </p>
            </HistoryItem>
          </div>
          <div>
            {/* Read more on Linkedin */}
            <div className="prose prose-gray max-w-none mb-10">
              <p className="">
                <a
                  href="https://linkedin.com/in/hwansookim"
                  target="_blank"
                  className="text-blue-500"
                >
                  See more on Linkedin
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
