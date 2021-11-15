const Dropdown = (props) => {
  return (
    <div
      className={`${props.isOpen ? 'origin-top-left absolute left-0 top-20 mt-1 bg-gray-0 text-base z-50 float-left list-none text-left rounded-xl shadow-lg w-[320px] md:w-[640px] h-auto' : 'hidden'}`}
    >
      {props.content}
    </div>
  )
}

export default Dropdown
