import express from 'express';
import cors from 'cors';
import connectDB from './db/connection.js';
import authRouters from './routes/auth.js'
import categotyRoutes from './routes/category.js'
import supplierRoutes from './routes/suppliersRoutes.js'
import productRoutes from './routes/productRoutes.js'
import UserRoutes from './routes/user.js'
import DashboardRoutes from './routes/dashboard.js'
import OrderRoutes from'./routes/order.js'
import uploadRoutes from './routes/uploadRoutes.js'
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
const swaggerProduct = YAML.load('./docs/product.yaml');
const swaggerCategory = YAML.load('./docs/category.yaml');
const swaggerSupplier = YAML.load('./docs/supplier.yaml');
const swaggerUser = YAML.load('./docs/user.yaml')

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api-docs/product', swaggerUi.serveFiles(swaggerProduct), swaggerUi.setup(swaggerProduct));
app.use('/api-docs/category', swaggerUi.serveFiles(swaggerCategory), swaggerUi.setup(swaggerCategory));
app.use('/api-docs/supplier', swaggerUi.serveFiles(swaggerSupplier), swaggerUi.setup(swaggerSupplier));
app.use('/api/auth',authRouters)
app.use('/api/category',categotyRoutes)
app.use('/api/supplier',supplierRoutes)
app.use('/api/product',productRoutes)
app.use("/api/users", UserRoutes);
app.use('/api/dashboard', DashboardRoutes);
app.use('/api/orders', OrderRoutes);
app.use('/uploads',express.static("uploads"));
app.use('/api',uploadRoutes)

// Only run app.listen() if not in test environment
if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    connectDB();
    console.log(`Server running on port ${PORT}`);
  });
}

// Export app for testing
export default app;

