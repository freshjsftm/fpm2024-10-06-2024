import './App.css';
import Container from './components/Grid/Container';
import Row from './components/Grid/Row';
import Col from './components/Grid/Col';

function App() {
  return (
    <Container>
      <Row>
        <Col colClass={{ sm: 12, md: 6, lg: 3 }}>
          <p>example text</p>
        </Col>
        <Col colClass={{ sm: 12, md: 6, lg: 3 }}>
          <p>example text</p>
        </Col>
        <Col colClass={{ sm: 12, md: 6, lg: 3 }}>
          <p>example text</p>
        </Col>
        <Col colClass={{ sm: 12, md: 6, lg: 3 }}>
          <p>example text</p>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
