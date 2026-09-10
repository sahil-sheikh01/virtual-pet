import { useDispatch, useSelector } from "react-redux";
import { feed, heal, play, sleep } from "../redux/petSlice";

const Pet = () => {
    const name = useSelector((state) => state.pet.name);
    const health = useSelector((state) => state.pet.health);
    const hunger = useSelector((state) => state.pet.hunger);
    const energy = useSelector((state) => state.pet.energy);
    const coins = useSelector((state) => state.pet.coins);

    const dispatch = useDispatch();

    function getStatus(health, hunger, energy) {
        const status = [];

        if(health === 0) {
            status.push("Rest in Peace 🥀");
            return status;
        }

        if (health <= 20) {
            status.push("Sick 💀");
        }
        if (hunger <= 20) {
            status.push("Hungry 😭");
        }
        if (energy <= 20) {
            status.push("Tired 🥱");
        }
        if(status.length === 0) {
            status.push("Happy 😊");
        }

        return status;
    }

    const status = getStatus(health, hunger, energy);

    return (
        <div>
            <h1>{name} 🐶</h1>
            <p>❤ Health: {health}</p>
            <p>🍖 Hunger: {hunger}</p>
            <p>⚡ Energy: {energy}</p>
            <p>👛 Coins: {coins}</p>

            <div>
                <h2>Status:</h2>
                {
                    status.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))
                }
            </div>
            
            <button onClick={() => dispatch(feed())}>Feed</button>
            <button onClick={() => dispatch(play())}>Play</button>
            <button onClick={() => dispatch(sleep())}>Sleep</button>
            <button onClick={() => dispatch(heal())}>Heal</button>
        </div>
    )
}

export default Pet;