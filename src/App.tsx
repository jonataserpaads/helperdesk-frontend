import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import {
  AppThemeProvider,
  AuthProvider,
  DrawerProvider,
} from "./shared/contexts";
import { Provider } from "react-redux";
import store from "./store";
import { IntlProvider } from "react-intl";
import { Slide, ToastContainer } from "react-toastify";
import { MenuSide } from "./shared/components";

function App() {
  return (
    <IntlProvider locale="pt-BR">
      <ToastContainer
        position="top-center"
        theme="colored"
        transition={Slide}
      />

      <Provider store={store}>
        <AuthProvider>
          <AppThemeProvider>
            <DrawerProvider>
              <BrowserRouter>
                <MenuSide>
                  <AppRoutes />
                </MenuSide>
              </BrowserRouter>
            </DrawerProvider>
          </AppThemeProvider>
        </AuthProvider>
      </Provider>
    </IntlProvider>
  );
}

export default App;
