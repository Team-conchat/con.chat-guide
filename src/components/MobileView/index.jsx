import './style.scss';

import pcIcon from '../../assets/icons/icon-pc.png';

function MobileView() {
  return (
    <div className="page-mobile">
      <div className="inner">
        <div className="box-img">
          <img src={pcIcon} alt="pc 버전" />
        </div>
        <h1 className="title">PC버전으로 접속해주세요.</h1>
        <p className="desc">
          모바일 버전은 지원하지 않습니다. <br />
          PC환경에서 con.chat을 확인해주세요!
        </p>
      </div>
    </div>
  );
}

export default MobileView;
