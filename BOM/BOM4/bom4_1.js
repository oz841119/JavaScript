       
       // 接續BOM4 並將通用函式getStyle封裝成一個函數

       window.onload = function(){
            
            
        let box1 = document.getElementById("box1");
        let box2 = document.getElementById("box2")
        let btn = document.getElementById("btn");
        let btn2 = document.getElementById("btn2");
        let btn3 = document.getElementById("btn3");
        let btn4 = document.getElementById("btn4");

        // 先宣告定時器的全局變量 才能讓定時器開啟時先關閉定時器
        //let timer;


        /*
         *  一個通用函式 獲取指定元素當前的樣式
         *    參數:
         *          obj 要獲取樣式的元素
         *          name 要獲取的樣式名
         */  
         function getStyle(obj , name){
            if(window.getComputedStyle){
                //正常瀏覽器的方式 具有getComputedStyle()方法
                return getComputedStyle(obj , null)[name];
            }else{
                // IE8的方式 沒有getComputedStyle()方法
                return obj.getComputedStyle[name];
            }
        }

        /*
         * 創建另一個可以執行簡單動畫的通用函數
         *   參數：
         *       1.obj - 要執行的物件
         *       2.target - 執行動畫的目標位置
         *       3.speed - 速度,有正負值
         *       4.attr - 要修改的樣式 例如top left width...
         *       5.callback - 回調函數，將會在動畫執行完畢後執行
         */
         function move(obj , target , speed , attr , callback){
            clearInterval(obj.timer);

            //創建一個變量獲取元素當前位置
            let current = parseInt(getStyle(obj , attr));

            //判斷速度的正負值
            //若是0向800移動 則speed為正
            //反之則為負
            if(current > target){
                speed = -speed
            }

            obj.timer = setInterval(function(){

                let oldValue = parseInt(getStyle(obj , attr));
                let newValue = oldValue + speed;
                
                // 向左移動時 避免超出最左側 需判斷newValue是否小於target
                // 向右移動時 避免超出目標 需判斷newValue是否大於target(目標)
                if((speed < 0 && newValue < target) || (speed > 0 && newValue > target)){
                    newValue = target;
                }
                // 將新值設置給box1
                obj.style[attr] = newValue + "px";
                
                // 當動畫執行完畢時關閉定時器
                if(newValue == target){
                    clearInterval(obj.timer);
                    
                    //調用回調函數 有實參傳遞callback才調用 否則會報錯
                    callback && callback(); 
                }

            } , 20);
        }


        //點擊按鈕後 box向右移動(left值增大)
        btn.onclick = function(){
            move(box1 , 800 , 19 , "left");
        }


        //點擊按鈕後 box向左移動(left值減少)
        btn2.onclick = function(){
            move(box1 , 0 , 19 , "left");
        }

        btn3.onclick = function(){
            move(box2 , 800 , 19 , "left");
        }

        // 同事在盯著你
        btn4.onclick = function(){
            move(box2 , 150 , 20 , "width" , function(){
                move(box2 , 150 , 20 , "height" , function(){
                    move(box2 , 200 , 20 , "width" , function(){
                        move(box2 , 200 , 20 , "height" , function(){
                            move(box2 , 100 , 20 , "left" , function(){
                                move(box2 , 300 , 20 , "top" , function(){
                                    move(box2 , 100 , 20 , "height" , function(){
                                        move(box2 , 100 , 20 , "width" , function(){
                                        });
                                    });
                                });
                            });
                        });
                
                    });
                
                });
            });
            
        }

    }
