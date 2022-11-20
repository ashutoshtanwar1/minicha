import { FC } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home, { miniChallenges } from "./sections/Home";
import Header from "./components/Header";
import MainWrapper from "./components/MainWrapper";

const App: FC = () => {
    return (
        <MainWrapper>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Navigate to="/" />} />
                    {miniChallenges.map(({ route, element }) => (
                        <Route key={route} path={route} element={element} />
                    ))}
                </Routes>
            </Router>
        </MainWrapper>
    );
};

export default App;
