import { CaretDoubleDown } from "@phosphor-icons/react/dist/ssr";

const Header = () => {
  return (
    <header className="h-screen w-screen bg-hero-mobile md:bg-hero-tab lg:bg-hero-laptop 2xl:bg-hero-desktop bg-cover bg-center flex flex-col justify-center items-center relative">
      <h1 className="font-cabinetGrotesk font-black text-center text-6xl md:text-8xl w-11/12 lg:w-3/5">
        Visual Poetry in Every Shot, Telling Amazing Stories.
      </h1>
      <div className="flex items-center absolute bottom-5 animate-bounce">
        <p className="pr-1">scroll down</p>
        <span>
          <CaretDoubleDown size={12} weight="bold" />
        </span>
      </div>
    </header>
  );
};

export default Header;
