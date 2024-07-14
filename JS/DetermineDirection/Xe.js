function Xe(id){
	var X = id.charAt(0);
	var Y = id.charAt(1);
	switch(isRed(X, Y))
	{
// Cờ đỏ
		case true:
		
			// Đi lên trên
			var X_Top = parseInt(X);
			while(!isValue(X_Top - 1, Y) && !isRed(X_Top - 1, Y)){
				Discolouration(X_Top - 1, Y);
				if(isBlack(X_Top - 1, Y))
						break;
				X_Top -= 1; 
			}
			
			// Đi xuống dưới
			var X_Bottom = parseInt(X);
			while(!isValue(X_Bottom +1, Y) && !isRed(X_Bottom + 1, Y)){
				Discolouration(X_Bottom + 1, Y);
				if(isBlack(X_Bottom + 1, Y))
						break;
				X_Bottom += 1; 
			}
			
			// Đi qua trái
			var Y_Left = parseInt(Y);
			while(!isValue(X, Y_Left - 1) && !isRed(X, Y_Left - 1)){
				Discolouration(X, Y_Left - 1);
				if(isBlack(X, Y_Left - 1))
						break;
				Y_Left -= 1; 
			}
			
			// Sang phải
			var Y_Right = parseInt(Y);
			while(!isValue(X, Y_Right + 1) &&!isRed(X, Y_Right + 1)){
				Discolouration(X, Y_Right + 1);
				if(isBlack(X, Y_Right + 1))
						break;
				Y_Right += 1; 
			}
		break;
		
		
// Cờ Den	
		case false:
			// Đi lên trên
			var X_Top = parseInt(X);
			while(!isValue(X_Top - 1, Y) && !isBlack(X_Top - 1, Y)){
				Discolouration(X_Top - 1, Y);
				if(isRed(X_Top - 1, Y))
						break;
				X_Top -= 1; 
			}
			
			// Đi xuống dưới
			var X_Bottom = parseInt(X);
			while(!isValue(X_Bottom + 1, Y) && !isBlack(X_Bottom + 1, Y)){
				Discolouration(X_Bottom + 1, Y);
				if(isRed(X_Bottom + 1, Y))
						break;
				X_Bottom += 1; 
			}
			
			// Đi qua trái
			var Y_Left = parseInt(Y);
			while(!isValue(X, Y_Left - 1) && !isBlack(X, Y_Left - 1)){
				Discolouration(X, Y_Left - 1);
				if(isRed(X, Y_Left - 1))
						break;
				Y_Left -= 1; 
			}
			
			// Sang phải
			var Y_Right = parseInt(Y);
			while(!isValue(X, Y_Right + 1) && !isBlack(X, Y_Right + 1)){
				Discolouration(X, Y_Right + 1);
				if(isRed(X, Y_Right + 1))
						break;
				Y_Right += 1; 
			}
		break;
		default:
	}
	
}