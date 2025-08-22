import httpServer from '#Config/http.js';
import '#Config/env.js';
import connectDB from '#Config/db.js';

const bootstrap = async () => {
    await connectDB(process.env.MONGODB_URL);
    // aislamos el servidor de express a http
    httpServer.listen(process.env.PORT, () => {
        console.log(`Servidor escuchando en el PUERTO: ${process.env.PORT}`);
    });
};

bootstrap();
