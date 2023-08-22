/** @jsxImportSource @emotion/react */
import { BaseTypes } from "@/app/tpyes/common";

export default function Label({children, ...props}:BaseTypes){
    return(
        <p {...props}>
            {children}
        </p>
    );
}