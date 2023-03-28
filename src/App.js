import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import HistoryIcon from "@mui/icons-material/History";
import BarChartIcon from "@mui/icons-material/BarChart";
import "./Style/App.scss";
import Chart1 from "./Project/chart1";
import Chart2 from "./Project/chart2";
import Chart3 from "./Project/chart3";
import Chart4 from "./Project/chart4";
import Chart5 from "./Project/chart5";
import Chart6 from "./Project/chart6";
import History1 from "./Project/history1";
import History2 from "./Project/history2";
import History3 from "./Project/history3";
import History4 from "./Project/history4";
import History5 from "./Project/history5";
import History6 from "./Project/history6";

function App() {
  // Modal Chart
  const [openChart1, setOpenChart1] = React.useState(false);
  const handleOpenChart1 = () => setOpenChart1(true);
  const handleCloseChart1 = () => setOpenChart1(false);

  const [openChart2, setOpenChart2] = React.useState(false);
  const handleOpenChart2 = () => setOpenChart2(true);
  const handleCloseChart2 = () => setOpenChart2(false);

  const [openChart3, setOpenChart3] = React.useState(false);
  const handleOpenChart3 = () => setOpenChart3(true);
  const handleCloseChart3 = () => setOpenChart3(false);

  const [openChart4, setOpenChart4] = React.useState(false);
  const handleOpenChart4 = () => setOpenChart4(true);
  const handleCloseChart4 = () => setOpenChart4(false);

  const [openChart5, setOpenChart5] = React.useState(false);
  const handleOpenChart5 = () => setOpenChart5(true);
  const handleCloseChart5 = () => setOpenChart5(false);

  const [openChart6, setOpenChart6] = React.useState(false);
  const handleOpenChart6 = () => setOpenChart6(true);
  const handleCloseChart6 = () => setOpenChart6(false);

  //Modal History
  const [openHistory1, setOpenHistory1] = React.useState(false);
  const handleOpenHistory1 = () => setOpenHistory1(true);
  const handleCloseHistory1 = () => setOpenHistory1(false);

  const [openHistory2, setOpenHistory2] = React.useState(false);
  const handleOpenHistory2 = () => setOpenHistory2(true);
  const handleCloseHistory2 = () => setOpenHistory2(false);

  const [openHistory3, setOpenHistory3] = React.useState(false);
  const handleOpenHistory3 = () => setOpenHistory3(true);
  const handleCloseHistory3 = () => setOpenHistory3(false);

  const [openHistory4, setOpenHistory4] = React.useState(false);
  const handleOpenHistory4 = () => setOpenHistory4(true);
  const handleCloseHistory4 = () => setOpenHistory4(false);

  const [openHistory5, setOpenHistory5] = React.useState(false);
  const handleOpenHistory5 = () => setOpenHistory5(true);
  const handleCloseHistory5 = () => setOpenHistory5(false);

  const [openHistory6, setOpenHistory6] = React.useState(false);
  const handleOpenHistory6 = () => setOpenHistory6(true);
  const handleCloseHistory6 = () => setOpenHistory6(false);

  return (
    <div className="App">
      <div className="header">
        <div className="title">DATA SENSORS AND MORE </div>
      </div>
      <div className="line-1">
        <div className="dht11">
          <div className="nav">
            <Button onClick={handleOpenChart1} className="icon">
              <BarChartIcon />
            </Button>
            <Modal open={openChart1} onClose={handleCloseChart1}>
              <Box>
                <Chart1 />
              </Box>
            </Modal>
            <Button onClick={handleOpenHistory1} className="icon">
              <HistoryIcon />
            </Button>
            <Modal open={openHistory1} onClose={handleCloseHistory1}>
              <Box>
                <History1 />
              </Box>
            </Modal>
          </div>
          <div className="sensor-title-1">DHT11-1</div>
          <div className="sensor-value">
            <div className="temp-humi-title">
              <div className="temp-title border-right">Temp (°C)</div>
              <div className="humi-title">Humi (%) </div>
            </div>
            <div className="temp-humi-value">
              <div className="temp-value border-right">35</div>
              <div className="temp-value">50</div>
            </div>
          </div>
        </div>
        <div className="dht11">
          <div className="nav">
            <Button onClick={handleOpenChart2} className="icon">
              <BarChartIcon />
            </Button>
            <Modal open={openChart2} onClose={handleCloseChart2}>
              <Box>
                <Chart2 />
              </Box>
            </Modal>
            <Button onClick={handleOpenHistory2} className="icon">
              <HistoryIcon />
            </Button>
            <Modal open={openHistory2} onClose={handleCloseHistory2}>
              <Box>
                <History2 />
              </Box>
            </Modal>
          </div>
          <div className="sensor-title-1">DHT11-2</div>
          <div className="sensor-value">
            <div className="temp-humi-title">
              <div className="temp-title border-right">Temp (°C)</div>
              <div className="humi-title">Humi (%)</div>
            </div>
            <div className="temp-humi-value">
              <div className="temp-value border-right">20</div>
              <div className="temp-value">80</div>
            </div>
          </div>
        </div>
      </div>
      <div className="line-2">

          <div className="light-sensor">
            <div className="nav">
              <Button onClick={handleOpenChart3} className="icon">
                <BarChartIcon />
              </Button>
              <Modal open={openChart3} onClose={handleCloseChart3}>
                <Box>
                  <Chart3 />
                </Box>
              </Modal>
              <Button onClick={handleOpenHistory3} className="icon">
                <HistoryIcon />
              </Button>
              <Modal open={openHistory3} onClose={handleCloseHistory3}>
                <Box>
                  <History3 />
                </Box>
              </Modal>
            </div>
            <div className="sensor-title-2">BH1750</div>
            <div className="light">
              <div className="light-title border-right"> Light (Lux) </div>
              <div className="light-value"> 999 </div>
            </div>
          </div>
          <div className="gas-sensor">
            <div className="nav">
              <Button onClick={handleOpenChart4} className="icon">
                <BarChartIcon />
              </Button>
              <Modal open={openChart4} onClose={handleCloseChart4}>
                <Box>
                  <Chart4 />
                </Box>
              </Modal>
              <Button onClick={handleOpenHistory4} className="icon">
                <HistoryIcon />
              </Button>
              <Modal open={openHistory4} onClose={handleCloseHistory4}>
                <Box>
                  <History4 />
                </Box>
              </Modal>
            </div>
            <div className="sensor-title-3">MQ5</div>
            <div className="gas">
              <div className="gas-title border-right">Gas</div>
              <div className="gas-value">9999</div>
            </div>
          </div>

          <div className="light-sensor">
            <div className="nav">
              <Button onClick={handleOpenChart5} className="icon">
                <BarChartIcon />
              </Button>
              <Modal open={openChart5} onClose={handleCloseChart5}>
                <Box>
                  <Chart5 />
                </Box>
              </Modal>
              <Button onClick={handleOpenHistory5} className="icon">
                <HistoryIcon />
              </Button>
              <Modal open={openHistory5} onClose={handleCloseHistory5}>
                <Box>
                  <History5 />
                </Box>
              </Modal>
            </div>
            <div className="sensor-title-2">BH1750</div>
            <div className="light">
              <div className="light-title border-right"> Light (Lux) </div>
              <div className="light-value"> 999 </div>
            </div>
          </div>
          <div className="gas-sensor">
            <div className="nav">
              <Button onClick={handleOpenChart6} className="icon">
                <BarChartIcon />
              </Button>
              <Modal open={openChart6} onClose={handleCloseChart6}>
                <Box>
                  <Chart6 />
                </Box>
              </Modal>
              <Button onClick={handleOpenHistory6} className="icon">
                <HistoryIcon />
              </Button>
              <Modal open={openHistory6} onClose={handleCloseHistory6}>
                <Box>
                  <History6 />
                </Box>
              </Modal>
            </div>
            <div className="sensor-title-3">MQ5</div>
            <div className="gas">
              <div className="gas-title border-right">Gas</div>
              <div className="gas-value">9999</div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
