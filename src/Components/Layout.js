import Nav from './Nav';
import classes from '../Styles/Layout.module.css'

const Layout = ({children}) => {
    return (
        <>
            <Nav />
            <main className={classes.main}>
            <div className={classes.container}>
                 {children}
                </div>
                </main>
        </>
    );
};

export default Layout;