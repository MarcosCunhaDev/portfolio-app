"use client";
import Image from "next/image";
import React, { ReactNode, useState, useTransition } from "react";
import TabButton from "./TabButton";

interface TabOptionI {
  label: "Skills" | "Education" | "Experience";
  id: string;
  content?: ReactNode;
}

const TAB_DATA: TabOptionI[] = [
  {
    label: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>React Native</li>
        <li>Node Js</li>
        <li>Express</li>
        <li>JavaScript</li>
        <li>PostgreSQL</li>
      </ul>
    ),
  },
  {
    label: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelors Degree Electrical Engineering</li>
        <li>University of Brasilia</li>
      </ul>
    ),
  },
  {
    label: "Experience",
    id: "experience",
    content: <ul className="list-disc pl-2"></ul>,
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          alt="about-image.png"
          src="/images/about-image.png"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a FullStack developer with passion for creating interactive and
            responsive web and mobile applications. I have experience working
            with JavaScript, TypeScript, React, React Native, Next, Node.js,
            Express, PostgreSQL, Sequelize, HTML, CSS and Git. I am quick leaner
            and I am always looking to expand my knowledge and skill set. I am
            team player and excited to work with others to create amazing
            applications.
            {/* talk about my experience time */}
            {/* talk about my soft skills a little */}
          </p>
          <div className="flex flex-row mt-8">
            {TAB_DATA.map((tabOption, index) => {
              return (
                <TabButton
                  key={tabOption.id}
                  selectTab={() => handleTabChange(tabOption.id)}
                  active={tab === tabOption.id}
                >
                  {tabOption.label}
                </TabButton>
              );
            })}
          </div>
          <div className="mt-6">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
