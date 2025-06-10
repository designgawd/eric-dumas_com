function Navigation() {

    return(
        <section className="navigation grid grid-cols-6 gap-4">
            <div>{'{ED}'}</div>
            <div className=" col-span-2 col-start-5 grid grid-cols-3 gap-1">
                <div>Home</div>
                <div>Projects</div>
                <div>Blog <span>New</span></div>
            </div>
        </section>
    )
}

export default Navigation;