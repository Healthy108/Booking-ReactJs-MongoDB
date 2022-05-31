import { Link } from "react-router-dom"
import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Tiết kiệm thời gian, tiết kiệm tiền bạc!</h1>
      <span className="mailDesc">Hãy đăng ký và chúng tôi sẽ gửi những ưu đãi tốt nhất cho bạn !</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Nhập email của bạn..." />
        <button><Link to='/register' style={{textDecoration: 'none', color: 'yellow', fontWeight: 'bold'}}>Đăng ký ngay</Link></button>
      </div>
    </div>
  )
}

export default MailList