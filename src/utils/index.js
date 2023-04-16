export const formatSize = (size) => {
  if (size < 1000) return `${size} o`;
  if (size < 10000) return `${Math.floor((size / 1024) * 100) / 100} Ko`;
};

export const formatTime = (time) => {
  let remainingTime = time;

  const hours = Math.floor(remainingTime / 3600);
  remainingTime -= hours * 3600;

  const minutes = Math.floor(remainingTime / 60);
  remainingTime -= minutes * 60;

  const seconds = remainingTime;

  const hourstoString = hours < 10 ? `0${hours}` : `${hours}`;
  const minutestoString = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const secondstoString = seconds < 10 ? `0${seconds}` : `${seconds}`;

  return `${hourstoString}:${minutestoString}:${secondstoString}`;
}

// export const downloadBaseUrl = "http://localhost:5000/static";
export const downloadBaseUrl = "https://csv-annotator.onrender.com/static";