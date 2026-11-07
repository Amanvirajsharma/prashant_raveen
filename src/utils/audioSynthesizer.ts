/**
 * Ambient Indian Classical Drone (Raag Yaman Tanpura & Bansuri Flute Harmonics)
 * Synthesized using the Web Audio API for 100% reliability with zero external audio assets.
 */

class IndianAmbientAudio {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private masterGain: GainNode | null = null;
  private oscillators: OscillatorNode[] = [];
  private melodyInterval: number | null = null;

  private init() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public play() {
    this.init();
    if (!this.ctx || this.isPlaying) return;

    this.isPlaying = true;
    const now = this.ctx.currentTime;

    // Master Gain with smooth fade in
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.001, now);
    this.masterGain.gain.exponentialRampToValueAtTime(0.18, now + 3);
    this.masterGain.connect(this.ctx.destination);

    // Warm Tanpura Drone base frequencies (Sa, Pa, Sa high) in C# (around 138.59 Hz)
    const baseFreq = 138.59;
    const droneNotes = [
      baseFreq * 0.5, // Low Sa (69.3 Hz)
      baseFreq,       // Sa (138.6 Hz)
      baseFreq * 1.5, // Pa (207.9 Hz)
      baseFreq * 2,   // High Sa (277.2 Hz)
      baseFreq * 2.25 // Shuddha Ga (311.8 Hz)
    ];

    droneNotes.forEach((freq, idx) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, now);

      // Subtle warm filter for acoustic wood resonance
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(600 + idx * 100, now);

      // Slow amplitude modulation for tanpura plucking feel
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.setValueAtTime(0.2 + idx * 0.08, now);
      lfoGain.gain.setValueAtTime(0.03, now);
      lfo.connect(lfoGain);

      const noteGain = 0.08 / (idx + 1);
      gain.gain.setValueAtTime(noteGain, now);
      lfoGain.connect(gain.gain);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      lfo.start(now);
      this.oscillators.push(osc, lfo);
    });

    // Gentle random bansuri / swar flute notes in Raag Yaman: Sa, Re, Ga, Ma(Teevra), Pa, Dha, Ni
    const yamanRatios = [1, 9/8, 5/4, 45/32, 3/2, 5/3, 15/8, 2];
    const playFluteNote = () => {
      if (!this.ctx || !this.masterGain || !this.isPlaying) return;
      const noteTime = this.ctx.currentTime;
      const randomRatio = yamanRatios[Math.floor(Math.random() * yamanRatios.length)];
      const fluteFreq = baseFreq * 2 * randomRatio;

      const fluteOsc = this.ctx.createOscillator();
      const fluteGain = this.ctx.createGain();
      const fluteFilter = this.ctx.createBiquadFilter();

      fluteOsc.type = 'sine';
      fluteOsc.frequency.setValueAtTime(fluteFreq, noteTime);

      fluteFilter.type = 'bandpass';
      fluteFilter.frequency.setValueAtTime(fluteFreq, noteTime);
      fluteFilter.Q.setValueAtTime(4, noteTime);

      // Attack, sustain, release envelope
      fluteGain.gain.setValueAtTime(0.0001, noteTime);
      fluteGain.gain.exponentialRampToValueAtTime(0.06, noteTime + 1.2);
      fluteGain.gain.exponentialRampToValueAtTime(0.0001, noteTime + 4.5);

      fluteOsc.connect(fluteFilter);
      fluteFilter.connect(fluteGain);
      fluteGain.connect(this.masterGain);

      fluteOsc.start(noteTime);
      fluteOsc.stop(noteTime + 5);
    };

    // Trigger subtle flute note every 4-7 seconds
    this.melodyInterval = window.setInterval(() => {
      if (this.isPlaying) {
        playFluteNote();
      }
    }, 5500);
  }

  public pause() {
    if (!this.isPlaying || !this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    this.masterGain.gain.linearRampToValueAtTime(0.001, now + 1);

    setTimeout(() => {
      this.oscillators.forEach(osc => {
        try {
          osc.stop();
          osc.disconnect();
        } catch {
          // ignore already stopped
        }
      });
      this.oscillators = [];
      if (this.melodyInterval) {
        clearInterval(this.melodyInterval);
        this.melodyInterval = null;
      }
      this.isPlaying = false;
    }, 1100);
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }
}

export const ambientAudio = new IndianAmbientAudio();
