import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <section
      className="h-[45rem] w-screen relative"
      style={{
          'background': 'radial-gradient(62.76% 62.76% at 50% 50%, #000051 27.8%, #1A237E 84.88%)',
          'boxShadow': '0px 4px 4px rgba(0, 0, 0, 0.08)'
      }}
    >
      <div className="absolute left-[23.5%] top-[25%] z-[3]">
        <h1 className="font-roboto font-black text-secondary-light text-8xl flex flex-col">
          <span>EAT</span>
          <span>RIGHT</span>
          <span>NOW</span>
        </h1>
        <span className="font-roboto font-bold text-base text-secondary-light tracking-widest">要吃東西，而且就是現在</span>
      </div>
      <div role="img" className="bg-header-img w-[740px] h-[550px] bg-cover bg-center absolute right-[17.5%] top-[50px]"/>
      <SearchBar/>
    </section>
  )
}

export default Header
