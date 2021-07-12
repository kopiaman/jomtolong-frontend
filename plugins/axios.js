export default function ({ $axios }) {

	const validation = (error) =>{
  
		let combineErrors = [];
	
	
		//if errors is object
		if( typeof error === 'object'){
			 //iterate the errors and...
			for( let key in error){
	
			  //push error message to combineErrors array
			  combineErrors.push(error[key][0])
			}
			return combineErrors.join(`\r\n\<br/>`)
	
		}else{
		  //return string error
		  return error
		}
	   
	
	}

	$axios.onError(error => {
	  
		const handleError = validation(error.response.data.error)
		return Promise.reject(handleError)

	})
  }



  