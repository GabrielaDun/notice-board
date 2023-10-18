import PageTitle from '../../common/PageTitle/PageTitle';
import Ads from '../../features/Ads/Ads';
import styles from './HomePage.module.scss'
import { Link} from 'react-router-dom';
import Button from '../../common/Button/Button';


const HomePage = () => (
  <div> 
  <div className={styles.homeContainer}>
      <PageTitle>All posts</PageTitle>
      <Link className={styles.button}to={'/ad/add'}><Button>Add post</Button></Link>
    </div>
    <Ads/>
  </div>
);

export default HomePage; 