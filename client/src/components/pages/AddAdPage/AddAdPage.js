import PageTitle from '../../common/PageTitle/PageTitle';
import AddPostForm from '../../features/AddPostForm/AddPostForm';
import styles from './AddAdPage.module.scss'


const AddAdPage= () => {
  return (
      <div>
          <div className={styles.root}>
              <PageTitle>Add a post</PageTitle>
              <AddPostForm />
          </div>
      </div>

  )
}

export default AddAdPage; 