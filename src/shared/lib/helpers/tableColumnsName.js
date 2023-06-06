// --React Table library Realization ------------------------------------------
// const columns = [
//     { dataIndex: 'id', title: 'Id', width: 50, key: 'id', ...getColumnSearchProps('id'),sorter: (a, b) => a.address.length - b.address.length, sortDirections: ['descend', 'ascend']},
//     { dataIndex: 'iata_code', title: 'Код IATA', key: 'iata_code',  ...getColumnSearchProps('iata_code'),sorter: (a, b) => a.address.length - b.address.length, sortDirections: ['descend', 'ascend']},
//     { dataIndex: 'icao_code', title: 'Код ICAO', key: 'icao_code',  ...getColumnSearchProps('icao_code'),sorter: (a, b) => a.address.length - b.address.length, sortDirections: ['descend', 'ascend']},
//     { dataIndex: 'rus_code', title: 'Код компании(RU)', key: 'rus_code', ...getColumnSearchProps('rus_code'),sorter: (a, b) => a.address.length - b.address.length, sortDirections: ['descend', 'ascend']},
//     { dataIndex: 'name_en', title: 'Имя компании(EN)', key: 'name_en',  ...getColumnSearchProps('name_en'),sorter: (a, b) => a.address.length - b.address.length, sortDirections: ['descend', 'ascend']},
//     { dataIndex: 'name_ru', title: 'Имя компании(RU)', key: 'name_ru', ...getColumnSearchProps('name_ru'),sorter: (a, b) => a.address.length - b.address.length, sortDirections: ['descend', 'ascend']},
//     { dataIndex: 'active', title: 'Активность', key: 'active',  ...getColumnSearchProps('active'),sorter: (a, b) => a.address.length - b.address.length, sortDirections: ['descend', 'ascend']},
//     { dataIndex: 'based', title: 'Признак базирования', key: 'based', ...getColumnSearchProps('based'),sorter: (a, b) => a.address.length - b.address.length, sortDirections: ['descend', 'ascend']},
//     { dataIndex: 'phone', title: 'Контактные данные', key: 'phone',  ...getColumnSearchProps('phone'),sorter: (a, b) => a.address.length - b.address.length, sortDirections: ['descend', 'ascend']},
//     { dataIndex: 'country', title: 'Страна', key: 'country',  ...getColumnSearchProps('country'),sorter: (a, b) => a.address.length - b.address.length, sortDirections: ['descend', 'ascend']},
//     { dataIndex: 'alliance', title: 'Альянс', key: 'alliance',  ...getColumnSearchProps('alliance'),sorter: (a, b) => a.address.length - b.address.length, sortDirections: ['descend', 'ascend']},
//     { dataIndex: 'low_cost', title: 'Лоукостер', key: 'low_cost',  ...getColumnSearchProps('low_cost'),sorter: (a, b) => a.address.length - b.address.length, sortDirections: ['descend', 'ascend']},
//     { dataIndex: 'email', title: 'Почтовый адрес', key: 'email',  ...getColumnSearchProps('email'),sorter: (a, b) => a.address.length - b.address.length, sortDirections: ['descend', 'ascend']},
//     { dataIndex: 'representative', title: 'Бренд', key: 'representative',  ...getColumnSearchProps('representative'),sorter: (a, b) => a.address.length - b.address.length, sortDirections: ['descend', 'ascend']},
//     { dataIndex: 'description', title: 'Комментарий', key: 'description',  ...getColumnSearchProps('description'),sorter: (a, b) => a.address.length - b.address.length, sortDirections: ['descend', 'ascend']}
//   ]

// --DevExtreme -----------------------------

const columns = [
    { dataField: 'id', caption: 'Id', visible:true, fixed:true},
    { dataField: 'iata_code', caption: 'Код IATA', visible:true, fixed:true},
    { dataField: 'icao_code', caption: 'Код ICAO', visible:true, fixed:true},
    { dataField: 'rus_code', caption: 'Код компании(RU)', visible:true, fixed:true},
    { dataField: 'name_en', caption: 'Имя компании(EN)', visible:true, fixed:true},
    { dataField: 'name_ru', caption: 'Имя компании(RU)', visible:true, fixed:true},
    { dataField: 'active', caption: 'Активность', visible:true, fixed:false},
    { dataField: 'based', caption: 'Признак базирования', visible:true, fixed:false},
    { dataField: 'phone', caption: 'Контактные данные', visible: false, fixed:false},
    { dataField: 'country', caption: 'Страна', visible:true, fixed:false},
    { dataField: 'alliance', caption: 'Альянс', visible:true, fixed:false},
    { dataField: 'low_cost', caption: 'Лоукостер', visible:true, fixed:false},
    { dataField: 'email', caption: 'Почтовый адрес', visible:true, fixed:false},
    { dataField: 'representative', caption: 'Бренд', visible:true, fixed:false},
    { dataField: 'description', caption: 'Комментарий', visible: true, fixed:false}
  ]
export const tableColumnsName = (templateForTable) => { // templateForTable - это объект с полями необходимыми для отрисовки
    
  const columnNames = Object.keys(templateForTable)
  console.log('columnNames', columnNames )
  return columns.filter(col => columnNames.includes(col.dataField))      
}