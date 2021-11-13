import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-16 xs:h-20 px-9 w-screen bg-primary-dark flex justify-between items-center">
      <Link to="/">
        <span className="text-secondary-light font-black font-inter cursor-pointer">EAT RIGHT NOW</span>
      </Link>
      <i className="fas fa-bookmark w-[14px] h-[18px] text-white"/>
    </nav>
  )
}

export default Navbar
