import { useEffect, useRef, useState } from "react";


const RenderApp = () => {
    const [text, setText] = useState("");

    const rendersRef = useRef(1);

    useEffect(() => {
        rendersRef.current++;
    })

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <h1>Rendered: {rendersRef.current}</h1>
        </div>
    )
}

export default RenderApp;