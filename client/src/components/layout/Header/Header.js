//import Button from '../../common/Button/Button';
//import PageTitle from '../../common/PageTitle/PageTitle';
import styles from './Header.module.scss'
import NavBar from './NavBar/NavBar';


const Header= () => (
    <div>
      <div className={styles.container}>
          < NavBar />
          <div className={styles.main}>
          </div>
      </div>
    </div>
  );
  
  export default Header; 