const Card = (props) => {
  return (
    <div className="my-6 mx-2.5">
      <div className="relative mb-4 rounded-2xl w-[175px] w-[95px] md:w-[325px] md:h-[190px] bg-primary">
        <i className="fas fa-bookmark w-[14px] h-[18px] text-white absolute top-5 right-5"/>
      </div>
      {props.content}
    </div>
  )
}

export default Card
