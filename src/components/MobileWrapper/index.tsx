import { FC } from "react";


const MobileWrapper: FC<{children: JSX.Element | JSX.Element[]}>= ({children}) => {
    return (
        <main className="mobile-wrapper max-w-md w-screen min-h-screen h-fit overflow-x-hidden shadow-sm bg-maritime-blue font-dm-sans">
            {children}
        </main>
    );
    
};

export default MobileWrapper;