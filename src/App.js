import {Route, Routes} from "react-router-dom";

import {AlbumPage, CommentsPage, TodosPage, HomePage, PostPage} from "./pages";
import {MainLayout} from "./layouts/MainLayout";


function App() {
  return (
    <Routes>
        <Route path={'/'} element={<MainLayout/>}>
            <Route index element={<HomePage/>}/>
            <Route path={'albums'} element={<AlbumPage/>}/>
            <Route path={'todos'} element={<TodosPage/>}/>

            <Route path={'comments'} element={<CommentsPage/>}>

            <Route path={':postId'} element={<PostPage/>}/>

            </Route>


        </Route>

    </Routes>
  );
}

export default App;
