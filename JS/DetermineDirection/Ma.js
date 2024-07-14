function Ma(id){
	var X = id.charAt(0);
	var Y = id.charAt(1);
	var iX = parseInt(X), iY = parseInt(Y);
	switch(isRed(X, Y))
	{
// Co do
		case true:
			if(!isValue(iX -2, iY -1) && !isRed(iX - 2, iY - 1)){
				Discolouration(iX -2, iY - 1);
			}
			
			if(!isValue(iX - 1, iY - 2) && !isRed(iX - 1, iY - 2)){
				Discolouration(iX - 1, iY - 2);
			}
			
			if(!isValue(iX + 1, iY - 2) && !isRed(iX + 1, iY - 2)){
				Discolouration(iX + 1, iY - 2);
			}
			
			if(!isValue(iX - 1, iY - 2) && !isRed(iX - 1, iY - 2)){
				Discolouration(iX - 1, iY - 2);
			}
			
			if(!isValue(iX + 2, iY - 1) && !isRed(iX + 2, iY - 1)){
				Discolouration(iX + 2, iY - 1);
			}
			
			if(!isValue(iX + 2, iY + 1) && !isRed(iX + 2, iY + 1)){
				Discolouration(iX + 2, iY + 1);
			}
			
			if(!isValue(iX + 1, iY + 2) && !isRed(iX + 1, iY + 2)){
				Discolouration(iX + 1, iY + 2);
			}
			
			if(!isValue(iX - 1, iY + 2) && !isRed(iX - 1, iY + 2)){
				Discolouration(iX - 1, iY + 2);
			}
			
			if(!isValue(iX - 2, iY + 1) && !isRed(iX - 2, iY + 1)){
				Discolouration(iX - 2, iY + 1);
			}
			
		break;
		
		case false:
			if(!isValue(iX -2, iY -1) && !isBlack(iX - 2, iY - 1)){
				Discolouration(iX -2, iY - 1);
			}
			
			if(!isValue(iX - 1, iY - 2) && !isBlack(iX - 1, iY - 2)){
				Discolouration(iX - 1, iY - 2);
			}
			
			if(!isValue(iX + 1, iY - 2) && !isBlack(iX + 1, iY - 2)){
				Discolouration(iX + 1, iY - 2);
			}
			
			if(!isValue(iX - 1, iY - 2) && !isBlack(iX - 1, iY - 2)){
				Discolouration(iX - 1, iY - 2);
			}
			
			if(!isValue(iX + 2, iY - 1) && !isBlack(iX + 2, iY - 1)){
				Discolouration(iX + 2, iY - 1);
			}
			
			if(!isValue(iX + 2, iY + 1) && !isBlack(iX + 2, iY + 1)){
				Discolouration(iX + 2, iY + 1);
			}
			
			if(!isValue(iX + 1, iY + 2) && !isBlack(iX + 1, iY + 2)){
				Discolouration(iX + 1, iY + 2);
			}
			
			if(!isValue(iX - 1, iY + 2) && !isBlack(iX - 1, iY + 2)){
				Discolouration(iX - 1, iY + 2);
			}
			
			if(!isValue(iX - 2, iY + 1) && !isBlack(iX - 2, iY + 1)){
				Discolouration(iX - 2, iY + 1);
			}
		break;
		
		default:
		
	}
}