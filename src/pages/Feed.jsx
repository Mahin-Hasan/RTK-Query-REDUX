import { useGetPostByIdQuery, useGetPostsQuery } from "../redux/features/api/baseApi";
import PostCard from "../component/layouts/PostCard";

const Feed = () => {
    const { data: posts, isLoading, isError, error } = useGetPostsQuery(); // Returns an object
    //const { data: posts, isLoading, isError, error } = useGetPostByIdQuery(1); // Returns an object

    if (isLoading) {
        return <p className="text-9xl text-zinc-300">Loading ....</p>
    }
    if (!isLoading && isError) {
        return <p className="text-9xl text-zinc-300">Something went wrong ....</p>
    }


    return (
        <div>
            <h1>Feed</h1>
            <div className="flex flex-col gap-3">
                {
                    posts?.map(post => (
                        <PostCard key={post.id} post={post}></PostCard>
                    ))
                }
            </div>
        </div>
    );
};

export default Feed;