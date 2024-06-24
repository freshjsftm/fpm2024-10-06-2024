import './App.css';
import StopWatch from './components/StopWatch';
import Container from './components/Grid/Container';
import Row from './components/Grid/Row';
import Col from './components/Grid/Col';

function App() {
  return (
    <Container>
      <Row>
        <Col colNum={5}>
          <StopWatch />
        </Col>
        <Col colNum={2}></Col>
        <Col colNum={5}>
          <StopWatch />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
