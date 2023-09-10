import Searchbar from './Searchbar';
import ButtonCustom from './ButtonCustom';

const Header = () => {

  
  return (

    <header className="bg-primary-blue fixed top-0 py-7 w-full z-10">

      {/* <!-- navbar container --> */}
      <div className="w-full sm:w-9/12 px-1 sm:px-8 m-auto flex justify-between items-center relative">

        {/* <!-- logo & search container --> */}
        <div className=" p-4 flex items-center flex-1">
         

        <Searchbar />
        <ButtonCustom />
        </div>

        {/* <!-- logo & search container --> */}

        {/* <!-- right navs --> */}
      
        {/* <!-- right navs --> */}

      </div>
      {/* <!-- navbar container --> */}
    </header>
  )
};

export default Header;
