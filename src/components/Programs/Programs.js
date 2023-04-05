// React, Hooks
import { useContext } from "react"

// Context
import { ProgramContext } from "../../contexts/ProgramContext"

// Components
import { ProgramsItem } from "./ProgramsItem"
import Header from "../Header";

export default function Programs() {
    const { programs } = useContext(ProgramContext)

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