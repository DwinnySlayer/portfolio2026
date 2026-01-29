import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./LoadingBar.css";

const LoadingBar = () => {
    const location = useLocation();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setVisible(true);

        const timer = setTimeout(() => {
            setVisible(false);
        }, 600);

        return () => clearTimeout(timer);
    }, [location.pathname]);

    if (!visible) return null;

    return <div className="loading-bar-line" />;
};

export default LoadingBar;
