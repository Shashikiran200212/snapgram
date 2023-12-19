import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import AuthProvider from './context/AuthContext';
import { Queryprovider } from './lib/react-query/provider';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Queryprovider>
            <AuthProvider>
                <App /> 
            </AuthProvider>
        </Queryprovider>
    </BrowserRouter>
     
)