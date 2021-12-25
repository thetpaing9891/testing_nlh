import { Route, Router, Routes } from "react-router-dom"
import { AboutComponent } from "../about"
import { ContactComponent } from "../contact"
import { HomeComponent } from "../home"
import { NavigationComponent } from "../layout/navigation"
import { WorkComponent, WorkDetailComponent } from "../work"

const MainComponent = () => {

    return (
        <>
            <NavigationComponent></NavigationComponent>
            <Routes>
                <Route path="/" element={<HomeComponent />} />
                <Route path="/about" element={<AboutComponent />} />
                <Route path="/my-work" element={<WorkComponent />} />
                <Route path="/work/:id" element={<WorkDetailComponent />} />
                <Route path="/contact" element={<ContactComponent />} />
            </Routes>
        </>
    )
}
export default MainComponent