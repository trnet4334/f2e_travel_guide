const Feature = () => {
  const backgroundImages = ['bg-feature-1', 'bg-feature-2', 'bg-feature-3', 'bg-feature-4',
    'bg-feature-5', 'bg-feature-6', 'bg-feature-7', 'bg-feature-8',
    'bg-feature-9', 'bg-feature-10', 'bg-feature-11', 'bg-feature-12' ]

  return (
    <div className="mt-3 px-2 sm:px-10 mb-40 flex flex-wrap justify-between">
      {
        backgroundImages.map((item, index) =>
          <div
            className={`${item} w-[322px] h-[181px] sm:h-[236px] bg-primary rounded-xl mb-6 bg-center bg-cover`}
            key={index}
          />
        )
      }
    </div>
  )
}

export default Feature
