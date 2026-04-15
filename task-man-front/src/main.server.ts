import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

// O segredo é passar o 'context' como o 3º parâmetro
const bootstrap = (context: BootstrapContext) => {
    return bootstrapApplication(AppComponent, {
        ...config
    }, context); // <--- O contexto deve entrar aqui
};

export default bootstrap;