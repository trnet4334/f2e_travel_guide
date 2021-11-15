import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-primary h-auto w-screen px-9">
          <div className="flex items-center justify-between h-60">
            <div className="w-1/2 xl:w-[400px]">
              <Link to="/">
                <span className="font-inter font-black tracking-wider text-secondary-light text-3xl xl:text-[3.125rem] lg:flex cursor-pointer">
                  <p className="mr-2">EAT</p>
                  <p className="mr-2">RIGHT</p>
                  <p>NOW</p>
                </span>
              </Link>
            </div>
            <ul className="flex flex-col xl:flex-row xl:justify-between text-secondary-light text-sm xl:text-base font-inter font-bold w-1/2 xl:w-3/5">
              <li className="cursor-pointer mb-4 xl:mb-0">關於我們</li>
              <li className="cursor-pointer mb-4 xl:mb-0">客戶服務</li>
              <li className="cursor-pointer mb-4 xl:mb-0">搜尋鄰近區域美食</li>
              <li className="cursor-pointer">前往已收藏餐廳</li>
            </ul>
          </div>
          <div className="flex items-center justify-center border-t-[1px] border-secondary-light h-24">
            <p className="font-roboto text-white text-xs">本網站受到 reCAPTCHA 和 Google 隱私政策的保護，且適用服務條款。</p>
          </div>
        </footer>
    )
}

export default Footer
