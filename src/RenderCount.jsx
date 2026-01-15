import { use } from "react";
import {useState} from "react";
import { useRef } from "react";

function useWhyDidYouUpdate(props) {
    const previousProps = useRef();

    useEffect(() => {
        if (!previousProps.current) {
            previousProps.current = props;
            return;
        }

        const previousPropsKeys = Object.keys(previousProps.current)
        const propsKeys = Object.keys(props)
        const keys = [...new Set([...previousPropsKeys, ...propsKeys])];    

        for (const key of keys) {
            if(previousProps.current[key] !== props[keys]) {
                const diff = {
                    [key]: {from: previousProps.current[key], to : props[key]}
                }
                console.log(`변경된 props: $(JSON.stringify(diff)}`);

            }
        }
        previousProps.current = props;
    }); 
    
}
export function RenderCount () {
    useWhyDidYouUpdate(props);

    return {
        <div style={{padding:20}}>
            <p>(JSON.stringify(props)</p>
            </div>  

    }
}