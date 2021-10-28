var  eItemList = document.querySelectorAll(".tab-list li");
            var eContentList = document.querySelectorAll(".tab-content li");
            //给元素编号
             for (var i=0;i<eItemList.length;i++) {
                 eItemList[i].index=i;  //index是自定义属性，用来保存编号                 
                 eItemList[i].onmouseover=function() {
                 for (var i=0;i<eContentList.length;i++) {
                 eContentList[i].style.display="none";        //先将内容全部隐藏                  
                 }
                 eContentList[this.index].style.display="block";  //当鼠标触发时再显示对应的内容    
                 for (var i=0;i<eItemList.length;i++) {
                 eItemList[i].style.background="none";        //将背景色设置为无                 
                 }
                 eItemList[this.index].style.background="indianred";
             };    
        }