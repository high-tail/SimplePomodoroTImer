export default class Time {
  static getTimeFromSeconds = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const seconds = secs % 60;

    return {
      seconds,
      minutes,
    };
  };

  static getSecondsFromMinutes = (minutes: number) => {
    return minutes * 60;
  }

  static getMinutesFromSeconds = (secs: number) => {
    return Math.floor(secs / 60);
  }

  static format = (time: ITime) => {
    const { minutes, seconds } = time;
    const format_minutes =
      minutes.toString().length === 1 ? "0" + minutes : minutes;
    const fromat_seconds =
      seconds.toString().length === 1 ? "0" + seconds : seconds;
    return format_minutes + " : " + fromat_seconds;
  };
}

export interface ITime {
  seconds: number;
  minutes: number;
}
