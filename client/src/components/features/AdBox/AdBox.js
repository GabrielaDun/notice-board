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
                alt={props.text}
                src={`${API_URL}/ads/${props.photo}`} />
            <p><b>Price: </b>{`${props.price}zł`}</p>
            <p><b>Location: </b>{props.location}</p>
            <Link className={styles.button} to={'/page/'+ props._id} ><Button>Read more</Button></Link>
        </div>
    )

}

export default AdBox;