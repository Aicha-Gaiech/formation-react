import { BrowserRouter,Route,Routes } from 'react-router-dom';
import AllCourses from './components/AllCourses/AllCourses';
import CoursProfs from './components/CoursProfs/CoursProfs';
import Home from './components/Home/Home';
	
const App = () => {

		return (
		<div>
			<BrowserRouter>
    <Routes>
      <Route path="" element={ <Home/>} />
      <Route path="AllCourses" element={ <AllCourses/>} />
      <Route path="CoursProfs" element={ <CoursProfs/>} />
      <Route path="" element={ <AllCourses/>} />

    </Routes>
    </BrowserRouter> 
    
    </div>
  );
}

export default App;
