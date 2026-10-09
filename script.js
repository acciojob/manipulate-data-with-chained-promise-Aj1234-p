let output = document.querySelector('#output');
let arr = [1,2,3,4];

function getResolveArray(arr){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			  resolve(arr);
		},3000);
	})
}

function filterData(arr) {
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			arr = arr.filter(ele=> ele%2===0);
			resolve(arr);
		},1000);
	})
}

function multiplyData(arr) {
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			arr = arr.map(ele => ele*2);
			resolve(arr);
		},2000);
	})
}

getResolveArray(arr)
.then(data=>{
	let temp = data;
	output.textContent = `${temp.join(" ")}`;
	return filterData(data);
})
.then(data=>{
	let temp = data;
	output.textContent = `${temp.join(" ")}`;
	return multiplyData(data);
})
.then(data=>{
	let temp = data;
	output.textContent = `${temp.join(" ")}`;
})