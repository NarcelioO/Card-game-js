import './scr/styles/settings/colors.css'
import './scr/styles/elements/base.css'
import './scr/styles/generic/reset.css'
import BoardGame from "./scr/components/ojects/BoardGames"
const $app = document.querySelector("#app")
const $htmlBoardGames = BoardGame(6)

$app.insertAdjacentHTML("beforeend", $htmlBoardGames)
