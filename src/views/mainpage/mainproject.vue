<template>
   <div id="teach" style="position:absolute">
        <iframe width="1300px"  height="700px" src="http://localhost:9999"></iframe>
    </div>
				
		<!-- 开发环境版本，包含了有帮助的命令行警告 -->
        
        
        <!-- 生产环境版本，优化了尺寸和速度 -->
        <!--  <script src="https://cdn.jsdelivr.net/npm/vue"></script> -->
</template>


<script>
import api from '@/api/coderun'
export default {
    data(){
    },

    created(){
        
    },

    methods: {
        getHospList(){
            coderun.getHospList()
                .then(response => {
                    //this.fetchData(this.page) 刷新页面
                    this.fetchData(1)
                })
        }
    }
    
}
</script>
