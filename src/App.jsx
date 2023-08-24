import AddPostForm from "./features/posts/AddPostForm"
import PostList from "./features/posts/PostList"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NewUserForm from "./features/users/NewUserForm"
import { AuthorList } from "./features/users/AuthorList"
import AuthorDetails from "./features/users/AuthorDetails"
import UpdatePostForm from "./features/posts/UpdatePostForm"

function App() {

  return (
    <>
    <h1>Redux</h1>
    <Router>
      <Routes>
        <Route exact path="/" element = {<PostList/>} />
        <Route exact path="/add-post" element = {<AddPostForm/>} />
        <Route exact path="/new-user" element = {<NewUserForm/>} />
        <Route exact path="/authors" element = {<AuthorList/>} />
        <Route exact path="/authors/:id" element = {<AuthorDetails/>} />
        <Route exact path="/post/:id" element = {<UpdatePostForm/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
