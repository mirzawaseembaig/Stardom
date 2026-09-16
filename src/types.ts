export type StudioStep = 1 | 2 | 3 | 4 | 5 | 6;

export type RecordingMode = 'ready' | 'recording' | 'reviewing';

export interface LyricLine {
  id: string;
  text: string;
  startTime: number; // in seconds
  endTime: number;   // in seconds
  isSynced: boolean;
}

export interface AudioTrackState {
  instrumentalUrl: string | null;
  instrumentalName: string | null;
  instrumentalDuration: number;
  vocalUrl: string | null;
  vocalName: string | null;
  recordedVocalBlob: Blob | null;
  recordedVocalUrl: string | null;
  musicVolume: number; // 0 to 1
  vocalVolume: number; // 0 to 1
  masterVolume: number;// 0 to 1
  audioEffect: 'none' | 'studio' | 'reverb' | 'warm' | 'superstar' | 'vintage' | 'echo';
}

export interface SongMetadata {
  id: string;
  title: string;
  artist: string;
  genre: string;
  bpm: number;
  key: string;
  description: string;
  thumbnailUrl: string;
  thumbnailSize: number; // 250 default
  tags: string[];
  status: 'draft' | 'scheduled' | 'published';
  scheduledTime?: string;
  createdAt: string;
  updatedAt: string;
}

export interface StardomProject {
  metadata: SongMetadata;
  lyrics: LyricLine[];
  audio: AudioTrackState;
  currentStep: StudioStep;
  savedAt: string;
}
