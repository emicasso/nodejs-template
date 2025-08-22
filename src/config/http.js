import { createServer } from 'http';
import expressApp from './express.js';

// separamos lo que es express del servidor http
const httpServer = createServer(expressApp);

export default httpServer;
