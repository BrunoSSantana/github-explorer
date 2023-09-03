import Search from "./Search";

type HeaderProps = {
	setSearch: (search: string) => void;
	search: string;
	handleSearch: () => void;
}


function Header({ setSearch, handleSearch, search }: HeaderProps) {
	return (
		<>
			<h1 className="font-roboto font-bold text-5xl w-4/5 mb-6 max-w-2xl">
				Explore repositories on GitHub
			</h1>
			<Search setSearch={setSearch} handleSearch={handleSearch} search={search} />
		</>
	);
}

export default Header;