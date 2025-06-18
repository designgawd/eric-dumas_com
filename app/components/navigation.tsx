import Link from "next/link";

function Navigation() {

    return(
        <section className="navigation grid grid-cols-6 gap-4">
            <div>{'{ED}'}</div>
            <div className=" col-span-2 col-start-5 grid grid-cols-3 gap-1">
                <Link href={"/"}>Home</Link>
                <div>Projects</div>
                <Link href={"/blog"}>Blog <span>New</span></Link>
            </div>
        </section>
    )
}

export default Navigation;