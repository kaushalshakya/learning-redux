import AddPostForm from "./features/posts/AddPostForm"
import PostList from "./features/posts/PostList"
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"

function App() {

  return (
    <>
    <h1>Redux</h1>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element = {<PostList/>} />
      <Route exact path="/add-post" element = {<AddPostForm/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
