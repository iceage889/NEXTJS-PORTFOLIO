import About from "./components/About";
import Hero from "./components/Hero";
import RecentProject from "./components/RecentProject";

export default function Home() {
  return (
    <main className="bg-white dark:bg-black flex justify-center items-center mx-auto px-5 sm:px-10">
      <div className="max-w-7xl w-full">
        <Hero />
        <About />
        <RecentProject />
      </div>
    </main>
  );
}
