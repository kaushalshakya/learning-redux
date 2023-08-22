import AddPostForm from "./features/posts/AddPostForm"
import PostList from "./features/posts/PostList"
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"
import NewUserForm from "./features/users/NewUserForm"
import { AuthorList } from "./features/users/AuthorList"

function App() {

  return (
    <>
    <h1>Redux</h1>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element = {<PostList/>} />
      <Route exact path="/add-post" element = {<AddPostForm/>} />
      <Route exact path="/new-user" element = {<NewUserForm/>} />
      <Route exact path="/authors" element = {<AuthorList/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
