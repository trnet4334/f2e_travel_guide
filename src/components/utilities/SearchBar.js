import Dropdown from "./Dropdown";
import {useState, useRef, useEffect} from "react";
import {Link} from "react-router-dom";

const SearchBar = () => {
  const areas = [
    {
      area: '北部',
      arb: 'north',
      city: ['全選', '基隆', '台北', '新北', '桃園', '新竹', '苗栗']
    },
    {
      area: '中部',
      arb: 'center',
      city: ['全選', '台中', '彰化', '南投']
    },
    {
      area: '南部',
      arb: 'south',
      city: ['雲林', '嘉義', '台南', '高雄', '屏東']
    },
    {
      area: '東部',
      arb: 'east',
      city: ['台東', '花蓮', '宜蘭']
    },
    {
      area: '離島',
      arb: 'outside',
      city: ['澎湖', '金門', '馬祖']
    }
  ]
  const [openLocationFilter, setOpenLocationFilter] = useState(false)
  const [openTimeFilter, setOpenTimeFilter] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [areaFilter, setAreaFilter] = useState([])
  const dropdownRef = useRef()

  const DropdownTimeContent = () => (
    <div className="w-full py-6 align-exact-center">
      <div className="m-auto">
        <ul className="text-primary text-base md:text-2xl font-bold tracking-wider font-inter text-left">
          <li className="active:text-secondary-light mb-6 cursor-pointer">現在</li>
          <li className="active:text-secondary-light mb-6 cursor-pointer">上午 04:30-10:30</li>
          <li className="active:text-secondary-light mb-6 cursor-pointer">中午 10:30-15:30</li>
          <li className="active:text-secondary-light mb-6 cursor-pointer">晚上 15:30-22:30</li>
          <li className="active:text-secondary-light cursor-pointer">宵夜 22:30-04:30</li>
        </ul>
      </div>
    </div>
  )

  const DropdownLocationContent = () => (
    <div className="w-full py-6 h-full flex">
      <ul className="w-1/2 md:w-1/4 h-full border-r-2 border-primary-light list-none text-primary text-base md:text-2xl font-inter font-bold tracking-wider text-center">
        <li
          className="active:text-secondary-light mb-6 cursor-pointer"
          onClick={() => setAreaFilter([areas.filter(item => item['arb'] ==='north')])}
        >北部</li>
        <li
          className="active:text-secondary-light mb-6 cursor-pointer"
          onClick={() => setAreaFilter([areas.filter(item => item['arb'] === 'center')])}
        >
          中部
        </li>
        <li
          className="active:text-secondary-light mb-6 cursor-pointer"
          onClick={() => setAreaFilter([areas.filter(item => item['arb'] === 'south')])}
        >
          南部
        </li>
        <li
          className="active:text-secondary-light mb-6 cursor-pointer"
          onClick={() => setAreaFilter([areas.filter(item => item['arb'] === 'east')])}
        >
          東部
        </li>
        <li
          className="active:text-secondary-light cursor-pointer"
          onClick={() => setAreaFilter([areas.filter(item => item['arb'] === 'outside')])}
        >
          離島
        </li>
      </ul>
      <div className="flex flex-wrap w-full">
        {
          areaFilter.length === 0 ? '' :
          areaFilter[0][0].city.map((item, index) =>
            <span className="w-full md:w-1/3 text-center align-exact-center" key={index}>
              <p className="text-primary text-base md:text-2xl font-bold tracking-wider font-inter">{item}</p>
            </span>
          )
        }
      </div>
    </div>
  )

  useEffect(() => {
    // If the clicked target is not inside the ref element,
    // then close the element.
    const checkIfClickedOutside = e => {
      if (isDropdownOpen && dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false)
        setOpenLocationFilter(false)
        setOpenTimeFilter(false)
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }

  }, [isDropdownOpen])

  return (
    <div className="flex justify-between items-center border-[1px] border-purple rounded-full pr-4 md:pr-6 bg-[#FAFAFA] h-20 w-[320px] md:w-[640px]" ref={dropdownRef}>
      <div className="flex items-center w-[280px] md:w-[550px] h-full relative">
        <button
          className="px-6 md:px-16 py-4 rounded-full text-primary-light focus:border-primary-light focus:border-2 hover:border-primary-light hover:border-[1px] active:text-secondary-light"
          onClick={() => {
            if (openTimeFilter === true) {
              setOpenTimeFilter(false)
              setIsDropdownOpen(false)
            }
            setIsDropdownOpen(oldState => !oldState)
            setOpenLocationFilter(oldState => !oldState)
          }}
        >
          <span className="flex items-center text-primary">
            <i className="fas fa-map-marker-alt h-4 md:h-5 w-4 md:w-5"/>
            <p className="font-inter text-base font-black ml-2">位置</p>
          </span>
          <p className="h-4 md:h-6 text-base font-medium text-primary-light active:text-secondary-light">想在哪裡吃飯？</p>
        </button>
        <Dropdown
          isOpen={openLocationFilter}
          content={<DropdownLocationContent/>}
        />
        <div className="w-0.5 h-8 mx-4 bg-primary"/>
        <button
          className="pl-6 md:px-16 py-4 rounded-full text-primary-light focus:border-primary-light focus:border-2 hover:border-primary-light hover:border-[1px] active:text-secondary-light"
          onClick={() => {
            if (openLocationFilter === true) {
              setOpenLocationFilter(false)
              setIsDropdownOpen(false)
            }
            setIsDropdownOpen(oldState => !oldState)
            setOpenTimeFilter(oldState => !oldState)
          }}
        >
          <span className="flex items-center text-primary">
            <i className="fas fa-clock h-4 md:h-5 w-4 md:w-5"/>
            <p className="font-inter text-base font-black ml-2">時間</p>
          </span>
          <p className="h-4 md:h-6 text-base font-medium">選擇時間</p>
        </button>
        <Dropdown
          isOpen={openTimeFilter}
          content={<DropdownTimeContent/>}
        />
      </div>
      <Link to="/search">
        <button className="align-exact-center bg-secondary-light rounded-full w-10 md:w-16 h-10 md:h-16">
          <i className="text-white fas fa-search w-3.5 md:w-5 h-3.5 md:h-3.5"/>
        </button>
      </Link>
    </div>
  )
}

export default SearchBar
