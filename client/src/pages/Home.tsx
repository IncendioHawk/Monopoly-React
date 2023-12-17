import Button from "react-bootstrap/Button"
import { useRef, useState } from "react"

export default function Home() {
  const [roomCode, setRoomCode] = useState("")
  const newGameButtonRef = useRef<HTMLButtonElement | null>(null)
  const joinGameButtonRef = useRef<HTMLButtonElement | null>(null)

  function createNewGame() {
    /*
    to={`/new-game/${roomCode}`}
    */
  }
  function joinGame() {
    /*
    to={`/join-game/${roomCode}`}
    */
  }

  return (
    <div className="container">
      <div className="header">
        <h1 className="title">Welcome to Monopoly!</h1>
        <p>Start a new game or join an existing one.</p>
        <input
          type="text"
          value={roomCode}
          onChange={(e) => setRoomCode(e.target.value)}
          placeholder="Enter room code"
          className="room-code-input"
        />
      </div>
      <div className="game-buttons">
        <Button
          ref={newGameButtonRef}
          onClick={createNewGame}
          className="new-game-button game-button">
          New Game
        </Button>
        <Button ref={joinGameButtonRef} onClick={joinGame} className="join-game-button game-button">
          Join Game
        </Button>
      </div>
    </div>
  )
}
