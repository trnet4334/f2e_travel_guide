import Card from "../utilities/Card";
import Pagination from "../utilities/Pagination";
import Title from "./Title";
import MobileMap from "./MobileMap";
import {useState} from "react";
import {Link} from "react-router-dom";

const Result = () => {
  const [currentTab, setCurrentTab] = useState('list')
  const images = ['bg-special-1', 'bg-special-2', 'bg-special-3', 'bg-special-4',]

  const Content = () => (
    <div className="md:ml-4 mt-5 md:mt-0">
      <Link to="/restaurant">
        <h4 className="text-xl font-bold font-inter text-black tracking-wider">Restaurant餐廳名稱</h4>
      </Link>
      <p className="font-inter text-base tracking-wider text-black mb-3">異國餐廳料理</p>
      <span className="flex items-center">
        <p className="font-inter text-sm text-black mr-0.5">價格</p>
        <i className="fas fa-dollar-sign text-gray-9 mx-0.5 md:mx-1 text-base md:text-xl"/>
        <i className="fas fa-dollar-sign text-gray-4 mx-0.5 md:mx-1 text-base md:text-xl"/>
        <i className="fas fa-dollar-sign text-gray-4 mx-0.5 md:mx-1 text-base md:text-xl"/>
        <i className="fas fa-dollar-sign text-gray-4 mx-0.5 md:mx-1 text-base md:text-xl"/>
      </span>
      <p className="font-inter text-sm text-black mb-4 md:mb-7">營業時間  14:00-22:00</p>
      <ul className="flex items-center">
        <li className="bg-gray-0 border-primary-light border-1 rounded-3xl w-14 lg:w-20 h-10 lg:h-12 align-exact-center mr-2">
          <button
            className="font-inter font-bold text-primary"
          >
            <i className="far fa-bookmark text-xs lg:text-sm"/>
          </button>
        </li>
        <li className="bg-gray-0 border-primary-light border-1 rounded-3xl w-14 lg:w-20 h-10 lg:h-12 align-exact-center mr-2">
          <button
            className="font-inter font-bold text-primary"
          >
            <i className="fas fa-phone text-xs lg:text-sm"/>
          </button>
        </li>
        <li className="bg-secondary-light border-secondary-light border-1 rounded-3xl w-14 lg:w-20 h-10 lg:h-12 align-exact-center mr-2">
          <button
            className="font-inter font-bold text-white"
          >
            <i className="fas fa-location-arrow text-xs lg:text-sm"/>
          </button>
        </li>
      </ul>
    </div>
  )

  return (
    <section className="w-full lg:w-[42.5%] lg:px-10 pt-10 lg:pt-20 pb-28">
      <div className="block lg:hidden mb-10 px-2">
        {
          currentTab === 'list' &&
          <button
            className="flex items-center rounded-3xl border-1 border-primary bg-gray-0 py-2 px-4 outline-none"
            onClick={() => setCurrentTab('map')}
          >
            <i className="fas fa-location-arrow text-sm mr-2 text-primary"/>
            <p className="font-bold text-xs font-roboto text-primary tracking-widest">顯示地圖</p>
          </button>
        }
        {
          currentTab === 'map' &&
          <button
            className="flex items-center rounded-3xl border-1 border-primary bg-gray-0 py-2 px-4 outline-none"
            onClick={() => setCurrentTab('list')}
          >
            <i className="fas fa-list-ul text-sm mr-2 text-primary"/>
            <p className="font-bold text-xs font-roboto text-primary tracking-widest">顯示列表</p>
          </button>
        }
      </div>
      <Title/>
      {
        currentTab === 'map' &&
          <MobileMap/>
      }
      {
        currentTab === 'list' &&
        <div>
          <div className="w-full mb-20 px-2 lg:px-0">
            {
              images.map((item, index) =>
                <div>
                  <Card
                    key={index}
                    content={<Content/>}
                    image={item}
                    cardDirection="row"
                  />
                  <div className="w-full h-[1px] bg-primary-light hidden lg:block"/>
                </div>
              )
            }
          </div>
          <div className="w-full">
            <Pagination/>
            <p className="font-inter text-xs md:text-sm text-black tracking-wider mt-6 text-center">200間餐廳｜11/06 晚｜兩位大人</p>
          </div>
        </div>
      }
    </section>
  )
}

export default Result
