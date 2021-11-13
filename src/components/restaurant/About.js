const About = () => {
  const serviceList = [
    { name: '寵物友善', iconClass: 'far fa-smile-beam' },
    { name: '無障礙設備', iconClass: 'fas fa-wheelchair' },
    { name: 'WIFI', iconClass: 'fas fa-wifi' },
    { name: '合作停車場', iconClass: 'fas fa-car' },
    { name: '空調設備', iconClass: 'fas fa-fan' },
    { name: '無菸環境', iconClass: 'fas fa-smoking-ban' },
    { name: '置物空間', iconClass: 'fas fa-briefcase' },
    { name: '親子友善', iconClass: 'fas fa-baby-carriage' },
  ]

  return (
    <div className="px-2 sm:px-10 mb-40 w-full h-auto">
      <div className="w-full h-auto mb-10">
        <h4 className="mb-6 text-gray-9 font-inter font-bold text-xl">基本資訊</h4>
        <ul className="text-base text-gray-9 tracking-wider font-inter">
          <li>
            <p>餐廳風格：地方特產</p>
          </li>
          <li>
            <p>營業時間：10:00-14:00｜16:00-22:00</p>
          </li>
          <li className="flex items-center">
            <p>聯絡電話：02-00000000</p>
            <i className="fas fa-link text-lg text-primary ml-4 cursor-pointer"/>
          </li>
          <li className="flex items-center">
            <p>地址：台北市</p>
            <i className="fas fa-link text-lg text-primary ml-4 cursor-pointer"/>
          </li>
          <li className="flex items-center">
            <p>停車場地址：台北市</p>
            <i className="fas fa-link text-lg text-primary ml-4 cursor-pointer"/>
          </li>
        </ul>
      </div>
      <div className="w-full h-auto mb-10">
        <h4 className="mb-6 text-gray-9 font-inter font-bold text-xl">服務資訊</h4>
        <ul className="flex flex-wrap w-full lg:w-[800px]">
          {
            serviceList.map((item, index) =>
              <li className="flex items-center w-[200px] xs-max:w-[120px] mb-6 xs-max:mb-4">
                <i className={`${item.iconClass} text-xl text-gray-9 mr-4`}/>
                <span className="font-inter text-base text-gray-9">{item.name}</span>
              </li>
            )
          }
        </ul>
      </div>
      <div className="w-full h-auto">
        <h4 className="mb-6 text-gray-9 font-inter font-bold text-xl">餐廳地圖</h4>
        <div className="w-full h-[50vw] rounded-xl bg-primary"></div>
      </div>
    </div>
  )
}

export default About
