interface CircleI {
    cx: number,
    cy: number,
    r:  number,
    color?: string
}

interface TextI {
    x: number,
    y: number,
    text: string,
    color?: string  
}

interface LineI {
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    color: string,
    dash?: string  
}

export {
    CircleI, 
    TextI,
    LineI
}
