import { useNavigate } from "react-router-dom";

const Header = () => {
  // Back to previous page
  const navigate = useNavigate()

  return (
    <section className="w-screen h-36 bg-primary-light flex justify-between flex-wrap items-center px-4 md:px-10 py-7 md:py-10">
      <div className="flex items-center">
        <i
          className="fas fa-chevron-left text-lg text-white mr-10 cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <span className="text-white font-inter font-black text-xl md:text-5xl">RESTAURANT餐廳名稱</span>
      </div>
      <div className="flex items-center">
        <button className="w-11 h-8 md:w-20 md:h-12 rounded-3xl bg-gray-0 ml-4">
          <i className="fas fa-share-alt text-sm md:text-lg"/>
        </button>
        <button className="w-11 h-8 md:w-20 md:h-12 rounded-3xl bg-gray-0 ml-4">
          <i className="far fa-bookmark text-sm md:text-lg"/>
        </button>
        <button className="w-11 h-8 md:w-20 md:h-12 rounded-3xl bg-gray-0 ml-4">
          <i className="fas fa-location-arrow text-sm md:text-lg"/>
        </button>
        <button className="w-11 h-8 md:w-auto md:h-auto bg-secondary-light rounded-3xl bg-gray-0 ml-4 md:px-8 md:py-4">
          <i className="fas fa-phone text-sm md:text-lg text-white"/>
          <span className="font-bold text-2xl font-inter tracking-wider text-white hidden md:ml-2.5 md:inline-block">電話預訂</span>
        </button>
      </div>
    </section>
  )
}

export default Header
