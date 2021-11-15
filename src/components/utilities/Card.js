const Card = (props) => {
  return (
    <div className={`${props.cardDirection === 'row' ? 'md:flex md-r:flex-wrap lg-r:flex-wrap mt-7 md:my-11' : 'my-6 mx-2.5'}`}>
      <div
        className={`${props.cardDirection === 'row' ? 
          'w-[359px] h-[184px] md:w-[272px] md:h-[202px] rounded-2xl' : props.device === 'mobile' ? 
            'mb-4 m-auto w-[326px] h-[126px] rounded-xl' : 'mb-4 w-[175px] h-[95px] md:w-[325px] md:h-[190px] rounded-2xl'} relative bg-primary`}
      >
        <i className="fas fa-bookmark w-[14px] h-[18px] text-white absolute top-5 right-5"/>
      </div>
      {props.content}
    </div>
  )
}

export default Card
