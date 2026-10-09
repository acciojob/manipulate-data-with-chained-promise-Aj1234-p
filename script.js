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
			arr = arr.filter(ele=> ele%2===1);
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
	return filterData(data);
})
.then(data=>{
	output.textContent = `${data}`;
	return multiplyData(data);
})
.then(data=>{
	output.textContent = `${data}`;
})