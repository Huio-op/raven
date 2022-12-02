import styles from './CreatePost.module.css'

const CreatePost = ({handlePostSubmit = _.noop, className = '', placeholder = 'Quais as novidades?'}) => {

    //TODO: Make this textarea auto resizeable
    return (
        <div className={`${styles.createPostWrapper} ${className}`}>
            <form className={`${styles.createPostForm}`} onSubmit={handlePostSubmit}>
                <textarea className={`${styles.createPostInput}`} name={"textarea"} type={"text"} maxLength={5000}
                          placeholder={placeholder}/>
                <div className={`${styles.submitButtonContainer}`}>
                    <button className={`${styles.submitButton}`} type={'submit'}>Postar</button>
                </div>
            </form>
        </div>
    )
}

export default CreatePost;