
import './App.css';


import AppLayout from './components/AppLayout';
import Providers from './providers';
import RouteApp from './RouteApp';



const App = () => {
  return (
    <Providers>
      <AppLayout>
        <RouteApp />
      </AppLayout>
    </Providers>
  );
}

export default App;
