import { Container } from 'react-bootstrap';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <main>
        <Container className="py-3">
          <h1>Welcome</h1>
        </Container>
      </main>
      
      <Footer/>
      
    </div>
  );
} 

export default App;
