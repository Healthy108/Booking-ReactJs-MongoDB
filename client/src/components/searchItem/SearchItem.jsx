import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}Từ trung tâm</span>
        <span className="siTaxiOp">Taxi sân bay miễn phí</span>
        <span className="siSubtitle">
          Căn hộ dạng Studio có Máy lạnh
        </span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Hủy dịch vụ miễn phí này? </span>
        <span className="siCancelOpSubtitle">
           Bạn có thể hủy sau, vì vậy hãy chốt giá ưu đãi này ngay hôm nay!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && <div className="siRating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">${item.cheapestPrice}</span>
          <span className="siTaxOp">Bao gồm thuế và phí</span>
          <Link to={`/hotels/${item._id}`}>
          <button className="siCheckButton">Xem tình trạng dịch vụ</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
