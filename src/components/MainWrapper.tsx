import React, { createContext, FC, useContext, useMemo, useReducer, useState } from "react";
import { APP_TYPES } from "../constants";

type MainWrapperProps = {
    children: React.ReactElement;
};

export const AppTypeContext = createContext({
    appType: APP_TYPES.REACT,
    toggleAppType: () => {},
});

const MainWrapper: FC<MainWrapperProps> = ({ children }) => {
    const [appType, toggleAppType] = useReducer(
        a => (a === APP_TYPES.REACT ? APP_TYPES.VANILLA : APP_TYPES.REACT),
        APP_TYPES.REACT
    );
    const valueObject = useMemo(() => ({ appType, toggleAppType }), []);
    return <AppTypeContext.Provider value={valueObject}>{children}</AppTypeContext.Provider>;
};

export default MainWrapper;
