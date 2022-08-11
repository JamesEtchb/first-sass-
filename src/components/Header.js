import styles from './Header.module.scss'

const Header = () => {
  return (
    <>
      <ul className="navigation">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
        <li>
          <a href="">Links</a>
        </li>
      </ul>

      <div className="menu">
        <a href="" className="menu__link">Link 1</a>
        <a href="" className="menu__link">Link 2</a>
        <a href="" className="menu__link">Link 3</a>
      </div>

      <div className={styles["mod", "test"]}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea odit voluptates suscipit odio aut. Doloremque aut minus porro? Exercitationem, tenetur modi sapiente tempore pariatur in? Dolore impedit labore ratione ex.</p>
      </div>
    </>
  )
}

export default Header
