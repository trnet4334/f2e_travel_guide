import Card from "../utilities/Card";

const Result = () => {
  const selections = [
    { name: '熱門選擇', icon: 'fas fa-thumbs-up' },
    { name: '異國料理', icon: 'fas fa-plane' },
    { name: '地方特產', icon: 'fas fa-mountain' },
    { name: '小吃攤販', icon: 'fas fa-cheese' },
    { name: '其他', icon: 'fas fa-utensils' },
  ]

  const Content = () => (
    <div>
      <h4 className="text-2xl font-inter text-black">Restaurant餐廳名稱</h4>
      <div className="flex items-center">
        <div className="text-black flex items-center">
          <p className="text-sm">距離</p>
          <p className="text-base ml-1.5">10km</p>
        </div>
        <div className="flex items-center ml-5">
          <p className="mr-1 text-black text-sm mr-0.5">價格</p>
          <i className="fas fa-dollar-sign text-gray-9 mx-0.5 w-4 h-4 md:w-5 md:h-5"/>
          <i className="fas fa-dollar-sign text-gray-4 mx-0.5 w-4 h-4 md:w-5 md:h-5"/>
          <i className="fas fa-dollar-sign text-gray-4 mx-0.5 w-4 h-4 md:w-5 md:h-5"/>
          <i className="fas fa-dollar-sign text-gray-4 mx-0.5 w-4 h-4 md:w-5 md:h-5"/>
        </div>
      </div>
    </div>
  )

  return (
    <section className="px-10 pt-16 pb-40 w-screen h-auto">
      <div>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-gray-9 font-inter font-black text-base">鄰近區域 ｜ 現在就吃</span>
            <h2 className="text-black font-inter font-bold text-3xl tracking-wider"><u>中山區</u>熱門美食</h2>
          </div>
          <div className="flex items-center">
            <span className="text-primary font-bold font-inter tracking-wider text-2xl">查看更多</span>
            <div className="flex ml-7">
              <button className="w-12 h-12 bg-gray-2 rounded-full align-exact-center mr-2 relative">
                <i className="fas fa-chevron-left fa-2x text-primary absolute-center"/>
              </button>
              <button className="w-12 h-12 bg-gray-2 rounded-full align-exact-center relative">
                <i className="fas fa-chevron-right fa-2x text-primary absolute-center"/>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((index) =>
            <Card
              content={<Content/>}
              key={index}
            />
          )}
        </div>
      </div>
      <div className="mt-6">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-gray-9 font-inter font-black text-base">鄰近區域 ｜ 現在就吃</span>
            <h2 className="text-black font-inter font-bold text-3xl tracking-wider"><u>中山區</u>熱門美食</h2>
          </div>
          <div className="flex items-center">
            <span className="text-primary font-bold font-inter tracking-wider text-2xl">查看更多</span>
            <div className="flex ml-7">
              <button className="w-12 h-12 bg-gray-2 rounded-full align-exact-center mr-2 relative">
                <i className="fas fa-chevron-left fa-2x text-primary absolute-center"/>
              </button>
              <button className="w-12 h-12 bg-gray-2 rounded-full align-exact-center relative">
                <i className="fas fa-chevron-right fa-2x text-primary absolute-center"/>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          {[1, 2, 3, 4].map((index) =>
            <Card
              content={<Content/>}
              key={index}
            />
          )}
        </div>
      </div>
      <div className="mt-6">
        <h3 className="mb-6 text-3xl font-inter tracking-wider font-bold">已經想好類別？</h3>
        <ul className="flex flex-wrap">
          {selections.map((item, index) =>
            <li
              key={index}
              className="mr-4"
            >
              <button className="flex items-center py-6 px-12 h-auto w-auto bg-gray-0 rounded-[72px] text-primary">
                <i className={`${item.icon} w-5 h-5 mr-4`}/>
                <p className="text-3xl tracking-wider font-inter font-bold">{item.name}</p>
              </button>
            </li>
          )}
        </ul>
      </div>
    </section>
  )
}

export default Result
