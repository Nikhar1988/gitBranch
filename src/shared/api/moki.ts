import { MockDataI } from "app/App";

interface MockDataVariantsI {
    interseckDate: MockDataI,
    noInterseckDate: MockDataI,
}


export const mockData: MockDataVariantsI =  {
  interseckDate: {  // пересекаться
    scenarios: [
      {
        scenario: "B",
        version: "B5",
        is_default: false,
        type: "link"
      },
      {
        scenario: "D",
        version: "D2",
        is_default: false,
        type: "link"
      },
      {
        scenario: "C",
        version: "C5",
        is_default: false,
        type: "link"
      },
      {
        scenario: "A",
        version: "A7",
        is_default: false,
        type: "link"
      },
      
      {
        scenario: "Main",
        version: "Main10",
        is_default: true,
        type: "link"
      }, 
      {
        scenario: "E",
        version: "B3",
        is_default: false,
        type: "link"
      },
      {
        scenario: "H",
        version: "B3",
        is_default: false,
        type: "link"
      },
      {
        scenario: "Z",
        version: "C4",
        is_default: false,
        type: "link"
      },
    ],
    versions: [
      {
        version: "Main10",
        prev_version: "Main9",
        created_at: "2023-05-31T10:18:48.178Z",
        diff_variations: ["Var1","Var2","Var3"]
      },
      {
        version: "Main9",
        prev_version: "Main8",
        created_at: "2023-05-29T10:18:48.178Z",
        diff_variations: ["Var1","Var2","Var3"]
      },
      {
        version: "Main8",
        prev_version: "Main7",
        created_at: "2023-05-27T11:18:48.178Z",
        diff_variations: ["Var1","Var2","Var3"]
      },
      {
        version: "Main7",
        prev_version: "Main6",
        created_at: "2023-05-24T10:26:48.178Z",
        diff_variations: ["Var1","Var2","Var3"]
      },
      {
        version: "Main6",
        prev_version: "Main5",
        created_at: "2023-05-21T10:18:48.178Z",
        diff_variations: ["Var1","Var2","Var3"]
      },
      {
        version: "Main5",
        prev_version: "Main4",
        created_at: "2023-05-09T10:18:48.178Z",
        diff_variations: ["Var1","Var2","Var3"]
      },
      {
        version: "Main4",
        prev_version: "Main3",
        created_at: "2023-05-05T10:18:48.178Z",
        diff_variations: ["Var1","Var2","Var3"]
      },
      {
        version: "Main3",
        prev_version: "Main2",
        created_at: "2023-05-04T10:18:48.178Z",
        diff_variations: ["Var1","Var2","Var3"]
      },
      {
        version: "Main2",
        prev_version: "Main1",
        created_at: "2023-05-03T10:18:48.178Z",
        diff_variations: ["Var1","Var2","Var3"]
      },
      {
        version: "Main1",
        prev_version: null,
        created_at: "2023-05-01T10:18:48.178Z",
        diff_variations: ["Var1","Var2","Var3"]
      },
      {
        version: "D2",
        prev_version: "D1",
        created_at: "2023-05-30T10:18:48.178Z",
        diff_variations: ["Var1","Var2","Var3"]
      },
      {
        version: "D1",
        prev_version: 'Main6',
        created_at: "2023-05-25T10:18:48.178Z",
        diff_variations: ["Var1","Var2","Var3"]
      },
      {
        version: "A7",
        prev_version: "A6",
        created_at: "2023-05-17T10:18:48.178Z",
        diff_variations: ["Var1","Var2","Var3"]
      },
      {
        version: "A6",
        prev_version: "A5",
        created_at: "2023-05-16T10:18:48.178Z",
        diff_variations: ["Var1","Var2","Var3"]
      },
      {
        version: "A5",
        prev_version: "A4",
        created_at: "2023-05-13T10:18:48.178Z",
        diff_variations: ["Var1","Var2","Var3"]
      },
      {
        version: "A4",
        prev_version: "A3",
        created_at: "2023-05-11T10:18:48.178Z",
        diff_variations: ["Var1","Var2","Var3"]
      },
      {
        version: "A3",
        prev_version: "A2",
        created_at: "2023-05-08T10:18:48.178Z",
        diff_variations: ["Var1","Var2","Var3"]
      },
      {
        version: "A2",
        prev_version: "A1",
        created_at: "2023-05-07T10:18:55.178Z",
        diff_variations: ["Var1","Var2","Var3"]
      },
      {
        version: "A1",
        prev_version: 'Main4',
        created_at: "2023-05-07T10:18:48.178Z",
        diff_variations: ["Var1","Var2","Var3"]
      },
      {
        version: "B5",
        prev_version: "B4",
        created_at: "2023-05-27T10:18:48.178Z",
        diff_variations: ["Var1","Var2","Var3"]
      },
      {
        version: "B4",
        prev_version: "B3",
        created_at: "2023-05-14T10:18:48.178Z",
        diff_variations: ["Var1","Var2","Var3"]
      },
      {
        version: "B3",
        prev_version: "B2",
        created_at: "2023-05-12T10:18:48.178Z",
        diff_variations: ["Var1","Var2","Var3"]
      },
      {
        version: "B2",
        prev_version: "B1",
        created_at: "2023-05-11T10:18:48.178Z",
        diff_variations: ["Var1","Var2","Var3"]
      },
      {
        version: "B1",
        prev_version: 'Main5',
        created_at: "2023-05-10T10:18:48.178Z",
        diff_variations: ["Var1","Var2","Var3"]
      },
      {
        version: "C5",
        prev_version: "C4",
        created_at: "2023-05-24T10:20:48.178Z",
        diff_variations: ["Var1","Var2","Var3"]
      },
      {
        version: "C4",
        prev_version: "C3",
        created_at: "2023-05-19T10:18:48.178Z",
        diff_variations: ["Var1","Var2","Var3"]
      },
      {
        version: "C3",
        prev_version: "C2",
        created_at: "2023-05-17T10:18:48.178Z",
        diff_variations: ["Var1","Var2","Var3"]
      },
      {
        version: "C2",
        prev_version: "C1",
        created_at: "2023-05-14T10:18:48.178Z",
        diff_variations: ["Var1","Var2","Var3"]
      },
      {
        version: "C1",
        prev_version: 'A4',
        created_at: "2023-05-12T10:18:48.178Z",
        diff_variations: ["Var1","Var2","Var3"]
      },
       
      
    ],
    merges: [
      {
        version_from: "A6",
        version_to: "Main6"
      },
      {
        version_from: "B5",
        version_to: "Main8"
      },
      {
        version_from: "D2",
        version_to: "Main10"
      },
      
    ]
  },
  noInterseckDate: {  // пересекаться
    scenarios: [
      {
        scenario: "Main",
        version: "Main10",
        is_default: true,
        type: "link"
      },
      {
        scenario: "A",
        version: "A7",
        is_default: false,
        type: "link"
      },
      {
        scenario: "B",
        version: "B5",
        is_default: false,
        type: "link"
      },
    ],
    versions: [
      {
        version: "Main10",
        prev_version: "Main9",
        created_at: "2023-05-31T10:18:48.178Z",
        diff_variations: ["Var1","Var2","Var3"]
      },
      {
        version: "Main9",
        prev_version: "Main8",
        created_at: "2023-05-30T10:18:48.178Z",
        diff_variations: ["Var1","Var2","Var3"]
      },
      {
        version: "Main8",
        prev_version: "Main7",
        created_at: "2023-05-27T10:18:48.178Z",
        diff_variations: ["Var1","Var2","Var3"]
      },
      {
        version: "Main7",
        prev_version: "Main6",
        created_at: "2023-05-24T10:18:48.178Z",
        diff_variations: ["Var1","Var2","Var3"]
      },
      {
        version: "Main6",
        prev_version: "Main5",
        created_at: "2023-05-21T10:18:48.178Z",
        diff_variations: ["Var1","Var2","Var3"]
      },
      {
        version: "Main5",
        prev_version: "Main4",
        created_at: "2023-05-09T10:18:48.178Z",
        diff_variations: ["Var1","Var2","Var3"]
      },
      {
        version: "Main4",
        prev_version: "Main3",
        created_at: "2023-05-05T10:18:48.178Z",
        diff_variations: ["Var1","Var2","Var3"]
      },
      {
        version: "Main3",
        prev_version: "Main2",
        created_at: "2023-05-04T10:18:48.178Z",
        diff_variations: ["Var1","Var2","Var3"]
      },
      {
        version: "Main2",
        prev_version: "Main1",
        created_at: "2023-05-03T10:18:48.178Z",
        diff_variations: ["Var1","Var2","Var3"]
      },
      {
        version: "Main1",
        prev_version: null,
        created_at: "2023-05-01T10:18:48.178Z",
        diff_variations: ["Var1","Var2","Var3"]
      },
      {
        version: "A7",
        prev_version: "A6",
        created_at: "2023-05-09T10:18:48.178Z",
        diff_variations: ["Var1","Var2","Var3"]
      },
      {
        version: "A6",
        prev_version: "A5",
        created_at: "2023-05-08T10:18:48.178Z",
        diff_variations: ["Var1","Var2","Var3"]
      },
      {
        version: "A5",
        prev_version: "A4",
        created_at: "2023-05-07T10:18:48.178Z",
        diff_variations: ["Var1","Var2","Var3"]
      },
      {
        version: "A4",
        prev_version: "A3",
        created_at: "2023-05-06T10:18:48.178Z",
        diff_variations: ["Var1","Var2","Var3"]
      },
      {
        version: "A3",
        prev_version: "A2",
        created_at: "2023-05-05T10:18:48.178Z",
        diff_variations: ["Var1","Var2","Var3"]
      },
      {
        version: "A2",
        prev_version: "A1",
        created_at: "2023-05-04T10:18:48.178Z",
        diff_variations: ["Var1","Var2","Var3"]
      },
      {
        version: "A1",
        prev_version: 'Main2',
        created_at: "2023-05-03T10:18:48.178Z",
        diff_variations: ["Var1","Var2","Var3"]
      },
      {
        version: "B5",
        prev_version: "B4",
        created_at: "2023-05-29T10:18:48.178Z",
        diff_variations: ["Var1","Var2","Var3"]
      },
      {
        version: "B4",
        prev_version: "B3",
        created_at: "2023-05-24T10:18:48.178Z",
        diff_variations: ["Var1","Var2","Var3"]
      },
      {
        version: "B3",
        prev_version: "B2",
        created_at: "2023-05-23T10:18:48.178Z",
        diff_variations: ["Var1","Var2","Var3"]
      },
      {
        version: "B2",
        prev_version: "B1",
        created_at: "2023-05-22T10:18:48.178Z",
        diff_variations: ["Var1","Var2","Var3"]
      },
      {
        version: "B1",
        prev_version: 'Main6',
        created_at: "2023-05-21T10:18:48.178Z",
        diff_variations: ["Var1","Var2","Var3"]
      },

    ],
    merges: [
      {
        version_from: "A6",
        version_to: "Main5"
      },
      {
        version_from: "B5",
        version_to: "Main9"
      }
    ]
  },

}