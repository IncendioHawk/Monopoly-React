import Button from "react-bootstrap/Button"
import { useState } from "react"

export default function Home() {
  const [roomCode, setRoomCode] = useState("")

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
        <Button onClick={createNewGame} className="new-game-button">
          New Game
        </Button>
        <Button onClick={joinGame} className="join-game-button">
          Join Game
        </Button>
      </div>
    </div>
  )
}
