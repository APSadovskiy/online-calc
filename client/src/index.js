import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TabulatorFull as Tabulator } from 'tabulator-tables';
import './index.css';

var tabledata = [
	{ id: 1, name: "Антон Садовский", age: "49", col: "красный", dob: "25.12.1974" },
	{ id: 2, name: "Иванов Иван", age: "1", col: "синий", dob: "14/05/1982" },
	{ id: 3, name: "Олег Любовский", age: "42", col: "зеленый", dob: "22/05/1982" },
	{ id: 4, name: "Петров Петр", age: "125", col: "оранжевый", dob: "01/08/1980" },
	{ id: 5, name: "Сидоров Сергей", age: "16", col: "желтый", dob: "31/01/1999" },
	{ id: 6, name: "Антон Садовский", age: "49", col: "красный", dob: "25.12.1974" },
	{ id: 7, name: "Иванов Иван", age: "1", col: "синий", dob: "14/05/1982" },
	{ id: 8, name: "Олег Любовский", age: "42", col: "зеленый", dob: "22/05/1982" },
	{ id: 9, name: "Петров Петр", age: "125", col: "оранжевый", dob: "01/08/1980" },
	{ id: 10, name: "Сидоров Сергей", age: "16", col: "желтый", dob: "31/01/1999" },
	{ id: 11, name: "Антон Садовский", age: "49", col: "красный", dob: "25.12.1974" },
	{ id: 12, name: "Иванов Иван", age: "1", col: "синий", dob: "14/05/1982" },
	{ id: 13, name: "Олег Любовский", age: "42", col: "зеленый", dob: "22/05/1982" },
	{ id: 14, name: "Петров Петр", age: "125", col: "оранжевый", dob: "01/08/1980" },
	{ id: 15, name: "Сидоров Сергей", age: "16", col: "желтый", dob: "31/01/1999" },
];

//create Tabulator on DOM element with id "example-table"
var table2 = new Tabulator("#example-table2", {
	height: 205, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
	data: tabledata, //assign data to table
	layout: "fitColumns", //fit columns to width of table (optional)
	columns: [ //Define Table Columns
		{ title: "Имя", field: "name", width: 150 },
		{ title: "Возраст", field: "age", hozAlign: "left", formatter: "progress" },
		{ title: "Любимый цвет", field: "col" },
		{ title: "Дата рождения", field: "dob", sorter: "date", hozAlign: "center" },
	],
});

//trigger an alert message when the row is clicked
table2.on("rowClick", function (e, row) {
	alert("Строка " + row.getData().id + " выбрана!!!!");
});


ReactDOM.render(

	<App />,
	document.getElementById('root')


);

