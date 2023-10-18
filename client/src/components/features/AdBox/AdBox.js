///import { Link } from 'react-router-dom';
import styles from  './AdBox.module.scss';
import Button from '../../common/Button/Button';
import { Link} from 'react-router-dom';
import { API_URL } from '../../../config';


const AdBox = (props) => {
    console.log(props);
    return (
        <div>
            <h4>{props.title}</h4>
            <img
                className={styles.image}
                alt={styles.text}
                src={`${API_URL}/uploads/${props.photo}`} />
            <p><b>Location: </b>{props.location}</p>
            <Link className={styles.button} to={'/page/'+ props.id} ><Button>Read more</Button></Link>
        </div>
    )

}

export default AdBox;