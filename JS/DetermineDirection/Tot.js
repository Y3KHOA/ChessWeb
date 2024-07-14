function Tot(id){
	var X = id.charAt(0);
	var Y = id.charAt(1);
	var iX = parseInt(X);
	var iY = parseInt(Y);
	
	switch(isRed(X, iY)){
		
// Dòng 2 cờ do
		case true:
			if(iX == 2){
				
				for(i = iX + 1; i <= iX + 2; i ++){
					if(isEmpty(i, iY))
						Discolouration(i, iY);
					if(isBlack(i, iY))
						break;
				}
				
				// Ben trai
				if(!isValue(iX + 1, iY -1) && isBlack(iX + 1, iY -1))
					Discolouration(iX + 1, iY -1);
				
				// Ben phải
				if(!isValue(iX + 1, iY + 1) && isBlack(iX + 1, iY + 1))
					Discolouration(iX + 1, iY + 1);
			}else{
				if(!isValue(iX + 1, iY) && isEmpty(iX + 1, iY))
					Discolouration(iX + 1, iY);
						
				// Ben trai
				if(!isValue(iX + 1, iY -1) && isBlack(iX + 1, iY - 1))
					Discolouration(iX + 1, iY -1);
					
				// Ben phai
				if(!isValue(iX + 1, iY + 1) && isBlack(iX + 1, iY + 1))
					Discolouration(iX + 1, iY + 1);
			}
			break;
		
// Dong 2 cờ đen
		case false:
			iX = parseInt(X);
			iY = parseInt(Y);
			
			if(iX == 7){
				for(i = iX - 1; i >= iX - 2; i--){
					if(isEmpty(i, iY))
						Discolouration(i, iY);
					if(isRed(i, iY))
						break;
				}
				// Ben trai
				if(!isValue(iX - 1, iY -1) && isRed(iX - 1, iY -1))
					Discolouration(iX - 1, iY -1);
					
				// Ben trai
				if(!isValue(iX - 1, iY + 1) && isRed(iX - 1, iY + 1))
					Discolouration(iX - 1, iY + 1);
			}else{
				if(!isValue(iX - 1, iY) && isEmpty(iX - 1, iY))
					Discolouration(iX - 1, iY);
						
				// Ben trai
				if(!isValue(iX - 1, iY - 1) && isRed(iX - 1, iY - 1))
					Discolouration(iX - 1, iY - 1);
					
				// Ben phai
				if(!isValue(iX - 1, iY + 1) && isRed(iX - 1, iY + 1))
					Discolouration(iX - 1, iY + 1);
			}
			break;	
	}
}