import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Searchbar = () => {

    const [keyword, setKeyword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

    return (
        <form onSubmit={handleSubmit} className="w-full sm:w-9/12 px-1 sm:px-4 py-4 flex justify-between items-center shadow-lg bg-white rounded-sm overflow-hidden">
            <input value={keyword} onChange={(e) => setKeyword(e.target.value)} className="text-sm flex-1 outline-none border-none placeholder-gray-400" type="text" placeholder="Search For City" />
            <button type="submit" className="text-primary-blue"><SearchIcon /></button>
        </form>
    );
};

export default Searchbar;
