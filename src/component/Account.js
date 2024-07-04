import React from 'react';
import { useState } from 'react';
import './Account.css';
import { useNavigate } from 'react-router-dom';


export default function Account() {
  const navigate = useNavigate();
  const [isSliding, setIsSliding] = useState(false);
    const options = [
        { icon: "bi bi-shield-shaded", title: "Security notification", path: "/account" },
        { icon: "bi bi-person-fill-lock", title: "Passkeys" },
        { icon: "bi bi-envelope-open", title: "Email address" },
        { icon: "bi bi-person-check-fill", title: "Two-step verification" },
        { icon: "bi bi-phone-flip", title: "Change number" },
        { icon: "bi bi-file-earmark-text", title: "Request account info" },
        { icon: "bi bi-person-plus", title: "Add account" },
        { icon: "bi bi-trash", title: "Delete account" },
    ];
    const handleTransitionEnd = () => {
        if (isSliding) {
          navigate('/');
        
        }
      };
    const handleBackClick = () => {
        setIsSliding(true);

    
    };

    return (
       <div className="root">
            <div className={` ${isSliding ? 'Aslide-enter' : ''}`} 
            onTransitionEnd={handleTransitionEnd}>
                <nav>
                    <div className="setting">
                        <div className="left-items">
                            <i
                                className="bi bi-arrow-left-short"
                                style={{ color: 'snow', fontSize: '40px' }}
                                onClick={handleBackClick}
                            ></i>
                            <h2 style={{ color: 'snow' }}>Account</h2>
                        </div>
                    </div>
                </nav>
                <div className="Aitem">
                    {options.map((option, index) => (
                        <div className="option" key={index}>
                            <i className={`bi ${option.icon}`} style={{ color: 'gray', fontSize: '22px' }}></i>
                            <div className="text-content">
                                <h3>{option.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            </div>
    
    );
}
