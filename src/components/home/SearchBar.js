const SearchBar = () => {
  return (
    <div className="flex justify-between items-center border-[1px] border-purple rounded-full pr-4 md:pr-6 bg-[#FAFAFA] h-20 w-[320px] md:w-[640px] absolute bottom-[4.5rem] left-[50%] -translate-x-1/2">
      <div className="flex items-center w-[280px] md:w-[550px] h-full">
        <button className="px-6 md:px-16 py-4 rounded-full text-primary-light focus:border-primary-light focus:border-2 hover:border-primary-light hover:border-[1px] active:text-secondary-light">
          <span className="flex items-center text-primary">
            <i className="fas fa-map-marker-alt h-4 md:h-5 w-4 md:w-5"/>
            <p className="font-inter text-base font-black ml-2">位置</p>
          </span>
          <p className="h-4 md:h-6 text-base font-medium text-primary-light active:text-secondary-light">想在哪裡吃飯？</p>
        </button>
        <div className="w-0.5 h-8 mx-4 bg-primary"/>
        <button className="pl-6 md:px-16 py-4 rounded-full text-primary-light focus:border-primary-light focus:border-2 hover:border-primary-light hover:border-[1px] active:text-secondary-light">
          <span className="flex items-center text-primary">
            <i className="fas fa-clock h-4 md:h-5 w-4 md:w-5"/>
            <p className="font-inter text-base font-black ml-2">時間</p>
          </span>
          <p className="h-4 md:h-6 text-base font-medium">選擇時間</p>
        </button>
      </div>
      <div className="align-exact-center bg-secondary-light rounded-full w-10 md:w-16 h-10 md:h-16">
        <i className="text-white fas fa-search w-3.5 md:w-5 h-3.5 md:h-3.5"/>
      </div>
    </div>
  )
}

export default SearchBar
