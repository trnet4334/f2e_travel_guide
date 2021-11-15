const Pagination = () => {
  return (
    <div className="flex items-center justify-center">
      <button
        className="text-primary bg-transparent font-bold text-xl px-2 outline-none focus:outline-none"
      >
        <i className="fas fa-angle-double-left"/>
      </button>
      <button
        className="text-primary bg-transparent font-bold text-xl px-2 outline-none focus:outline-none"
        type="button"
      >
        <i className="fas fa-angle-left"/>
      </button>
      {
        [1,2,3,4,5].map((item, index) =>
          <button
            className="text-primary bg-transparent font-bold text-2xl px-2 outline-none focus:outline-none active:secondary-light"
            type="button"
            key={index}
          >
            {item}
          </button>
        )
      }
      <button
        className="text-primary bg-transparent font-bold text-base md:text-xl px-2 outline-none focus:outline-none"
        type="button"
      >
        <i className="fas fa-angle-right"/>
      </button>
      <button
        className="text-primary bg-transparent font-bold text-xl px-2 outline-none focus:outline-none"
        type="button"
      >
        <i className="fas fa-angle-double-right"/>
      </button>
    </div>
  )
}

export default Pagination
