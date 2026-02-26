import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes.jsx';
import './css/style.css';

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
