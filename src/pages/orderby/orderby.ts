import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'orderby' })
export class OrderByPipe implements PipeTransform {
	transform( array: Array<any>, orderField: string, orderType: boolean ): Array<string> {
	    array.sort( ( a: any, b: any ) => {
	        let ae = a[ orderField ];
	        let be = b[ orderField ];
	        if ( ae == undefined && be == undefined ) return 0;
	        if ( ae == undefined && be != undefined ) return orderType ? 1 : -1;
	        if ( ae != undefined && be == undefined ) return orderType ? -1 : 1;
	        if ( ae == be ) return 0;
	        if (orderField == 'distance')
	        	return orderType ? (parseFloat(ae) > parseFloat(be) ? -1 : 1) : (parseFloat(be) > parseFloat(ae) ? -1 : 1);
	        else{
	        	var ael = ae.toString().toLowerCase(), bel = be.toString().toLowerCase();
	        	return orderType ? (ael > bel ? -1 : 1) : (bel > ael ? -1 : 1);
	        }
	        	
	    });
	    return array;
	}
}