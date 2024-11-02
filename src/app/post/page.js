async function getPosts() {
    const postData = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await postData.json(); // Correct way to handle the JSON response
    return posts;
}

const Post = async () => {
    let posts = await getPosts();
    console.log(posts);

    return (
        <>
            <h2>Posts | Fetch Data with API with server-side component</h2>
            <ul>
                {posts.map((post,index) => (
                    <li key={post.id}>
                        <h2>{post.id}</h2>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <hr/>
                        </li>
                ))}
            </ul>
        </>
    );
}

export default Post;
