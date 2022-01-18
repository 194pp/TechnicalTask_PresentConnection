import {useEffect, useState} from "react";
import {API_URL} from "../../config/config";
import PostsTable from "../ui/PostsTable/PostsTable";
import {Outlet, useParams} from "react-router-dom";


const GetPosts = () => {
  const [posts, setPosts] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`${API_URL}`)
      .then(res => res.json())
      .then((data) => {
        setPosts(data);
      })
      .catch(err => console.log(err))
    ;
  }, []);

  useEffect(() => {
    fetch(`${API_URL}/${params.userId ? params.userId : ''}`)
      .then(res => res.json())
      .then(data => setPosts(data));

  }, [params.userId]);

  if (posts) {
    return (
      <div>
        <Outlet/>
        <PostsTable data={posts}/>
      </div>
    )
  } else return (
    <div>
      Loading...
    </div>
  )
}

export default GetPosts;
