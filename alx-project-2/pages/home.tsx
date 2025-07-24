import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import { CardProps} from "@/interfaces";
import { useState } from "react";

const Home: React.FC<{posts:CardProps[]}> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState<{title:string, content:string} | null>(null);


  const handleAddPost = (title:string, content:string) => {
    setData({title, content});
  };


  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className=" text-2xl font-semibold">Home</h1>
          <button onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white">Add Post</button>
        </div>
        <div className="grid grid-cols-3 gap-2 ">
          {
            posts?.map(({ title, content }: CardProps, key: number) => (
              <Card title={title} content={content} key={key} />
            ))
          }
        </div>
      </main>

      {isModalOpen && (
        <PostModal onClose={() => setModalOpen(false)} onSubmit={handleAddPost} />
      )}
    </div>
  )
}


export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}

export default Home;