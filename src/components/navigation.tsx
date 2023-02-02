
// our props have two properties - a number, and a function that takes a number and returns void
// we can define this as an interface, or anonymously like this:
const Navigation: React.FC<{
    currentPage: number,
    setCurrentPage: (page: number) => void,
    showFavourites: boolean,
    setShowFavourites: (showFavourites: boolean) => void
}>
    = ({ currentPage, setCurrentPage, showFavourites,setShowFavourites }) => {

        const nextPage = () => {
            const newPageNumber = currentPage + 1;
            setCurrentPage(newPageNumber);
        }

        const prevPage = () => {
            if (currentPage > 1) {
                const newPageNumber = currentPage - 1;
                setCurrentPage(newPageNumber);
            }
        }

        const toggleFavourites = () => {
            if(showFavourites){
                setCurrentPage(1);
            }
            setShowFavourites(!showFavourites);
        }

        return (
            <div className="navigation">
                <div className="navigation__item">
                    <button className="navigation__button" onClick={prevPage}>Prev Page</button>
                </div>
                <div className="navigation__item">
                    <button className="navigation__button" onClick={toggleFavourites}>
                    {!showFavourites ? "Show Favourites" : "Show All"}
                    </button>
                </div>
                <div className="navigation__item">
                    <button className="navigation__button" onClick={nextPage}>Next Page</button>
                </div>
            </div>

        )
    }

export default Navigation;