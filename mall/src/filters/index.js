//价格数字格式过滤器
export function priceFormat(price){
	//1234,1234.56,1234.5678,1234.5
	if(isNaN(price)){
		return null;
	}
	let f = parseFloat(price)
	f = Math.round(price*100)/100  //达到小数点后两位目的
	let s = f.toString()
	let rs = s.indexOf('.')
	if(rs < 0){
		rs = s.length
		s += '.'
	}
	while(s.length <= rs+2){//用while不用for循环是因为while循环次数不固定
		  s += '0'
	}    
       return s;
}

//过滤方法2
export function filter01(){
	return 0
}

//过滤方法3
export function filter02(){
	return 0
}