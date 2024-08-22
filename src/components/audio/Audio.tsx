import { FaPause, FaPlay } from "react-icons/fa";

const Audio = ({
  dataAudio,
  audioRef,
  isPlaying,
  toggleAudio,
  setIsPlaying,
}) => {
  return (
    <>
      <div
        className="z-50 fixed bottom-10 right-[50px] md:right-1/3 w-8 h-8 p-1 rounded-full bg-primary flex justify-center items-center text-white cursor-pointer"
        onClick={toggleAudio}
      >
        {!isPlaying ? <FaPlay /> : <FaPause />}
      </div>
      {dataAudio.map((value, index) => (
        <audio
          key={index}
          ref={audioRef}
          src={value.audio}
          loop
          onCanPlay={() => {
            if (!isPlaying) {
              console.log("Audio is ready to play");
              audioRef.current.play().catch((error) => {
                console.error("Audio playback failed: ", error);
              });
              setIsPlaying(true);
            }
          }}
        />
      ))}
    </>
  );
};

export default Audio;
