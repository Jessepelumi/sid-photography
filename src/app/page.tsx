import Header from "./views/Header/Header";

export default function Home() {
  return (
    <div className="relative">
      <img
        src="/images/SID-logo.png"
        alt="SID Photography"
        className="w-1/6 md:w-1/12 absolute top-14 left-1/2 transform -translate-x-1/2 z-10"
      />
      <Header />
    </div>
  );
}
