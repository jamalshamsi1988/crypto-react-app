import styles from "../layout/Layout.module.css"

const Layout = ({children}) => {
  return (
    <>
      <header>
        <h1>Crypto App | React.js</h1>
      </header>
      
        {children}
     
      <footer>
            <p>Developed by Jamal Shamsi</p>
      </footer>
    </>
  )
}

export default Layout
