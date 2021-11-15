import Card from "../utilities/Card";

const MobileMap = () => {
  const Content = () => (
    <div className="mt-4 flex items-start justify-between">
      <div>
        <h4 className="text-base font-bold font-inter text-black tracking-wider">Restaurant餐廳名稱</h4>
        <p className="font-inter text-sm tracking-wider text-black font-medium mb-1">異國餐廳料理</p>
        <p className="font-inter text-sm text-black">營業時間  14:00-22:00</p>
        <span className="flex items-center">
          <p className="font-inter text-xs text-black mr-0.5">價格</p>
          <i className="fas fa-dollar-sign text-gray-9 mx-0.5 text-base"/>
          <i className="fas fa-dollar-sign text-gray-4 mx-0.5 text-base"/>
          <i className="fas fa-dollar-sign text-gray-4 mx-0.5 text-base"/>
          <i className="fas fa-dollar-sign text-gray-4 mx-0.5 text-base"/>
        </span>
      </div>
      <ul className="flex items-center">
        <li className="bg-gray-0 border-primary-light border-1 rounded-3xl w-10 h-8 align-exact-center mr-2">
          <button
            className="font-inter font-bold text-primary"
          >
            <i className="far fa-bookmark text-base"/>
          </button>
        </li>
        <li className="bg-gray-0 border-primary-light border-1 rounded-3xl w-10 h-8 align-exact-center mr-2">
          <button
            className="font-inter font-bold text-primary"
          >
            <i className="fas fa-phone text-base"/>
          </button>
        </li>
        <li className="bg-secondary-light border-secondary-light border-1 rounded-3xl w-10 h-8 align-exact-center mr-2">
          <button
            className="font-inter font-bold text-white"
          >
            <i className="fas fa-location-arrow text-base"/>
          </button>
        </li>
      </ul>
    </div>
  )

  return (
    <div className="w-screen h-[700px] bg-primary mt-6 relative">
      <div className="absolute rounded-2xl bg-gray-0 w-[358px] h-[269px] bottom-6 right-1/2 translate-x-1/2">
        <Card
          device="mobile"
          content={<Content/>}
        />
      </div>
    </div>
  )
}

export default MobileMap
