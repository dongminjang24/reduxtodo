import './App.css'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from './styles/global'
import { Provider } from 'react-redux'
import { store } from 'store/store'
import router from 'routes/routing'
function App() {
	console.log(process.env.NODE_ENV)
	//npm start -> 개발환경 ? 배포환경? -> 개발환경 -> "development"
	// npm run build -> serve -s build -> 배포환경 테스트 -> "production"
	// 배포환경과 개발환경 구분
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<RouterProvider router={router} />
			</ThemeProvider>
		</Provider>

		//     <BrowserRouter>
		//     {/* HTML5를 지원하느 브라우저의  URL의 변화를 감지*/}
		//     <Routes>
		//     {/** 하위에 있는 Route 컴포넌트 중 url과 path가 일치하는 컴포넌트만 보여주는 역할*/}
		//       <Route element={<Layout/>}>
		//         <Route path='/' element={<MainPage/>} />
		//         <Route path='/todo/:todoId' element={<TodoPage/>} />
		//       </Route>
		//     </Routes>
		//     </BrowserRouter>
		// /*
		// BrowserRouter (URL 감지) -> Routes(하위에 route 중에 경로에 맞는 컴포넌트 보여주는 역할)
		// outlet --> routes에 의해 가지고와진 컴포넌트를 outlet으로 가지고올 수 있음
	)
}
export default App
