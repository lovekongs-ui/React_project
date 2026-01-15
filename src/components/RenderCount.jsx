import {useState} from "react";
import { useRef } from "react";

function useWhyDidYouUpdate(props) {
    
}

function useRenderCount() {
    const count = useRef(0);
    count.current = count.current + 1;
    return count.current;

}

export function RenderCount () {
    const renderCount = useRenderCount();
    const [rand,setRand] = useState();

    return(
        <div style={{padding:20}}>
            <p>{`렌더링 횟수: ${renderCount}`}</p>
            <p>{`rand: $ {rand}`}</p>
            <button onClick={() => setRand(Math.random())}>
                re-render
            </button>
        </div>
    );
}