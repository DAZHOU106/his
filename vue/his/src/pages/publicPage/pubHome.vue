<template>
    <div class="pubHome-wrapper">
            <top-logo/> 
            <top-nav/>
            
    </div>
</template>

<script>
import TopLogo from "@/components/pubHome/topLogo"
import TopNav from "@/components/pubHome/topNav"
export default {
    name:'pubHome',
    components:{
        TopLogo,
        TopNav
    },
    data(){
        return{

        }
    },
    methods:{

    },

}
</script>
