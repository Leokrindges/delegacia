import cors from 'cors';
import 'dotenv/config';
import express  from 'express';
import { CriminososRoutes } from './rotas/criminosos.rotas';

const app = express();
app.use(express.json());
app.use(cors());

app.use("/delegacia", CriminososRoutes.execute());

app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado na porta ${process.env.PORT}`);
    
})