/** @jsxImportSource @emotion/react */
import { BaseTypes } from "@/app/tpyes/common";

export default function Box({children, ...props}:BaseTypes){
    return(
        <div {...props}>
            {children}
        </div>
    );
}