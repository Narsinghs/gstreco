import React from "react";
import Sidebar from "../components/Sidebar";
import Video from "../assets/HTU.mp4"; // Adjust the path as needed

export default function Ap_HTU() {
  return (
    <div className="flex h-screen bg-gray-500 overflow-auto">
      <Sidebar />
      <div className="flex-1 flex flex-col items-center mt-24 mb-8">
        <div className="w-full max-w-[900px] rounded overflow-hidden ml-10"> {/* Adjust the margin-left here */}
          <video
            src={Video}
            controls
            className="w-full"
            style={{ maxWidth: "900px" }}
            aria-labelledby="videoTitle"
          >
            <track
              kind="captions"
              label="English"
              src="path_to_captions.vtt"
              default
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="mt-4 text-right">
        </div>
      </div>
    </div>
  );
}
