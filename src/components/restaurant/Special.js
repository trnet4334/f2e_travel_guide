const Special = () => {
  const specialImages = ['bg-special-1', 'bg-special-2', 'bg-special-3', 'bg-special-4',
    'bg-special-5', 'bg-special-6', 'bg-special-7', 'bg-special-8', ]

  return (
    <div className="mt-3 px-2 sm:px-10 mb-40 flex flex-wrap justify-between">
      {
        specialImages.map((item, index) =>
          <div
            className={`${item} w-[322px] h-[181px] sm:h-[236px] bg-primary rounded-xl mb-6 bg-cover bg-center`}
            key={index}
          />
        )
      }
    </div>
  )
}

export default Special
