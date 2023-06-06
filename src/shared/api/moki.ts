import { MockDataI } from "app/App";

interface MockDataVariantsI {
    interseckDate: MockDataI,
    noInterseckDate: MockDataI,
}


export const mockData: MockDataVariantsI =  {
  interseckDate: {  // пересекаться
    scenarios: [
   
      
      {
        scenario: "Main",
        version: "Main10",
        isDefault: true,
        type: "link"
      },
      {
        scenario: "A",
        version: "A7",
        isDefault: false,
        type: "link"
      },
      {
        scenario: "B",
        version: "B5",
        isDefault: false,
        type: "link"
      },
      {
        scenario: "C",
        version: "C5",
        isDefault: false,
        type: "link"
      },
      {
        scenario: "D",
        version: "D2",
        isDefault: false,
        type: "link"
      },
     
    ],
    versions: [
      {
        version: "Main10",
        prevVersion: "Main9",
        createdAt: "2023-05-31T10:18:48.178Z",
        diffVariations: ["Var1","Var2","Var3"]
      },
      {
        version: "Main9",
        prevVersion: "Main8",
        createdAt: "2023-05-29T10:18:48.178Z",
        diffVariations: ["Var1","Var2","Var3"]
      },
      {
        version: "Main8",
        prevVersion: "Main7",
        createdAt: "2023-05-27T10:18:48.178Z",
        diffVariations: ["Var1","Var2","Var3"]
      },
      {
        version: "Main7",
        prevVersion: "Main6",
        createdAt: "2023-05-24T10:18:48.178Z",
        diffVariations: ["Var1","Var2","Var3"]
      },
      {
        version: "Main6",
        prevVersion: "Main5",
        createdAt: "2023-05-21T10:18:48.178Z",
        diffVariations: ["Var1","Var2","Var3"]
      },
      {
        version: "Main5",
        prevVersion: "Main4",
        createdAt: "2023-05-09T10:18:48.178Z",
        diffVariations: ["Var1","Var2","Var3"]
      },
      {
        version: "Main4",
        prevVersion: "Main3",
        createdAt: "2023-05-05T10:18:48.178Z",
        diffVariations: ["Var1","Var2","Var3"]
      },
      {
        version: "Main3",
        prevVersion: "Main2",
        createdAt: "2023-05-04T10:18:48.178Z",
        diffVariations: ["Var1","Var2","Var3"]
      },
      {
        version: "Main2",
        prevVersion: "Main1",
        createdAt: "2023-05-03T10:18:48.178Z",
        diffVariations: ["Var1","Var2","Var3"]
      },
      {
        version: "Main1",
        prevVersion: null,
        createdAt: "2023-05-01T10:18:48.178Z",
        diffVariations: ["Var1","Var2","Var3"]
      },
      {
        version: "D2",
        prevVersion: "D1",
        createdAt: "2023-05-30T10:18:48.178Z",
        diffVariations: ["Var1","Var2","Var3"]
      },
      {
        version: "D1",
        prevVersion: 'Main6',
        createdAt: "2023-05-25T10:18:48.178Z",
        diffVariations: ["Var1","Var2","Var3"]
      },
      {
        version: "A7",
        prevVersion: "A6",
        createdAt: "2023-05-17T10:18:48.178Z",
        diffVariations: ["Var1","Var2","Var3"]
      },
      {
        version: "A6",
        prevVersion: "A5",
        createdAt: "2023-05-16T10:18:48.178Z",
        diffVariations: ["Var1","Var2","Var3"]
      },
      {
        version: "A5",
        prevVersion: "A4",
        createdAt: "2023-05-13T10:18:48.178Z",
        diffVariations: ["Var1","Var2","Var3"]
      },
      {
        version: "A4",
        prevVersion: "A3",
        createdAt: "2023-05-11T10:18:48.178Z",
        diffVariations: ["Var1","Var2","Var3"]
      },
      {
        version: "A3",
        prevVersion: "A2",
        createdAt: "2023-05-08T10:18:48.178Z",
        diffVariations: ["Var1","Var2","Var3"]
      },
      {
        version: "A2",
        prevVersion: "A1",
        createdAt: "2023-05-07T10:18:48.178Z",
        diffVariations: ["Var1","Var2","Var3"]
      },
      {
        version: "A1",
        prevVersion: 'Main4',
        createdAt: "2023-05-07T10:18:48.178Z",
        diffVariations: ["Var1","Var2","Var3"]
      },
      {
        version: "B5",
        prevVersion: "B4",
        createdAt: "2023-05-27T10:18:48.178Z",
        diffVariations: ["Var1","Var2","Var3"]
      },
      {
        version: "B4",
        prevVersion: "B3",
        createdAt: "2023-05-14T10:18:48.178Z",
        diffVariations: ["Var1","Var2","Var3"]
      },
      {
        version: "B3",
        prevVersion: "B2",
        createdAt: "2023-05-12T10:18:48.178Z",
        diffVariations: ["Var1","Var2","Var3"]
      },
      {
        version: "B2",
        prevVersion: "B1",
        createdAt: "2023-05-11T10:18:48.178Z",
        diffVariations: ["Var1","Var2","Var3"]
      },
      {
        version: "B1",
        prevVersion: 'Main5',
        createdAt: "2023-05-10T10:18:48.178Z",
        diffVariations: ["Var1","Var2","Var3"]
      },
      {
        version: "C5",
        prevVersion: "C4",
        createdAt: "2023-05-24T10:18:48.178Z",
        diffVariations: ["Var1","Var2","Var3"]
      },
      {
        version: "C4",
        prevVersion: "C3",
        createdAt: "2023-05-19T10:18:48.178Z",
        diffVariations: ["Var1","Var2","Var3"]
      },
      {
        version: "C3",
        prevVersion: "C2",
        createdAt: "2023-05-17T10:18:48.178Z",
        diffVariations: ["Var1","Var2","Var3"]
      },
      {
        version: "C2",
        prevVersion: "C1",
        createdAt: "2023-05-14T10:18:48.178Z",
        diffVariations: ["Var1","Var2","Var3"]
      },
      {
        version: "C1",
        prevVersion: 'A4',
        createdAt: "2023-05-12T10:18:48.178Z",
        diffVariations: ["Var1","Var2","Var3"]
      },
       
      
    ],
    merges: [
      {
        versionFrom: "A7",
        versionTo: "Main6"
      },
      {
        versionFrom: "B4",
        versionTo: "Main8"
      },
    ]
  },
  noInterseckDate: {  // пересекаться
    scenarios: [
      {
        scenario: "Main",
        version: "Main10",
        isDefault: true,
        type: "link"
      },
      {
        scenario: "A",
        version: "A7",
        isDefault: false,
        type: "link"
      },
      {
        scenario: "B",
        version: "B5",
        isDefault: false,
        type: "link"
      },
    ],
    versions: [
      {
        version: "Main10",
        prevVersion: "Main9",
        createdAt: "2023-05-31T10:18:48.178Z",
        diffVariations: ["Var1","Var2","Var3"]
      },
      {
        version: "Main9",
        prevVersion: "Main8",
        createdAt: "2023-05-30T10:18:48.178Z",
        diffVariations: ["Var1","Var2","Var3"]
      },
      {
        version: "Main8",
        prevVersion: "Main7",
        createdAt: "2023-05-27T10:18:48.178Z",
        diffVariations: ["Var1","Var2","Var3"]
      },
      {
        version: "Main7",
        prevVersion: "Main6",
        createdAt: "2023-05-24T10:18:48.178Z",
        diffVariations: ["Var1","Var2","Var3"]
      },
      {
        version: "Main6",
        prevVersion: "Main5",
        createdAt: "2023-05-21T10:18:48.178Z",
        diffVariations: ["Var1","Var2","Var3"]
      },
      {
        version: "Main5",
        prevVersion: "Main4",
        createdAt: "2023-05-09T10:18:48.178Z",
        diffVariations: ["Var1","Var2","Var3"]
      },
      {
        version: "Main4",
        prevVersion: "Main3",
        createdAt: "2023-05-05T10:18:48.178Z",
        diffVariations: ["Var1","Var2","Var3"]
      },
      {
        version: "Main3",
        prevVersion: "Main2",
        createdAt: "2023-05-04T10:18:48.178Z",
        diffVariations: ["Var1","Var2","Var3"]
      },
      {
        version: "Main2",
        prevVersion: "Main1",
        createdAt: "2023-05-03T10:18:48.178Z",
        diffVariations: ["Var1","Var2","Var3"]
      },
      {
        version: "Main1",
        prevVersion: null,
        createdAt: "2023-05-01T10:18:48.178Z",
        diffVariations: ["Var1","Var2","Var3"]
      },
      {
        version: "A7",
        prevVersion: "A6",
        createdAt: "2023-05-09T10:18:48.178Z",
        diffVariations: ["Var1","Var2","Var3"]
      },
      {
        version: "A6",
        prevVersion: "A5",
        createdAt: "2023-05-08T10:18:48.178Z",
        diffVariations: ["Var1","Var2","Var3"]
      },
      {
        version: "A5",
        prevVersion: "A4",
        createdAt: "2023-05-07T10:18:48.178Z",
        diffVariations: ["Var1","Var2","Var3"]
      },
      {
        version: "A4",
        prevVersion: "A3",
        createdAt: "2023-05-06T10:18:48.178Z",
        diffVariations: ["Var1","Var2","Var3"]
      },
      {
        version: "A3",
        prevVersion: "A2",
        createdAt: "2023-05-05T10:18:48.178Z",
        diffVariations: ["Var1","Var2","Var3"]
      },
      {
        version: "A2",
        prevVersion: "A1",
        createdAt: "2023-05-04T10:18:48.178Z",
        diffVariations: ["Var1","Var2","Var3"]
      },
      {
        version: "A1",
        prevVersion: 'Main2',
        createdAt: "2023-05-03T10:18:48.178Z",
        diffVariations: ["Var1","Var2","Var3"]
      },
      {
        version: "B5",
        prevVersion: "B4",
        createdAt: "2023-05-29T10:18:48.178Z",
        diffVariations: ["Var1","Var2","Var3"]
      },
      {
        version: "B4",
        prevVersion: "B3",
        createdAt: "2023-05-24T10:18:48.178Z",
        diffVariations: ["Var1","Var2","Var3"]
      },
      {
        version: "B3",
        prevVersion: "B2",
        createdAt: "2023-05-23T10:18:48.178Z",
        diffVariations: ["Var1","Var2","Var3"]
      },
      {
        version: "B2",
        prevVersion: "B1",
        createdAt: "2023-05-22T10:18:48.178Z",
        diffVariations: ["Var1","Var2","Var3"]
      },
      {
        version: "B1",
        prevVersion: 'Main6',
        createdAt: "2023-05-21T10:18:48.178Z",
        diffVariations: ["Var1","Var2","Var3"]
      },

    ],
    merges: [
      {
        versionFrom: "A7",
        versionTo: "Main5"
      },
      {
        versionFrom: "B4",
        versionTo: "Main9"
      }
    ]
  },  
}