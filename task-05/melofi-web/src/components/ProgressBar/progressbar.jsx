import "./progressbar.css";

const ProgressBar = (props) => {
    return (
        <div className="progress-controls-wrapper">
            <div className="progress-bar-container">
                <div className="progress-fill" style={{ width: props.width }}></div>
            </div>

            <div className="playback-controls">
                <button className="ctrl-btn secondary-icon">☰</button> 
                
                <div className="main-playback">
                    <button className="ctrl-btn">⏮</button> 
                    <button className="play-btn">▶</button>  
                    <button className="ctrl-btn">⏭</button> 
                </div>

                <button className="ctrl-btn secondary-icon">≺</button>
            </div>
        </div>
    );
}

export default ProgressBar;