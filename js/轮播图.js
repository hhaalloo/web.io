//获取元素
		var o=document.querySelector('.cou');
		var as=document.querySelector('.lun').querySelectorAll('a');
		var lis=document.querySelector('.item').querySelectorAll('li');
		var al=document.querySelector('.al');
		var ar=document.querySelector('.ar');

		var index=0;//保存当前展示的轮播图的索引，默认0
		var len=as.length;
		var t;

		//自动轮播
		t=setInterval(moveNext,2000);
		
		//指示器轮播
		for(var i=0;i<lis.length;i++){
			lis[i]._index=i;//新增属性，保存位置
			//为每一个li追加点击事件
			lis[i].onclick=function(){
				//当前显示的li，修改为未选中状态
				lis[index].className='';
				as[index].className='';//当前显示的轮播图改为不显示

				this.className='current';//被点击的li，改为选中状态
				as[this._index].className='on';//轮播显示为对应

				//修改index值
				index=this._index;

			};
		}

		//箭头轮播
			//右箭头
			al.onclick=function(){
				movePre();
			};

			//左箭头
			ar.onclick=function(){
				moveNext();
			};

		//切换下一张
		function moveNext(){
			as[index].className='';//当前显示的轮播图改为不显示
			lis[index].className='';//当前指示器不显示
			index++;//索引递增
			if (index==len) {
				index=0;//最后一张切换为第一张
			}
			as[index].className='on';//下一张显示
			lis[index].className='current';
		}

		//切换上一张
		function movePre(){
			as[index].className='';
			lis[index].className='';
			index--;
			if (index==-1) {
				index=len-1;//第一张时，修改为最后一张
			}
			//上一张展示
			as[index].className='on';
			lis[index].className='current';
		}