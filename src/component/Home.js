import React ,{useState}from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const [isSliding, setIsSliding] = useState(false);
  const [nextPath, setNextPath] = useState('');
  const options = [
    {
      icon: "bi-key",
      title: "Account",
      description: "Security notifications, change number",
       path: "/account"
    },

    
    {
      icon: "bi-shield-lock",
      title: "Privacy",
      description: "Control who can see your info",
       path: "/privacy"
    },

    {
      icon: "bi bi-emoji-sunglasses-fill",
      title: "Avatar",
      description: "Control who can see your info"
    },

    {
      icon: "bi bi-chat-left-text",
      title: "Chats",
      description: "Control who can see your info"
    },

    {
      icon: "bi bi-bell",
      title: "Notifications",
      description: "Control who can see your info"
    },

    {
      icon: "bi bi-server",
      title: "Storage and data",
      description: "Control who can see your info"
    },

    {
      icon: "bi bi-globe-asia-australia",
      title: "App language",
      description: "Control who can see your info"
    },

    {
      icon: "bi bi-question-circle",
      title: "Help",
      description: "Control who can see your info"
    },

    {
      icon: "bi bi-person-bounding-box",
      title: "Invite a friend",
   
    },

    {
      icon: "bi bi-phone",
      title: "App update",

    },
    // Add more options as needed //
  ];

  const handleOptionClick = (path) => {
    setIsSliding(true);
    setNextPath(path);
  };

  const handleTransitionEnd = () => {
    if (isSliding) {
      navigate(nextPath);
    }
  };
  return (
    <div className={`root ${isSliding ? 'slide-enter' : ''}`} 
    onTransitionEnd={handleTransitionEnd}>
      <nav>
        <div className="setting">
          <div className="left-items">
            <i className="bi bi-arrow-left-short" style={{ color: 'snow', fontSize: '40px' }}></i>
            <h2 style={{ color: 'snow' }}>Settings</h2>
          </div>
          <i className="bi bi-search search-icon" style={{ color: 'snow', fontSize: '20px' }}></i>
        </div>
      </nav>

      <div className="item">
        <div className="profile">

          <div className="ping">
          <i className="bi bi-person "  style={{ color: 'snow', fontSize: '40px', borderRadius:'50%', border:'solid gray 1px', padding:'10px'}}></i>
          </div>
         <div className="Pname">
          <h2>CHANDAN RAJ..</h2>
          <span>RAJPUT</span>
         </div>
        <div className="picon">
        <i class="bi bi-qr-code"  style={{ color: 'green', fontSize: '22px' }}></i>

        <i class="bi bi-arrow-down-circle" style={{ color: 'green', fontSize: '22px' }}></i>
        </div>
        </div>

        {options.map((option, index) => (
          <div className="option" key={index}  onClick={() => handleOptionClick(option.path)}>
            <i className={`bi ${option.icon}`} style={{ color: 'gray', fontSize: '25px' }}></i>
            <div className="text-content">
              <h3>{option.title}</h3>
              <span>{option.description}</span>
            </div>
          </div>
        ))}
        
        <footer className="footer">
        <span>from</span>
        <span style={{color:'snow'}}><i class="bi bi-meta"></i>   Meta</span>
      </footer>
      </div>
    </div>
  );
}
