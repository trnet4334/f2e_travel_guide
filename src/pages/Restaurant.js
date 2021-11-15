import Header from "../components/restaurant/Header"
import Feature from "../components/restaurant/Feature";
import Special from "../components/restaurant/Special";
import About from "../components/restaurant/About";
import {useState} from "react";

const Restaurant = () => {
  const [active, setActive] = useState('About')

  return (
    <div className="w-screen h-auto">
      <Header/>
      <div className="py-10 md:py-20 w-full h-auto align-exact-center">
        <div className="grid grid-rows-4 grid-cols-3 md:grid-cols-4 md:grid-rows-2 gap-2 md:gap-5 w-full h-full px-2 md:px-10 h-[245px] sm-r:h-[450px] md-r:h-[350px] lg:h-[486px]">
          <div className="col-span-3 row-span-3 md:col-span-2 md:row-span-2 bg-primary rounded-tl-2xl rounded-tr-2xl md:rounded-bl-2xl md:rounded-tr-none"></div>
          <div className="bg-special-1 bg-center bg-cover rounded-bl-2xl md:rounded-none"/>
          <div className="bg-special-2 bg-center bg-cover rounded-none md:rounded-tr-2xl"/>
          <div className="bg-special-3 bg-center bg-cover rounded-br-2xl md:rounded-none"/>
          <div className="bg-special-4 bg-center bg-cover rounded-br-2xl"/>
        </div>
      </div>
      <div className="px-2 sm:px-10 w-full h-auto pb-6 sm:pb-10">
        <ul className="flex items-center">
          <li className="bg-gray-0 border-primary-light border-1 rounded-3xl w-24 h-14 align-exact-center mr-2">
            <button
              className="font-inter font-bold text-2xl text-primary"
              onClick={() => setActive('About')}
            >
              關於
            </button>
          </li>
          <li className="bg-gray-0 border-primary-light border-1 rounded-3xl w-24 h-14 align-exact-center mr-2">
            <button
              className="font-inter font-bold text-2xl text-primary"
              onClick={() => setActive('Feature')}
            >
              菜色
            </button>
          </li>
          <li className="bg-gray-0 border-primary-light border-1 rounded-3xl w-24 h-14 align-exact-center mr-2">
            <button
              className="font-inter font-bold text-2xl text-primary"
              onClick={() => setActive('Special')}
            >
              氣氛
            </button>
          </li>
        </ul>
      </div>
      <div className="px-2 sm:px-10 w-full h-[0.5px] mb-10">
        <div className="w-full h-full bg-primary-light"/>
      </div>
      { active === 'About' && <About/> }
      { active === 'Feature' && <Feature/> }
      { active === 'Special' && <Special/> }
    </div>
  )
}

export default Restaurant
