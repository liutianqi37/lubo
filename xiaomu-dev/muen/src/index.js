import dva from 'dva';
import './index.css';
import createHistory from 'history/createBrowserHistory';
const app = dva({
  history: createHistory(),
});
// 1. Initializ

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
