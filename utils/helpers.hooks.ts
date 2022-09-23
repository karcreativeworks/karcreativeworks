import { useState, useEffect, useRef, MutableRefObject, SyntheticEvent } from "react";

export const generateUID = () => {
  var firstPart: string | number = (Math.random() * 46656) | 0;
  var secondPart: string | number = (Math.random() * 46656) | 0;
  firstPart = ("000" + firstPart.toString(36)).slice(-3);
  secondPart = ("000" + secondPart.toString(36)).slice(-3);
  return firstPart + secondPart;
};

export const useImageFade = () => {
  const [style, setStyle] = useState({
    opacity: 0,
    transition: "opacity 0.33s ease",
  });
  return {
    style,
    onLoad: (evt: SyntheticEvent<HTMLImageElement, Event>) => {
      console.log(evt);
      setStyle({ opacity: 1, transition: "opacity 0.33s ease" });
    },
    complete: () => {
      console.log("complete");
    },
  };
};

export const useNextImageImageFade = (_className: string) => {
  const [className, setClassName] = useState(`${_className} opacity-0`);
  return {
    className,
    onLoad: (target: any) => {
      //if (target.src.indexOf("data:image/gif;base64") < 0) {
      setClassName(`${_className} opacity-1`);
      //}
    },
  };
};

export const useTimer = (dateString: string) => {
  const [timer, setTimer] = useState({});
  let prevInterval: MutableRefObject<NodeJS.Timer | undefined> = useRef();
  const launchDate = new Date(dateString);
  const launchDateUTC = Date.UTC(
    launchDate.getUTCFullYear(),
    launchDate.getUTCMonth(),
    launchDate.getUTCDate(),
    0,
    0,
    0
  );

  useEffect(() => {
    function updateTimer() {
      const nowDate = new Date();
      var duration =
        launchDateUTC -
        Date.UTC(
          nowDate.getUTCFullYear(),
          nowDate.getUTCMonth(),
          nowDate.getUTCDate(),
          nowDate.getUTCHours(),
          nowDate.getUTCMinutes(),
          nowDate.getUTCSeconds()
        );
      const seconds = Math.floor((duration / 1000) % 60);
      const minutes = Math.floor((duration / (1000 * 60)) % 60);
      let hours = Math.floor(duration / (1000 * 60 * 60));
      if (hours > 24) hours = hours % 24;
      const days = Math.floor(duration / (1000 * 60 * 60 * 24));
      setTimer({
        days: days > 9 ? "" + days : "0" + days,
        hours: hours > 9 ? "" + hours : "0" + hours,
        minutes: minutes > 9 ? "" + minutes : "0" + minutes,
        seconds: seconds > 9 ? "" + seconds : "0" + seconds,
      });
    }
    if (prevInterval.current) {
      clearInterval(prevInterval.current);
    }
    updateTimer();
    prevInterval.current = setInterval(updateTimer, 1000);
  }, [dateString, launchDateUTC]);

  return {
    timer,
  };
};















