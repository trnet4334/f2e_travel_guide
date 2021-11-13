import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-primary h-auto w-screen px-9">
          <div className="flex items-center justify-between h-60">
            <div className="min-w-[400px]">
              <Link to="/">
                <span className="font-inter font-black text-secondary-light text-[3.125rem] cursor-pointer">EAT RIGHT NOW</span>
              </Link>
            </div>
            <ul className="flex justify-between text-secondary-light font-inter font-bold w-3/5">
              <li className="cursor-not-allowed">關於我們</li>
              <li className="cursor-not-allowed">客戶服務</li>
              <li className="cursor-not-allowed">搜尋鄰近區域美食</li>
              <li className="cursor-not-allowed">前往已收藏餐廳</li>
            </ul>
          </div>
          <div className="flex items-center justify-center border-t-[1px] border-secondary-light h-24">
            <p className="font-roboto text-white text-xs">本網站受到 reCAPTCHA 和 Google 隱私政策的保護，且適用服務條款。</p>
          </div>
        </footer>
    )
}

export default Footer
