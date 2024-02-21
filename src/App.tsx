import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import ThemeProvider from './styles/themes/ThemeProvider'
import { store } from './app/store'
import { Provider } from 'react-redux'
function App() {

  return (
    <>
      <ThemeProvider>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ThemeProvider>

    </>
  )
}

export default App
