import React from "react";
import Header from "./reuseable-components/Header";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="my-20 mt-40">
      <Header title="About Me" />
      <div className="grid gap-4 items-center md:[grid-template-columns:1fr_1.5fr]">
        <div>
          <Image
            src="/images/IMG_5603.jpg"
            alt="IMG_5603.jpg"
            width={500}
            height={500}
            className="w-full h-80 md:h-120 object-cover rounded-lg"
          />
        </div>
        <div className="md:text-xl text-neutral-600 dark:text-neutral-300">
          <p className="mb-3">
            Hello, I&apos;m Albert- a frontend Developer passionate about
            turning ideas into clean, responsive digital experiences. I like
            blending tools like Next,js and Tailwaind CSS to create modern, user
            friendly interfaces that look great on any device. For me, building
            on the website is about more than code- it&apos;s about crafting
            designs that feel intuitive and enagaging.
          </p>
          <p>
            Driven by Curiosity, I&apos;m always exploring new tools and design
            trends to keep growing. Whether it&apos;s building personal project,
            recreating popular apps to learn new stacks, or adding subtle
            animations, I enjoy sharing what i learn to help and inspire
            developer
          </p>
        </div>
      </div>
    </section>
  );
}
