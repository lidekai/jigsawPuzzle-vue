const btr2Data = {
    result: {
        partsImgUrls:[
            {partsImgUrl:"images/btr2-parts-1.png",partsName:"磨煤机",partsId:"parts-1",isActive: true,partsComboSpan:3,showTrue:"block"},
            {partsImgUrl:"images/btr2-parts-2.png",partsName:"粗粉分离机",partsId:"parts-2",isActive: false,partsComboSpan:1,showTrue:"block"},
            {partsImgUrl:"images/btr2-parts-3.png",partsName:"给煤机",partsId:"parts-3",isActive: false,partsComboSpan:2,showTrue:"block"},
            {partsImgUrl:"images/btr2-parts-4.png",partsName:"排粉机",partsId:"parts-4",isActive: false,partsComboSpan:1,showTrue:"block"},
            {partsImgUrl:"images/btr2-parts-5.png",partsName:"给粉机",partsId:"parts-5",isActive: false,partsComboSpan:6,showTrue:"block"},
            {partsImgUrl:"images/btr2-parts-6.png",partsName:"煤粉仓",partsId:"parts-6",isActive: false,partsComboSpan:6,showTrue:"block"},
            {partsImgUrl:"images/btr2-parts-7.png",partsName:"细粉分离器",partsId:"parts-7",isActive: false,partsComboSpan:1,showTrue:"block"},
            {partsImgUrl:"images/btr2-parts-8.png",partsName:"细粉分离器",partsId:"parts-8",isActive: false,partsComboSpan:3,showTrue:"block"},
            {partsImgUrl:"images/btr2-parts-9.png",partsName:"细粉分离器",partsId:"parts-9",isActive: false,partsComboSpan:1,showTrue:"block"},
            {partsImgUrl:"images/btr2-parts-10.png",partsName:"细粉分离器",partsId:"parts-10",isActive: false,partsComboSpan:7,showTrue:"block"},
        ],
        comboImgUrls:[
            {comboImgUrl:"images/btr2-combo-0.png",comboId:"combo-0",showTrue:"block"},
            {comboImgUrl:"images/btr2-combo-1.png",comboId:"combo-1",showTrue:"none"},
            {comboImgUrl:"images/btr2-combo-2.png",comboId:"combo-2",showTrue:"none"},
            {comboImgUrl:"images/btr2-combo-3.png",comboId:"combo-3",showTrue:"none"},
            {comboImgUrl:"images/btr2-combo-4.png",comboId:"combo-4",showTrue:"none"},
            {comboImgUrl:"images/btr2-combo-5.png",comboId:"combo-5",showTrue:"none"},
            {comboImgUrl:"images/btr2-combo-6.png",comboId:"combo-6",showTrue:"none"},
            {comboImgUrl:"images/btr2-combo-7.png",comboId:"combo-7",showTrue:"none"},
            {comboImgUrl:"images/btr2-combo-8.png",comboId:"combo-8",showTrue:"none"},
            {comboImgUrl:"images/btr2-combo-9.png",comboId:"combo-9",showTrue:"none"},
            {comboImgUrl:"images/btr2-combo-10.png",comboId:"combo-10",showTrue:"block"}
        ],
        signWhat:[
            {signX:"9%",signY:"40%",signId:"sign-1",showTrue:"block"},
            {signX:"4%",signY:"18.5%",signId:"sign-2",showTrue:"block"},
            {signX:"17%",signY:"20%",signId:"sign-3",showTrue:"block"},
            {signX:"28.5%",signY:"26.8%",signId:"sign-4",showTrue:"block"},
            {signX:"47%",signY:"30%",signId:"sign-5",showTrue:"block"},
            {signX:"47%",signY:"19%",signId:"sign-6",showTrue:"block"},
            {signX:"40%",signY:"2%",signId:"sign-7",showTrue:"block"},
            {signX:"17%",signY:"8%",signId:"sign-8",showTrue:"block"},
            {signX:"14%",signY:"55.5%",signId:"sign-9",showTrue:"block"}
        ],
        autoShow:[
            {autoImg:"images/btr2-auto-4.png",autoShowId:"autoShow-1"},
            {autoImg:"images/btr2-auto-5.png",autoShowId:"autoShow-2"}
        ]
    }
};
new Vue({
    el: '#btr2',
    data: {
        partsImgUrls:btr2Data.result.partsImgUrls,//选设备区域
        comboImgUrls:btr2Data.result.comboImgUrls,//组合区
        signXY:btr2Data.result.signWhat,//坐标
        autoShows:btr2Data.result.autoShow,//自动显示的图片
        partsComboSpan:"el-col-3",
        isShow:true,
        partsComboImg:"images/btr2-parts-combo-1.png",
        partsComboX:"0px",
        partsComboY:"0px",
        getx:370,
        gety:110,
        deductionPoints:"",//扣分的积累
        show: false,
        showSum:0,
        showOne:true
    },
    filters:{

    },
    mounted:function(){
        this.$nextTick(function () {
        })
    },
    methods:{
        partsSelected:function (item) {//点击设备区
            this.partsImgUrls.forEach(function(obj){
                obj.isActive = false;
            });
            //移动图片的切换
            item.isActive =!item.isActive ;
            this.partsComboSpan="el-col-"+item.partsComboSpan;
            this.partsComboImg="images/btr2-parts-combo-"+item.partsId.split("-")[1]+".png";
            //移动图片的在鼠标移动中的定位
            let span=this.partsComboImg.split("-")[3];
            switch(span){
                case "1.png" :
                    this.getx=370;
                    this.gety=110;
                    break;
                case "2.png" :
                    this.getx=340;
                    this.gety=100;
                    break;
                case "3.png" :
                    this.getx=370;
                    this.gety=160;
                    break;
                case "4.png" :
                    this.getx=340;
                    this.gety=100;
                    break;
                case "5.png" :
                    this.getx=430;
                    this.gety=150;
                    break;
                case "6.png" :
                    this.getx=450;
                    this.gety=110;
                    break;
                case "7.png" :
                    this.getx=340;
                    this.gety=120;
                    break;
                case "8.png" :
                    this.getx=380;
                    this.gety=100;
                    break;
                case "9.png" :
                    this.getx=340;
                    this.gety=100;
                    break;
                case "10.png" :
                    this.getx=450;
                    this.gety=110;
                    break;
            }
        },
        updateXY:function(event){//图片跟鼠标移动
            this.partsComboX=event.clientX-this.getx+"px";
            this.partsComboY=event.clientY-this.gety+"px";
        },
        toggleShow: function() {//鼠标移入移出组合区显示图片
            this.isShow= !this.isShow;
            if(this.partsComboImg==''){
                this.isShow=true;
            }

        },
        signSelected(item) {

            let imgIndex=item.signId.split("-")[1];
            if(this.partsComboImg.length!=0){
                let span=this.partsComboImg.split("-")[3].split(".")[0];
                this.$confirm('是否将图片放到此处?', '提示', {
                    confirmButtonText: '是',
                    cancelButtonText: '否',
                    type: 'warning'
                }).then(() => {
                    if(span!=imgIndex){
                        this.$message.error('答案错误');
                        this.deductionPoints=this.deductionPoints+",-5";
                    }

                    if(this.comboImgUrls[span].showTrue=="none"){
                        this.comboImgUrls[span].showTrue="block";
                        this.signXY[span-1].showTrue="none";
                        this.partsImgUrls[span-1].showTrue="none";
                        this.showSum=this.showSum+1;

                    }
                    this.partsComboImg='';
                    this.isShow=true;
                    if(this.show==false&&this.comboImgUrls[4].showTrue=="block"&&this.comboImgUrls[5].showTrue=="block"){
                        this.show=true;
                    }
                    if(this.showSum==9){
                        this.showOne=false;
                    }
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删'
                    });

                });
            }

        }
    }
})