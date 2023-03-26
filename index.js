const App = () => {
  const audioClips = [
    {
      keyCode: 81,
      letter: "Q",
      id: "Heater-1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      keyCode: 87,
      letter: "W",
      id: "Heater-2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      keyCode: 69,
      letter: "E",
      id: "Heater-3",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      keyCode: 65,
      letter: "A",
      id: "Heater-4",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      keyCode: 83,
      letter: "S",
      id: "Clap",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      keyCode: 68,
      letter: "D",
      id: "Open-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      keyCode: 90,
      letter: "Z",
      id: "Kick_n_Hat",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      keyCode: 88,
      letter: "X",
      id: "Kick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      keyCode: 67,
      letter: "C",
      id: "Closed-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  const [displayLetter, setDisplayLetter] = React.useState("");
  const playSound = (e) => {
    const audioTag = document.getElementById(e);
    audioTag.play();
    setDisplayLetter(e);
  };

  React.useEffect(() => {
    document.addEventListener("keydown", (e) => {
      playSound(e.key.toUpperCase());
    });
  }, []);

  return (
    <div className="App">
      <div id="drum-machine">
        <h1 className="text-center mb-2 pb-2">Drum Machine</h1>
        <div id="display">{displayLetter}</div>
        <div className="audioClips">
          {audioClips.map((clip) => (
            <div
              key={clip.url}
              onClick={() => {
                playSound(clip.letter);
              }}
              className="drum-pad"
              id={clip.url}
            >
              {clip.letter}
              <audio className="clip" id={clip.letter} src={clip.url}></audio>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
