interface searchProps {
  searchName: string;
  setSearchName(value:string): void;
}

export default function SearchBar({searchName,setSearchName} : searchProps) {
    return (
      <div className="flex justify-center p-4">
        <input
          className="w-1/3 p-3 text-gray-900  rounded-lg border border-gray-300"
          type="text"
          value={searchName}
          onChange={e => setSearchName(e.target.value)}
          placeholder="Search your favourite Pokemon..."
        />
      </div>
    );
}