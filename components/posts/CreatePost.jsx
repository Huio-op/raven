import styles from './CreatePost.module.css'

const CreatePost = ({handlePostSubmit = _.noop}) => {

    //TODO: Make this textarea auto resizeable
    return (
        <div className={`${styles.createPostWrapper}`}>
            <form className={`${styles.createPostForm}`} onSubmit={handlePostSubmit}>
                <textarea className={`${styles.createPostInput}`} name={"textarea"} type={"text"} maxLength={5000}
                          placeholder={'Quais as novidades?'}/>
                <div className={`${styles.submitButtonContainer}`}>
                    <button className={`${styles.submitButton}`} type={'submit'}>Postar</button>
                </div>
            </form>
        </div>
    )
}

export default CreatePost;