import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import authRoutes from './routes/auth.routes.js'
import productRoutes from './routes/product.routes.js'
import egresoRoutes from './routes/egreso.routes.js'
import ventaRoutes from './routes/venta.routes.js' 
import usuarioRoutes from './routes/usuario.routes.js'
import ingresoRoutes from './routes/ingreso.routes.js'

const app = express()

app.use(cors({
    origin: 'http://localhost:5173', // Cambia esto a la URL de tu frontend
    credentials: true
}))

// Endpoint de prueba
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

app.use(morgan('dev'))
app.use(express.json());
app.use(cookieParser())

app.use('/api', authRoutes);
app.use('/api', productRoutes);
app.use('/api', egresoRoutes);
app.use('/api', ventaRoutes);
app.use('/api/', usuarioRoutes);
app.use('/api', ingresoRoutes)

export default app