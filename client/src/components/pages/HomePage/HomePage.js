//import Button from '../../common/Button/Button';
//import PageTitle from '../../common/PageTitle/PageTitle';
import Ads from '../../features/Ads/Ads';
import styles from './HomePage.module.scss'


const HomePage = () => (
  <div>
    <div className={styles.container}>
        <h1>Latest Offers:</h1>
        <Ads/>
    </div>
  </div>
);

export default HomePage; 