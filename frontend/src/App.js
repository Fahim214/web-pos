import { Route } from "react-router-dom";
import { BrowserRouter, Routes } from "react-router-dom";
import NavbarComp from "./pages/NavbarComp";
import DashboardComp from "./components/DashboardComp";
import { Col, Container, Row } from "react-bootstrap";
import ProductComp from "./components/ProductComp";
import MessagesComp from './components/MessagesComp'
import BillsComp from './components/BillsComp'
import SettingComp from './components/SettingComp'
import NotifComp from './components/NotifComp'
import SupportComp from './components/SupportComp'

function App() {
  return (
    <div>
      <Container fluid>
        <Row>
          <BrowserRouter>
            <Col md={3}>
              <NavbarComp />
            </Col>
            <Col md={7}>
              <Routes>
                <Route path="/" element={<DashboardComp />} />
                <Route path="/product" element={<ProductComp />} />
                <Route path="/messages" element={<MessagesComp />} />
                <Route path="/bills" element={<BillsComp />} />
                <Route path="/setting" element={<SettingComp />} />
                <Route path="/notif" element={<NotifComp />} />
                <Route path="/support" element={<SupportComp />} />
              </Routes>
            </Col>
          </BrowserRouter>
        </Row>
      </Container>
    </div>
  );
}

export default App;
