import PageTitle from '../../common/PageTitle/PageTitle';
import EditPostForm from '../../features/EditAdForm/EditAdForm';


const EditAdPage= () => {
    const { id } = useParams();
    console.log(id);
    return (
        <div>
            <div className={styles.root}>
                <PageTitle>Edit a post</PageTitle>
                <EditPostForm />
            </div>
        </div>

    )
}
  
  export default EditAdPage; 