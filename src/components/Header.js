import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div>
            <h1>React Router Tutorial</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header
