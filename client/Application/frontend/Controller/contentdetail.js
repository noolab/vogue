Template.contentdetail.helpers({
    getImage:function(id){
        var img = images.findOne({_id:id});
        if(img){
            //console.log(img.copies.images.key);
            return img.copies.images.key;
        }else{
            return;
        }
    },
    relateContent:function(cId){
        var id = this.catId;
        var items = content.find({_id:{$ne:cId}},{catId:id}).fetch();
        var rand = Math.floor(Math.random()*items.length);
        var rs = items.splice(rand,2);
         console.log(rs);  
        return rs;
    },
    getImageRelated:function(image){
        var img = images.findOne({_id:image});
        if(img){
            //console.log(img.copies.images.key);
            return img.copies.images.key;
        }else{
            return;
        }
    },
    getLayout1: function(){
        var layout = this.layout;
        var id = this._id;
        console.log("Display :"+layout);
        if(layout==1){
            return content.findOne({_id:id});
        }
    },
    getLayout2: function(){
        var layout = this.layout;
        var id = this._id;
        console.log("Display :"+layout);
        if(layout==2){
            return content.findOne({_id:id});
        }
    },
    getLayout3: function(){
        var layout = this.layout;
        var id = this._id;
        console.log("Display :"+layout);
        if(layout==3){
            return content.findOne({_id:id});
        }
    },
    getUrl:function(){
        var r = Router.current().route.path(this);
        r = r.replace(/^\//g,"");
        return Meteor.absoluteUrl()+r;
    }

});
Template.header.render = function(){
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: false,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: false
    });
}