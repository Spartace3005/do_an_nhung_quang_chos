import "../Style/history.scss";

const History2 = () => {
  return (
    <div className="historyLine1">
      <div className="title">SENSOR MEASUREMENT HISTORY OF DHT11-2</div>
      <div className="header">
        <div className="header-content h-id">ID</div>
        <div className="header-content h-time">Thời gian</div>
        <div className="header-content h-temp">Nhiệt độ</div>
        <div className="header-content h-humi">Độ ẩm</div>
      </div>

      <div className="body">
        <div className="id-content">1</div>
        <div className="time-content">22-30-40</div>
        <div className="temp-content">20</div>
        <div className="humi-content">88</div>
      </div>
    </div>
  );
};
export default History2;
