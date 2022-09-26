import React from "react";
import { NavMenuMui } from "./NavMenuMui";
import { NavMenuStatic } from "./NavMenuStatic";
export const NavMenu = ({ pages, page, className }) => {
    const [client, setClient] = React.useState(false);
    React.useEffect(() => {
        setClient(true);
    }, []);
    return (
        <>
            {client ? (
                <NavMenuMui pages={pages} page={page} className={className} />
            ) : (
                <NavMenuStatic
                    pages={pages}

                    classname={className}
                />
            )}
        </>
    );
};
