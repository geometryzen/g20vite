import { initBoard } from '@g20/svg'
import './style.css'

const board = initBoard('my-board')

board.rectangle({
    fillColor: "#FFFF00",
    fillOpacity: 0.3,
    strokeColor: "#FFCC00",
    strokeOpacity: 0.6
})

