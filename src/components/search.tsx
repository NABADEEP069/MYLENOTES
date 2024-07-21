import { CiSearch } from 'react-icons/ci';

const SearchForm = () => {
    return (
        <form className="relative" action="/search" method="GET">
            <input
                type="text"
                name="query"
                className="pl-3 pr-10 py-1 border border-text bg-transparent rounded-md font-light text-sm"
                placeholder="Search..."
            />
            <button
                type="submit"
                className="absolute right-2 top-0 bottom-0 flex items-center justify-center"
            >
                <CiSearch size={20} className="text-text" />
            </button>
        </form>
    );
};

export default SearchForm;
