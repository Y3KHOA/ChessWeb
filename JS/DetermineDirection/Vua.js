function Vua(id){
    var X = id.toString().charAt(0);
    var Y = id.toString().charAt(1);
    
    var X_ = parseInt(X);
    var Y_ = parseInt(Y);

    switch(isRed(X, Y))
    {
//Cờ đỏ
        case true:
            //Đi xuống
            if( !isValue(X_ - 1, Y_) && !isRed(X_ - 1, Y_)) {
                Discolouration(X_ - 1, Y);
            }
            
            //Đi xuống phải 
            if( !isValue(X_ - 1, Y_ + 1) && !isRed(X_ - 1,Y_ + 1)) {
                Discolouration(X_ - 1, Y_ + 1);
            }
            
            // Đi xuống trái			
            if( !isValue(X_ - 1, Y_ - 1) && !isRed(X_ - 1,Y_ - 1)) {
                Discolouration(X_ - 1, Y_ - 1);
            }

            
            //Đi lên	
            if( !isValue(X_ + 1, Y_) && !isRed(X_ + 1, Y_)) {
                Discolouration(X_ + 1, Y_);
            }
            
            // Đi lên phải
            if( !isValue(X_ + 1, Y_ + 1) && !isRed(X_ + 1, Y_ + 1)) {
                Discolouration(X_ + 1, Y_ + 1);
            }

            // Đi lên trái
            if( !isValue(X_ + 1, Y_ - 1) && !isRed(X_ + 1, Y_ - 1)) {
                Discolouration(X_ + 1, Y_ - 1);
            }
            
            //qua trái
            if(!isValue(X_, Y_ - 1) && !isRed(X_, Y_ - 1)){
            Discolouration(X_, Y_- 1); 
            }
            
            // qua phai 
            if(!isValue(X_, Y_ + 1) && !isRed(X_, Y_ + 1)){
            Discolouration(X_, Y_ + 1);
        }
        break;
//Cờ Đen
        case false:

            // Đi xuống
            if( !isValue(X_ - 1, Y_) && !isBlack(X_ - 1, Y_)) {
                Discolouration(X_ - 1, Y);
            }
            
            //Đi xuống phải 
            if( !isValue(X_ - 1, Y_ + 1) && !isBlack(X_ - 1,Y_ + 1)) {
                Discolouration(X_ - 1, Y_ + 1);
            }
            
            // Đi xuống trái			
            if( !isValue(X_ - 1, Y_ - 1) && !isBlack(X_ - 1,Y_ - 1)) {
                Discolouration(X_ - 1, Y_ - 1);
            }

            
            //Đi lên	
            if( !isValue(X_ + 1, Y_) && !isBlack(X_ + 1, Y_)) {
                Discolouration(X_ + 1, Y_);
            }
            
            // Đi lên phải
            if( !isValue(X_ + 1, Y_ + 1) && !isBlack(X_ + 1, Y_ + 1)) {
                Discolouration(X_ + 1, Y_ + 1);
            }

            // Đi lên trái
            if( !isValue(X_ + 1, Y_ - 1) && !isBlack(X_ + 1, Y_ - 1)) {
                Discolouration(X_ + 1, Y_ - 1);
            }
            
            //qua trái
            if(!isValue(X_, Y_ - 1) && !isBlack(X_, Y_ - 1)){
                Discolouration(X_, Y_- 1); 
            }
            
            // qua phai 
            if(!isValue(X_, Y_ + 1) && !isBlack(X_, Y_ + 1)){
                Discolouration(X_, Y_ + 1);
            }
            break;
}
}
    
    
    
