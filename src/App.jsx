import { RouterConfig } from "routes/routerConfig";
import { BrowserRouter } from "react-router-dom";
import { Providers } from "providers";
import "styles/main.scss";

function App() {
  return (
    <BrowserRouter>
      <Providers>
        <RouterConfig />
      </Providers>
    </BrowserRouter>
  );
}

export default App;
