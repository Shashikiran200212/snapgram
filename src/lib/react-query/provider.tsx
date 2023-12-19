import { Provider } from '@radix-ui/react-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {ReactNode} from 'react'

const queryClient = new QueryClient();      

export const Queryprovider = ({children}: {children: React.ReactNode}) => {
  return (
    <QueryClientProvider client={queryClient}> 
        {children}
    </QueryClientProvider>
  )
}

export default Provider