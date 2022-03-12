const corsOrigin = () => {
    const port = process.env.PORT || 8000;
    return process.env.CORS_ORIGIN || [
        `127.0.0.1:${port}`,
        `localhost:${port}`,
    ];
};

module.exports = {
    origin: corsOrigin,
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
};
