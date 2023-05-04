import 'antd/dist/reset.css'
import './App.css'
import Home from './pages/Home'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// import { feedProducts } from './api';
// feedProducts();

const queryClient = new QueryClient();
function App() {

  return (
    <QueryClientProvider client={queryClient} >
      <div className="App">
        <Home />
      </div>
    </QueryClientProvider>
  )
}

export default App
