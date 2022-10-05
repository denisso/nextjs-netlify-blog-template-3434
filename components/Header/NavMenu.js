import React from "react";
import { NavMenuMui } from "./NavMenuMui";
import { NavMenuStatic } from "./NavMenuStatic";
export const NavMenu = ({ pages, url, className }) => {
    const [client, setClient] = React.useState(false);
    React.useEffect(() => {
        setClient(true);
    }, []);

    return (
        <>
            {client ? (
                <NavMenuMui pages={pages} url={url} className={className} />
            ) : (
                <NavMenuStatic pages={pages} className={className} />
            )}
        </>
    );
};
