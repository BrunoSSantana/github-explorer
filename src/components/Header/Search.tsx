type SearchProps = {
    setSearch: (search: string) => void;
    search: string;
    handleSearch: () => void;

}


function Search({ setSearch, search, handleSearch }: SearchProps) {

    return (
        <div className="">
            <input
                type="text"
                name="search"
                className="
                    w-4/5
                    max-w-md
                    rounded-l-md
                    border-0
                    bg-white/5
                    px-3.5
                    py-2
                    text-white
                    shadow-sm
                    sm:text-sm
                    sm:leading-6"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className="bg-emerald-400 hover:bg-emerald-300 py-2 px-4 rounded-r-md" 
                onClick={handleSearch}
            >
                Search
            </button>
        </div>
    );
}

export default Search;