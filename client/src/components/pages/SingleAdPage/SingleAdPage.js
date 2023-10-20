import styles from './SingleAdPage.module.scss'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { getAdsById } from '../../../redux/adsRedux';
import { API_URL } from '../../../config';
import { takeLoginInfo, getEditPermit} from '../../../redux/userRedux';


const SingleAdPage = () => {
  const { id } = useParams();
  console.log(id);
  const adsData = useSelector(state => getAdsById(state, id));
  console.log(adsData);

  const userLogin = useSelector( takeLoginInfo );
  const permitInfo = useSelector(state => getEditPermit(state, adsData.seller));
  console.log('userLogin:', userLogin, 'permitFata', permitInfo)

  if(!adsData) return <Navigate to="/" />
  else return (
      <div className={styles.page}>
          <div >
              <h2>{adsData.title}</h2>
              <img
                className={styles.image}
                alt={adsData.text}
                src={`${API_URL}/ads/${adsData.photo}`} />
              <p><b>Location: </b>{adsData.location}</p>
              <p><b>Price: </b>{adsData.price}</p>
              <p><b>Published: </b>{adsData.published}</p>
              <p><b>Seller: </b>{adsData.seller}</p>
              <p><b>Description:</b></p>
              <p>{adsData.text} </p>
          </div>
          <div className={styles.subpage}>
            { permitInfo && (
              <div className={styles.buttons}>
                  <Link to={'/ad/edit/'+ id } > <Button variant="primary">Edit</Button></Link>
              </div>
            )}
          </div>
      </div>
  )
}
  
  export default SingleAdPage; 