/// 125 --> 2:05

export const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const rest = (seconds % 60).toFixed(0)
    const restSeconds = rest < 10 ? `0${rest}` : rest;

    return `${minutes}:${restSeconds}`   

}
