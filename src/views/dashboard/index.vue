<template>


  <div class="dashboard-container">
    <div id="topic">
	  <div class="left">
	    <p><strong>Introduction</strong></p>
	  </div>
	  <div class="right">
	  </div>
	</div>
	
	<!--topic-->
	
	<div id="picb">
    <div class="picMain"><img style="height:500px; width:1000px" src="./images/4.png" /></div>
    
	  
    <div id="intro">
      <p>A system which based algorithm education</p>
      
  </div>
    
	</div>

  
	
	<!--插的大图-->
	
	<div id="picm">
	  <div class="a">
	    <img src="./images/5.png" />
	  </div>
	   <div id="wenzi">
	    <div class="b">
	     <p><strong>Visualization Of Algorithm</strong></p>
	    </div>
      
	    <div class="c">
        <p style="margin-bottom:20px">This project inclusion three part: </p>
        
        <p>Sort Algorithm animation</p>
        <p> Algorithm display</p>
        <p> Java evaluation </p>
	     
	    </div>
	   </div>
	</div>
	
	<!--中间字最多的地方-->
	<div id="tit">
	   <div class="one">
	     <p><strong>Function</strong></p>
	   </div>
	   <div class="two">
      <p>Algorithm demonstration:    Showing algorithm knowledge and sample code</p>
      <p>Algorithm animation:         Visualization of the algorithm process</p>
	    <p>Algorithm implementation:    Running Java code</p>
	   </div>
	</div>
	
	<!--下面四个图-->
     <div id="low">
	  <div class="a"><img style="height:200px; width:320px" src="./images/A.png" />
    <div class="cl" style="text-align:center; margin-top:20px;">Algorithm display</div></div>
	  
    <div class="b"><img style="height:200px; width:320px" src="./images/B.png" />
    <div class="cl" style="text-align:center; margin-top:20px;">Algorithm animation</div></div>
	  
    <div class="c"><img style="height:200px; width:320px" src="./images/C.png" />
    <div class="cl" style="text-align:center; margin-top:20px;">Algorithm implementation</div></div>
	  <!-- <div class="d"><img src="./images/fp4.jpg" /><div class="cl"></div></div> -->
	 </div>
	 
	 <div id="fin">
	   <p style="margin-top:0px">Newcastle University @ Ruipeng Jiao</p>
	</div>
    <!-- <div class="dashboard-text">name:{{ name }}</div>
    <div class="dashboard-text">roles:<span v-for="role in roles" :key="role">{{ role }}</span></div> -->
  </div>


</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
// .dashboard {
  

  
//   // &-container {
//   //   margin: 30px;
//   // }
//   // &-text {
//   //   font-size: 30px;
//   //   line-height: 46px;
//   // }
// }


/* CSS Document */

body{
  margin-left: 20%;
    width:1000px;
	font:14px "microsoft yahei",Arial,Helvetica,sans-serif;
	color:#666;
	margin:0 auto;
	padding:0px;
}
.cl{clear:both}
ul,ol,li,p,h1,h2,h3,h4,h5,h6,dl,dt,dd{
	margin:0px;
	padding:0px;
	list-style:none;
}

/*介绍的标题*/

#intro{
  
  width: 350px;
  margin-top: -320px;
  margin-left: 600px;
  margin-bottom: 300px;
}


#intro>p{
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: aqua;
  margin-left: 50px;
  font-size: 20px;
}

.picMain{
  margin-bottom: 50px;
}




/*以下为正文*/

#topic>.left{width:170px;
           height:60px;
           margin-left:50px;
		   background-color:#000000;
		   line-height:60px;}
#topic>.left{font-size:24px;
             text-align:center;
			 color:#FFFFFF;
			 }
#topic>.right{float:right;
              margin-top:-20px;
			  margin-right:60px;
			  }
#topic>.right>p{font-size:16px;
                }
#topic>.right>p a{text-decoration:none;
                  color:#999999;}

/*这里是将内容全部页面居中*/
#picm{
  margin-left: 10%;
}
#topic{
  margin-left: 6.5%;
}
#picb{
  margin-left: 10%;
}
#tit{
  margin-left: 10%;
}
#low{
  margin-left: 10%;
}
#fin{
  margin-left: 10%;
}


				  
/*下面是图字div	*/		
#picm{width:1000px;
      height:470px;}
#picm>.a{width:300px;
         margin-left:100px;
		 margin-top:20px;}
#wenzi>.b{
  margin-bottom: 30px;
          width:150px;
		  margin-top:-300px;
		  margin-left:600px;}
#wenzi>.b>p{font-size:24px;
            width:200px;}

#wenzi>.c{margin-left:600px;
          width:200px;}	  
		  
/*下面是字最多的地方*/
#tit{width:1000px;
     height:100px;
	 }
#tit>.one{text-align:center;
          margin-left:420px;
		  margin-top:10px;
		  height:30px;
          }
          
#tit>.one>p{font-size:18px;
            background:#000000;
			width:150px;
			color:#FFFFFF;
			text-align:center;
			height:30px;
			line-height:30px;}
#tit>.two{width:600px;
          margin-left:220px;
		  margin-top:5px;}
		  
/*四个图*/
#low{width:1300px;
margin-left: 120px;
   height:320px;}

#low>.a{width:350px;
height: 200px;

      float:left;}
#low>.b{width:350px;
      float:left;}
#low>.c{width:350px;
      float:left;}
// #low>.d{width:280px;
//       float:left;}
				  
#fin{width:1000px;
     height:60px;}
#fin>p{text-align:center;
       margin-top:10px;}				  
</style>
