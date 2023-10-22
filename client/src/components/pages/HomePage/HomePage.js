import PageTitle from '../../common/PageTitle/PageTitle';
import Ads from '../../features/Ads/Ads';
import styles from './HomePage.module.scss'
import { Link} from 'react-router-dom';
import Button from '../../common/Button/Button';
import { useSelector } from 'react-redux';
import { checkIfLoggedIn } from '../../../redux/userRedux';
import Search from '../../features/Search/Search';


const HomePage = () => {
  const isLoggedIn = useSelector(checkIfLoggedIn)
  return(
  <div> 
      <div className={styles.homeContainer}>
          <PageTitle>All posts</PageTitle>
          { isLoggedIn && ( 
            <Link className={styles.button}to={'/ad/add'}>
                <Button>Add post</Button>
            </Link>
          )}
      </div>
      <Search />
      <Ads/>
  </div>
  )
};

export default HomePage; 