import CartWidget from "../CartWidget/CartWidget";
import classes from "./Navbar.module.css"





const Navbar = () => {
    return (
        <div className={classes.nav}>
        <div className={classes.logo}>
           <h1>DecoTodoVuelve</h1>
        </div>

        <section className={classes.section}>
            <div className={classes.menu}>
                <ul className={classes.menu}>
                    <li>Mesas</li>
                    <li>Sillas</li>
                    <li>Sillones</li>
                </ul>
                <input type="text" className={classes.search} placeholder="Search" />  
            </div>
            <div>
                <CartWidget/>
            </div>
        </section>
    </div>
    )
}

export default Navbar ;