import { GetStaticProps, GetStaticPropsContext } from "next"

export interface PostListPageProps{
  posts:any[]
}
export default function PostListPage(props :PostListPageProps) {
  return <div>Post List Pages </div>
}
 
export const getStaticProps:GetStaticProps = async (context: GetStaticPropsContext) => {
  console.log("getStaticProps");
  return {
    
    props: {
      posts: [
        {
          id: 1,
          title: "Post 1",
          body: "This is post 1"
        },
        {
          id: 2,
          title: "Post 2",
          body: "This is post 2"
        }
      ]
    }
  }
}
