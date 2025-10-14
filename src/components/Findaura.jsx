import { useState, useRef, useEffect } from 'react';


function Avatar() {
    const [isSessionActive, setIsSessionActive] = useState(false);
    const localVideoRef = useRef(null);
    const avatarVideoRef = useRef(null);
  
    const [microphones, setMicrophones] = useState([{ id: 'mic1', label: 'Default Microphone' }]);
    const [webcams, setWebcams] = useState([{ id: 'cam1', label: 'Default Webcam' }]);
  
    const [selectedMic, setSelectedMic] = useState('mic1');
    const [selectedCam, setSelectedCam] = useState('cam1');

    
  
    useEffect(() => {
      // Logic to get local stream and populate devices would go here
    }, []);
  
    const handleStartStop = async () => {
        if (isSessionActive) {
            // Logic to close the session
            setIsSessionActive(false);
            // Clean up peer connection, etc.
        } else {
            try {
                // 1. Fetch the ephemeral token from your backend
                const response = await fetch('/api/realtime/session', {
                    method: 'POST',
                });
    
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
    
                const data = await response.json();
                console.log('Session data received:', data);
                
                // 2. Use the token to start the WebRTC session
                startWebRTCSession(data.client_secret);
    
                setIsSessionActive(true);
            } catch (error) {
                console.error('Failed to create or start the session:', error);
                setIsSessionActive(false);
            }
        }
    };

    // This function will contain the WebRTC logic
const startWebRTCSession = async (clientSecret) => {
    // WebRTC logic will go here
    console.log("Starting WebRTC session with client secret:", clientSecret);
};

  
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h1 className="text-3xl font-bold text-indigo-800 mb-6">HeyGen Avatar Interface</h1>
          <div className="flex flex-col items-center space-y-4 mb-6">
            <button
              onClick={handleStartStop}
              className={`px-6 py-2 text-lg rounded-md transition-colors duration-300
                ${isSessionActive ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'} text-white`}
            >
              {isSessionActive ? 'Stop Session' : 'Start Session'}
            </button>
            <div className="flex items-center space-x-4">
              <label htmlFor="mic-select" className="text-gray-700">Microphone:</label>
              <select
                id="mic-select"
                value={selectedMic}
                onChange={(e) => setSelectedMic(e.target.value)}
                className="p-2 border border-gray-300 rounded-md"
              >
                {microphones.map(mic => (
                  <option key={mic.id} value={mic.id}>{mic.label}</option>
                ))}
              </select>
              <label htmlFor="cam-select" className="text-gray-700">Webcam:</label>
              <select
                id="cam-select"
                value={selectedCam}
                onChange={(e) => setSelectedCam(e.target.value)}
                className="p-2 border border-gray-300 rounded-md"
              >
                {webcams.map(cam => (
                  <option key={cam.id} value={cam.id}>{cam.label}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex justify-center">
            <video
              ref={localVideoRef}
              autoPlay
              muted
              className="hidden" // Hides the local video feed
              title="Local Webcam Feed"
            ></video>
            <video
              ref={avatarVideoRef}
              autoPlay
              playsInline
              controls
              className="w-full max-w-xl border-2 border-gray-300 rounded-lg"
              title="HeyGen Avatar Stream"
            ></video>
          </div>
        </div>
      </div>
    );
  }
  
  export default Avatar;