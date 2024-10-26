import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";

async function categoryDetailsPage({ params }) {
const {features} = await params;
  console.log(features)
  

  const posts = await getAllPosts();

  if (features.length === 1) {
    return <p>Featured params: {features[0]}</p>
 }
  if (features.length === 2) {
    return <p>Featured params: {features[1]}</p>
 }
  if (features.length === 3) {
    return <p>Featured params: {features[2]}</p>
 }
  
  return (
    <div className='min-h-[60vh] flex justify-center items-center'>
      category Details Page
      <ul className='mt-6 px-6'>
        {posts.map((post, idx) => (
          <li key={post.id} className='mb-2 cursor-pointer pb-1'>
            <Link href={`/posts/${post.id}`}>
              <span className='border-b px-1 rounded-xl mr-1 border-yellow-600'>
                {idx + 1}.
              </span>{' '}
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default categoryDetailsPage