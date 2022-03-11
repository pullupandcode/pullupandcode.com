import { Link } from "remix";

export default function MainNav() {

    return (
        <header className="flex max-w-7xl main-nav container-xl h-[100px] items-center justify-end">
            {/* nav and menu items */}
            <nav className="flex flex-row ">
                <Link className="main-nav-item" to={""}>About</Link>
                <Link className="main-nav-item" to={""}>Pull Up &amp; Code</Link>
                <Link className="main-nav-item" to={""}>Pull Up &amp; Chill</Link>
                <Link className="main-nav-item" to={""}>Kicks of the Stream</Link>
                <Link className="main-nav-item" to={"/projects"}>Projects</Link>
            </nav>
        </header>
    )
}