action = {
  type: 'CREATE_EVENT',
  titile: '2020東京オリンピックのお知らせ',
  body: '2020東京オリンピックを開催します！つきましては、、、、、、'
}

//#before
state = []
//#after

state = [
  {
    id: '1',
    titile: '2020東京オリンピックのお知らせ',
    body: '2020東京オリンピックを開催します！つきましては、、、、、、'
  }
]
//#before
state = [
  { id: 1, titile: 'タイトル1', body: 'ボディ－1' },
  { id: 2, titile: 'タイトル2', body: 'ボディ－2' },
  { id: 3, titile: 'タイトル3', body: 'ボディ－3' },
]
//#after
// state = [
//   { id: 1, titile: 'タイトル1', body: 'ボディ－1' },
//   { id: 2, titile: 'タイトル2', body: 'ボディ－2' },
//   { id: 3, titile: 'タイトル3', body: 'ボディ－3' },
//   {
//     id: 4,  
//     titile: '2020東京オリンピックのお知らせ',
//     body: '2020東京オリンピックを開催します！つきましては、、、、、、'
//   }
// ]
//#after
const events = (state = [], action) => { 
  switch (action.type) { 
    case 'CREATE_EVENT':
      const event = { title: action.title, body: action.body }
      const length = state.length
      let id = length === 0 ? 1 : state[length -1].id + 1 
      return [...state, { id, ...event }]
    case 'DELETE_EVENT':
      return state
    case 'DELETE_ALL_EVENT':
      return []
    default:
      return state
  }
}

export default events
