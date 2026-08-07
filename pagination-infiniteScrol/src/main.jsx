
import { createRoot } from 'react-dom/client'
import './index.css'
// import InfinitePageScroll from './InfinitePageScroll.jsx'
import {QueryClientProvider ,QueryClient} from "@tanstack/react-query"
import Pagination from './pagination.jsx'
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
<QueryClientProvider client={queryClient}>
  <Pagination/>
 </QueryClientProvider>

)
