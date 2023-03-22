import Header from "../Header";
import { useContext, useEffect } from "react"
import { ProgramContext } from "../../contexts/ProgramContext"
import { ProgramsItem } from "./ProgramsItem"

export default function Programs() {
    const { programs } = useContext(ProgramContext)
    useEffect(() => { document.getElementById('programs').classList.add('active') }, [])

    return (
        <>
            <Header />
            <section id="features">
                <div className="container">
                    <h2>Our fitness programs</h2>
                    <p className="lead">workout programs for every body</p>

                    <div className="row">
                        {programs.map(programs => <ProgramsItem key={programs._id} programs={programs} />)}
                    </div>
                </div>
            </section>
        </>
    );
}