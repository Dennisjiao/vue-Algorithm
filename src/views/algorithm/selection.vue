<template>

  <div>
    

    <div id="teach" style="position:absolute">
        <iframe width="680px"  height="720px" src="https://www.javatpoint.com/selection-sort"></iframe>
    </div>
    <!-- <el-button type="primary" icon="el-icon-circle-check-outline" @click="handleConfirm" round>
      Save
  </el-button>
  <el-button icon="el-icon-caret-right" type="info" @click="handleRunCode" round>
      Run
  </el-button> -->
  <code-editor
    :cmTheme="cmTheme"
    :cmMode="cmMode"
  >
  </code-editor>


  
    <!-- 下面的:code可以用:value或:content代替 -->
    <codemirror
      ref="cm"
      :code="code"
      :options="cmOptions"
      @input="inputChange"
      
    ></codemirror>
  </div>
</template>

<script>
    // 全局引入vue-codemirror
  import {codemirror} from 'vue-codemirror';
  // 引入css文件
  import 'codemirror/lib/codemirror.css'
  // 引入主题 可以从 codemirror/theme/ 下引入多个
  import 'codemirror/theme/idea.css'
  // 引入语言模式 可以从 codemirror/mode/ 下引入多个
  import 'codemirror/mode/sql/sql.js';

  // 搜索功能
  // find：Ctrl-F (PC), Cmd-F (Mac)
  // findNext：Ctrl-G (PC), Cmd-G (Mac)
  // findPrev：Shift-Ctrl-G (PC), Shift-Cmd-G (Mac)
  // replace：Shift-Ctrl-F (PC), Cmd-Alt-F (Mac)
  // replaceAll：Shift-Ctrl-R (PC), Shift-Cmd-Alt-F (Mac)
  import 'codemirror/addon/dialog/dialog.css'
  import 'codemirror/addon/dialog/dialog'
  import 'codemirror/addon/search/searchcursor'
  import 'codemirror/addon/search/search'
  import 'codemirror/addon/search/jump-to-line'
  import 'codemirror/addon/search/matchesonscrollbar'
  import 'codemirror/addon/search/match-highlighter'


  // 代码提示功能 具体语言可以从 codemirror/addon/hint/ 下引入多个
  import 'codemirror/addon/hint/show-hint.css';
  import 'codemirror/addon/hint/show-hint';
  import 'codemirror/addon/hint/sql-hint';

  // 高亮行功能
  import 'codemirror/addon/selection/active-line'
  import 'codemirror/addon/selection/selection-pointer'

  // 调整scrollbar样式功能
  import 'codemirror/addon/scroll/simplescrollbars.css'
  import 'codemirror/addon/scroll/simplescrollbars'

  // 自动括号匹配功能
  import 'codemirror/addon/edit/matchbrackets'

  // 全屏功能 由于项目复杂，自带的全屏功能一般不好使
  import 'codemirror/addon/display/fullscreen.css'
  import 'codemirror/addon/display/fullscreen'

  // 显示自动刷新
  import 'codemirror/addon/display/autorefresh'

  // 多语言支持？
  import 'codemirror/addon/mode/overlay'
  import 'codemirror/addon/mode/multiplex'


  // 代码段折叠功能
  import 'codemirror/addon/fold/foldcode'
  import 'codemirror/addon/fold/foldgutter'
  import 'codemirror/addon/fold/foldgutter.css'

  import 'codemirror/addon/fold/brace-fold'
  import 'codemirror/addon/fold/comment-fold'
  import 'codemirror/addon/fold/xml-fold.js';
  import 'codemirror/addon/fold/indent-fold.js';
  import 'codemirror/addon/fold/markdown-fold.js';
  import 'codemirror/addon/fold/comment-fold.js';

  //在codemirror上显示更多的代码
  import dedent from 'dedent'


  // merge功能
  import 'codemirror/addon/merge/merge.css'
  import 'codemirror/addon/merge/merge'
  // google DiffMatchPatch
  import DiffMatchPatch from 'diff-match-patch'
  // DiffMatchPatch config with global
  window.diff_match_patch = DiffMatchPatch;
  window.DIFF_DELETE = -1;
  window.DIFF_INSERT = 1;
  window.DIFF_EQUAL = 0;


  export default {
    name: 'Show',
    components: {codemirror},
    data() {
      return {
        code: dedent`
/*
* Selection Sort
*/
public class Main {
    public static void main(String[] args) {
        int[] arr = new int[]{9, 8, 7, 6, 5, 4, 3, 2, 1};
        selectionSort(arr);
        for(int i=0;i<arr.length;i++){
      		System.out.print(arr[i]+" ");
		}
    }

    public static void selectionSort(int[]nums){
    	int length=nums.length;
    	//Index of minimum values
    	int index;
		for(int i=0;i<length;i++){
			index=i;
			for(int j=i+1;j<length;j++){
				//Find the smallest value
				if(nums[j]<nums[index]){
					index=j;
				}
			}
			int tem=nums[i];
			nums[i]=nums[index];
			nums[index]=tem;
		}
	}

}`,
        
        
        
        cmOptions: {
          // 语言及语法模式
          mode: 'text/x-java',
          // 主题
          theme: 'idea',
          // 显示函数
          line: true,
          lineNumbers: true,
          // 软换行
          lineWrapping: true,
          // tab宽度
          tabSize: 5,
          // 代码提示功能
          hintOptions: {
            // 避免由于提示列表只有一个提示信息时，自动填充
            completeSingle: false,
            // 不同的语言支持从配置中读取自定义配置 sql语言允许配置表和字段信息，用于代码提示
            tables: {
              "table1": ["c1", "c2"],
            },
          },
          // 高亮行功能
          styleActiveLine: true,
          // 调整scrollbar样式功能
          scrollbarStyle: 'overlay',
          // 自动括号匹配功能
          matchBrackets: true
        }
      }
    },
    methods: {
      inputChange(content) {
        this.$nextTick(() => {
          console.log("code:" + this.code);
          console.log("content:" + content);
          
        });
      },
    },
    mounted() {
      // 代码提示功能 当用户有输入时，显示提示信息
      this.$refs.cm.codemirror.on('inputRead', cm => {
        cm.showHint();
      })
    }
  }
</script>

<style lang="scss">
  .CodeMirror{
    float: right;
    margin-left: 0px;
    width: 50% !important;
    height: 700px;
  }  
  
</style>