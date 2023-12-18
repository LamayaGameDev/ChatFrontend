import { ReactMediaRecorder } from "react-media-recorder";
import RecordIcon from "./RecordIcon";

type Props = {
  handleStop: any;
};

export const RecordMessage = ({ handleStop }: Props) => {
  return (
     <div>
    <ReactMediaRecorder
      audio
      onStop={handleStop}
      render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
        <div className="mt-2">
          <p className="mt-2 text-white font-light">{status}</p>
            
            
          
            
<div className="flex">
<button className="bg-blue-900 p-4 rounded-full text-white" 
onClick={startRecording}>Start</button>
<RecordIcon
              classText={
                status == "recording"
                  ? "animate-pulse text-red-500"
                  : "text-sky-500"
              }
            />
<button className="bg-blue-900 p-4 rounded-full text-white" 
onClick={stopRecording}>Stop</button>

</div>

          
        </div>
      )}
    />
   </div>
  );
};

export default RecordMessage;
