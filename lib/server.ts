import app from "./config/app";
import env from './enviroment'

const PORT =env.getPort();

app.listen(PORT, () => {
   console.log('Express server listening on port ' + PORT);
});