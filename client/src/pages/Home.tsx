import Button from "react-bootstrap/Button"
import { useRef } from "react"
import { useSearchParams } from "react-router-dom"

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams({ roomCode: "" })
  const roomCodeRef = useRef<HTMLInputElement | null>(null)
  const roomCode = searchParams.get("roomCode")

  function createNewGame() {
    if (!roomCodeRef.current) return
    roomCodeRef.current.value = ""

    /*
    to={`/new-game/${roomCode}`}
    */
  }
  function joinGame() {
    if (!roomCodeRef.current) return
    roomCodeRef.current.value = ""
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
          ref={roomCodeRef}
          value={roomCode || ""}
          onChange={(e) =>
            setSearchParams((prev) => {
              prev.set("roomCode", e.target.value)
              return prev
            })
          }
          placeholder="Enter room code"
          className="room-code-input"
        />
      </div>
      <div className="game-buttons">
        <Button onClick={createNewGame} className="new-game-button game-button">
          New Game
        </Button>
        <Button onClick={joinGame} className="join-game-button game-button">
          Join Game
        </Button>
      </div>
    </div>
  )
}
