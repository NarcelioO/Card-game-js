import './scr/styles/settings/colors.css'
import './scr/styles/elements/base.css'
import './scr/styles/generic/reset.css'
import BoardGame from "./scr/components/ojects/BoardGames"
import Playername from './scr/components/PlayerName'
const $app = document.querySelector("#app")



$app.insertAdjacentHTML("beforeend",
`
${Playername('Player 1')}
${Playername('Player 2')}
${BoardGame(6)}

`
)
