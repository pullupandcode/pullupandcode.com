import MainNav from "./header/MainNav";

export default function Container({children}) {
    return (
    <section className="max-w-7xl mx-auto text-lg">
        <MainNav />
        {children}
    </section>
    )
}