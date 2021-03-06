Meteor.methods({
	addContent:function(img,title,text,text2,catId,layout,tags){
		var attr = {
			userId:Meteor.userId(),
			imageId:img,
			title:title,
			description:{
				text1:text,
				text2:text2
			},
			createdAt:new Date(),
			catId:catId,
			layout:layout,
			taglist:tags,
			status:0
		}
		return content.insert(attr);
	},
	editContent:function(id,img,title,text,text2,catId,layout,tags){
		var attr = {
			imageId:img,
			title:title,
			description:{
				text1:text,
				text2:text2
			},
			catId:catId,
			layout:layout,
			taglist:tags
		}
		return content.update({_id:id},{$set:attr});
	},
	removeContent:function(id){
		return content.remove({_id:id});
	},
	updateStatus:function(id,status){
		return content.update({_id:id},{$set:{status:status}});
	}
});