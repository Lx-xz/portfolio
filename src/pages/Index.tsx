import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Display } from "../components/Display";

export function Index() {
    return (
        <main>
            <About />
            <Display />
            <Contact />
        </main>
    )
}