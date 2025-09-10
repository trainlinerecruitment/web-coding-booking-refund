
import { createRoot } from 'react-dom/client';
import './client/index.css';
import App from './client/App';
import * as serviceWorker from './client/serviceWorker';
import { StrictMode } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<StrictMode><App /></StrictMode>)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
