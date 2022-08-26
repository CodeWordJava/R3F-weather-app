// import { useContext, createContext, useState } from "react";

// const SearchContext = createContext({
//   searchString: "",
//   setSearchString: () => {},
// });

// const useSearchContext = () => useContext(SearchContext);

// const SearchContextProvider = ({ children }) => {
//   const [searchString, setSearchString] = useState("");

//   return (
//     <>
//       <SearchContext.Provider value={{ searchString, setSearchString }}>
//         {children}
//       </SearchContext.Provider>
//     </>
//   );
// };

// export { SearchContextProvider, useSearchContext };