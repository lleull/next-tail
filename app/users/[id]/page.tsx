import { useParams } from "next/navigation"
import { Redirect } from "next"
const App = () => {
    const params = useParams()
    console.log("Params", params)
    return (
        <div className="w-full h-full items-center justify-center">
            No user Found
        </div>
    )
}

export default App