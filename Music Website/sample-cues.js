// sample-cues.js - The Artist Who Only Uses Ears
// Adds two short sounds to every audio player with class="sample-player":
//   - a rising two-note tone when the sample starts from the beginning
//   - a falling two-note tone when the music ends (the time is set by the
//     player's data-end-cue attribute, in seconds)
// The tones are made by the browser with the Web Audio API, so no extra
// sound files are needed. If JavaScript is off, the player still works; it
// just plays without the tones.

let toneContext = null;

// Plays a list of notes one after another. Each note is a frequency in hertz.
function playNotes(frequencies) {
    if (!toneContext) {
        toneContext = new AudioContext();
    }
    toneContext.resume();

    const noteLength = 0.14;   // seconds per note
    let startTime = toneContext.currentTime + 0.02;

    frequencies.forEach(function (frequency) {
        const oscillator = toneContext.createOscillator();
        const volume = toneContext.createGain();

        oscillator.type = "sine";
        oscillator.frequency.value = frequency;

        // Fade each note in and out quickly so it doesn't click.
        volume.gain.setValueAtTime(0, startTime);
        volume.gain.linearRampToValueAtTime(0.25, startTime + 0.02);
        volume.gain.linearRampToValueAtTime(0, startTime + noteLength);

        oscillator.connect(volume);
        volume.connect(toneContext.destination);
        oscillator.start(startTime);
        oscillator.stop(startTime + noteLength);

        startTime = startTime + noteLength + 0.03;
    });
}

const START_NOTES = [660, 880];   // rising: "the sample is starting"
const END_NOTES = [880, 660];     // falling: "the sample has ended"
const START_TONE_LENGTH = 400;    // milliseconds to wait before the music begins

document.querySelectorAll("audio.sample-player").forEach(function (player) {
    const endCue = Number(player.dataset.endCue);
    let startCuePlayed = false;
    let endCuePlayed = false;

    // When play is pressed at the very beginning of the sample, hold the music
    // for a moment, play the rising tone, then start the music.
    player.addEventListener("play", function () {
        if (!startCuePlayed && player.currentTime < 0.5) {
            startCuePlayed = true;
            player.pause();
            playNotes(START_NOTES);
            setTimeout(function () {
                player.play().catch(function () {});
            }, START_TONE_LENGTH);
        }
    });

    // While the sample plays, check the time. When it reaches the end cue,
    // play the falling tone once. The music's fade-out keeps playing after it.
    player.addEventListener("timeupdate", function () {
        if (!endCuePlayed && endCue && player.currentTime >= endCue) {
            endCuePlayed = true;
            playNotes(END_NOTES);
        }
    });

    // If the listener jumps back before the end cue, let the end tone play again.
    player.addEventListener("seeked", function () {
        if (player.currentTime < endCue) {
            endCuePlayed = false;
        }
    });

    // When the whole file finishes, reset both tones for the next listen.
    player.addEventListener("ended", function () {
        startCuePlayed = false;
        endCuePlayed = false;
    });
});
