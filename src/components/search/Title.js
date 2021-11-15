const Title = () => {
  return (
    <div className="px-2 lg:px-0">
      <div className="w-full h-auto mb-10">
        <h4 className="font-inter text-xs md:text-sm text-black tracking-wider mb-3">200間餐廳｜11/06 晚｜兩位大人</h4>
        <h2 className="font-inter text-gray-9 font-black text-3xl lg:text-5xl tracking-wider"><u>台北市</u>·<u>中山區</u>餐廳</h2>
      </div>
      <div className="w-full h-auto">
        <ul className="flex items-center">
          <li className="bg-gray-0 border-primary-light border-1 rounded-3xl w-20 h-8 lg:w-24 lg:h-14 align-exact-center mr-2">
            <button
              className="font-inter font-bold text-xs lg:text-2xl text-primary"
            >
              區域
            </button>
          </li>
          <li className="bg-gray-0 border-primary-light border-1 rounded-3xl w-20 h-8 lg:w-24 lg:h-14 align-exact-center mr-2">
            <button
              className="font-inter font-bold text-xs lg:text-2xl text-primary"
            >
              價格
            </button>
          </li>
          <li className="bg-gray-0 border-primary-light border-1 rounded-3xl w-20 h-8 lg:w-24 lg:h-14 align-exact-center mr-2">
            <button
              className="font-inter font-bold text-xs lg:text-2xl text-primary"
            >
              類別
            </button>
          </li>
        </ul>
        <div className="w-full h-[1px] bg-primary-light mt-6 md:mt-10"/>
      </div>
    </div>
  )
}

export default Title
