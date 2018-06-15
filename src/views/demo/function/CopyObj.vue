<template>
    <div class="c-main">
        <h3 class="c-headline m-bottom-10">对象拷贝 （copyObj）</h3>
        <p class="c-headline c-prefix c-no-border">作用：阻断对象赋值给另外一个对象时引用指向同一个地址问题</p>

       <div v-highlight>
            <p>调用的时候需要传递一个要复制的对象，实现源码如下：</p>
            <pre>
                <code class="javascript">
                    const copyObj = obj => {
                        return JSON.parse(JSON.stringify(obj));
                    };
                    export default copyObj;
                </code>
            </pre>

           <p>例如： </p>
           <pre>
               <code class="javascript">
                   let obj = {
                       name: 'Liuqing',
                       age: 18
                   }

                   // 将obj赋值给obj2
                   let obj2 = obj;

                   // 给obj添加了一个属性
                   obj.email = 'qing.liu@its.cn';

                   // 输出obj和obj2
                   console.log(obj);
                   console.log(obj2);
                </code>
           </pre>
           <p>
               上面的例子我先声明了一个对象obj，并给其赋值,然后将obj赋值给obj2，然后在obj上添加了一个属性email,由于是引用类型，导致obj2也发生了改变；
           </p>
           <p>结果：</p>
           <pre>
               <code>
                   // obj
                   {name: "Liuqing", age: 18, email: "qing.liu@its.cn"}

                   // obj2
                   {name: "Liuqing", age: 18, email: "qing.liu@its.cn"}
               </code>
           </pre>

           <p>使用copyObj后：</p>
           <pre>
               <code class="javascript">
                   let obj = {
                       name: 'Liuqing',
                       age: 18
                   }

                   // 将obj赋值给obj2
                   let obj2 = this.$copyObj(obj);

                   // 给obj添加了一个属性
                   obj.email = 'qing.liu@its.cn';

                   // 输出obj和obj2
                   console.log(obj);
                   console.log(obj2);
                </code>
           </pre>
           <p>结果：</p>
           <pre>
               <code>
                   // obj
                   {name: "Liuqing", age: 18, email: "qing.liu@its.cn"}

                   // obj2
                   {name: "Liuqing", age: 18}
               </code>
           </pre>
       </div>
    </div>
</template>
<style lang="less" rel="stylesheet/less" scoped>

</style>

<script>
    export default {
        name: '',
        data () {
            return {};
        },
        computed: {},
        components: {},
        methods: {},
        created () {}
    };
</script>
