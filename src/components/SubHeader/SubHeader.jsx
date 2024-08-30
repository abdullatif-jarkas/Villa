import {
  FaEnvelope,
  FaMap,
} from "react-icons/fa";
import "./SubHeader.css";

const SubHeader = ({ icons }) => {
  return (
    <div className="sub-header">
      <div className="container">
        <div className="row">
          <ul className="sub-header-info">
            <li>
              <FaEnvelope />
              <a href="#" className="sub-header-info-link">info@company.com</a>
            </li>
            <li>
              <FaMap />
              <a href="#" className="sub-header-info-link">Sunny Isles Beach, FL 33160</a>
            </li>
          </ul>
          <ul className="sub-header-social-links">
            {icons.map((element, index) => {
              return (
                <li key={index}>
                  <a href="#" className={element.className}>
                    {element.icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
