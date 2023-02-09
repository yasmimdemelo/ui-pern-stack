//root-dom faz com que possamos trabalhar com o cor do react na dom(web, mobile)
////createRoot é uma função js que vai receber quem é o elemento raiz "rootelement".
////rootelement armazena o valor encontrado na root, para usar no createRoot.
import { createRoot} from 'react-dom/client';

//Aqui vamos importar o App.js, que contem a função App( ) com os componentes.
import App from "./App"

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

//root que irá renderizar o conteudo de App( ), 
root.render(
  <App />
);