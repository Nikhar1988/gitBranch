import { FC } from "react"
import { CircleI, LineI, TextI } from "./types"


const Circle:FC<CircleI> =({cx,cy,r, color})=> <circle cx={cx} cy={cy} r={r} fill={color} />


const Text:FC<TextI> =({x,y,text,color="black"})=> <text x={x} y={y} fill={color}>{text}</text>           
    


const Line:FC<LineI> =({x1,x2,y1,y2,color, dash})=> <line 
                                                        x1={x1} 
                                                        y1={y1}
                                                        x2={x2} 
                                                        y2={y2}  
                                                        stroke={color} 
                                                        strokeDasharray={dash}
                                                    />   

export {
    Circle,
    Text,
    Line
}