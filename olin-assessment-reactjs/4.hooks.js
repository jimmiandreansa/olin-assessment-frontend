import { useEffect } from "react";

const Timer = () => {
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecond(second => second + 1)
    }, 1000);
    return () => clearInterval(interval)
  }, [])

  return <div>Timer: {second} second</div>
}

export default Timer;