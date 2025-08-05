import React from "react";
import Header from "./reuseable-components/Header";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/src/app/components/ui/3d-card";
import { Projects } from "@/data/Projects";
import Image from "next/image";

export default function RecentProject() {
  return (
    <section id="recent-projects">
      <Header title="Recent Project" />
      <div className="grid lg:grid-cols-2">
        {Projects.map((projects) => {
          return (
            <CardContainer className="inter-var" key={projects.id}>
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {projects.projectTitle}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {projects.projectDescription}
                </CardItem>
                <CardItem
                  translateZ="100"
                  rotateX={20}
                  rotateZ={-10}
                  className="w-full mt-4"
                >
                  <Image
                    src={projects.projectImage}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    translateX={40}
                    as="button"
                    href={projects.projectPreviewLink}
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    <a href={projects.projectSourceCode}>Source Code</a>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          );
        })}
      </div>
    </section>
  );
}
