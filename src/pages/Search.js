import Header from "../components/search/Header";
import Result from "../components/search/Result";
import Map from "../components/search/Map";

const Search = () => {

  return (
    <div>
      <Header/>
      <div className="w-screen">
        <Result/>
        <Map/>
      </div>
    </div>
  )
}

export default Search
