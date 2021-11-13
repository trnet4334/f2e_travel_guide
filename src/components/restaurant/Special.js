const Special = () => {
  return (
    <div className="mt-3 px-2 sm:px-10 mb-40 flex flex-wrap justify-between">
      {
        [1,2,3,4,5,6,7,8].map((item, index) =>
          <div className="w-[322px] h-[181px] sm:h-[236px] bg-primary rounded-xl mb-6"/>
        )
      }
    </div>
  )
}

export default Special
