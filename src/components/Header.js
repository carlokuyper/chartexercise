import { Link } from "react-router-dom"

const Header = ()=> {
    return(
        <div className="navigation btn_group">
            <Link to="/"><div className="btn btn-primary">Chart One</div></Link>
            <Link to="/ChartTwo"><div className="btn btn-primary">Chart Two</div></Link>
            <Link to="/ChartThree"><div className="btn btn-primary">Chart Three</div></Link>
            <Link to="/ChartFour"><div className="btn btn-primary">Chart Four</div></Link>
            <Link to="/ChartFive"><div className="btn btn-primary">Chart Five</div></Link>
        </div>
    )
}

export default Header