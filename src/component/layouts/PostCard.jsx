
const PostCard = ({ post }) => {
    return (
        <div className="bg-zinc-800 rounded-md p-10 text-zinc-300">
            <h1 className="mb-5 text-xl font-semibold hover:underline cursor-pointer">Jhon Doe</h1>
            <p>{post?.body}</p>
            <div className="">

            </div>
        </div>
    );
};

export default PostCard;