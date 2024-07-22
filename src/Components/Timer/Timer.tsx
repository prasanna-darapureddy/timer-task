import { Box, Button, Paper, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { styles } from './TimerStyles'

interface Istate{
    timer: number;
    isStarted: boolean;
    isStopped: boolean;
    isReset: boolean;
}

function Timer() {
    const [timer, setTime] = useState<Istate['timer']>(0)
    const [isStarted, setIsStarted] = useState<Istate['isStarted']>(false)
    const [isStopped, setIsStopped] = useState<Istate['isStopped']>(true)
    const [isReset, setIsReset] = useState<Istate['isReset']>(true)
    

    useEffect(() => {     
        let timerId:NodeJS.Timer   
        isStarted && (timerId = setInterval(() => {setTime((timer) => timer + 1)}, 1000))

        return () => {
            clearInterval(timerId)
        }
    }, [isStarted])

    const onClickStart = () => {
        setIsStarted(true)
        setIsStopped(false)
        setIsReset(false)
    }

    const onClickStop = () => {
        setIsStarted(false)
        setIsStopped(true)
        setIsReset(false)
    }

    const onClickReset = () => {
        setTime(0)
        setIsStarted(false)
        setIsStopped(true)
        setIsReset(true)
    }

    const arry = [1, 2, 3]
    const sum = arry.reduce((cur, next) => cur + next)
    console.log(sum)

  return (
    <Box sx={styles.timer_page}>
        <Typography variant='h1'>Timer</Typography>
        <Paper sx={styles.timer_card}>
            <Typography variant='h1'>{timer}</Typography>
            <Box sx={styles.buttons_container}>
                {isStarted === true ? <Button variant='contained' disabled>Start</Button> : <Button variant='contained' onClick = {onClickStart}>Start</Button>}
                {isStopped === true ?  <Button variant='contained' disabled>Stop</Button> : <Button variant='contained' onClick={onClickStop}>Stop</Button>}
                {isReset === true ?  <Button variant='contained' disabled>Reset</Button> : <Button variant='contained' onClick={onClickReset}>Reset</Button>}
            </Box>
        </Paper>
    </Box>
  )
}

export default Timer