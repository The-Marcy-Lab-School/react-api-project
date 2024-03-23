import { useContext } from "react";
import { Link } from "react-router-dom";
import NourishContext from "../context/NourishContext";

const NavBar = () => {

    const { categories } = useContext(NourishContext);

    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li>
                    <Link to='/'>Home</Link>
                </li>
                    <div className="dropdown">
                        <span className="category-title">Categories</span>
                        <div className="dropdown-content">
                            {
                                categories && categories.length > 0 && categories.map((category) => (
                                    <li key={category.idCategory}>
                                        <Link to={`/category/${category.idCategory}`}>
                                            {category.strCategory}
                                        </Link>
                                    </li>
                                ))
                            }
                        </div>
                    </div>
                <li>
                    <Link to='/allmeals'>All Meals</Link>
                </li>
            </ul>
        </nav>
    )
}

//*We fetch the categories from the API using useEffect.
//*We render each category as a list item (<li>) with a link (<Link>) to a route that includes the category name in the URL.

export default NavBar