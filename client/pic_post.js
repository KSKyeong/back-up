FlowRouter.template('/pic_post', 'pic_post');

Template.pic_post.onRendered(function() {

});

Template.pic_post.helpers({
    boards: function() {
        return DB_DIARY.findAll({}, {sort: {createdAt: -1}});
    },
    YMD: function() {
        return this.createdAt.toStringYMD();
    },
    HMS: function() {
        return this.createdAt.toStringHMS();
    }
});

Template.pic_post.events({
    'click #btn-remove': function() {
        if(confirm('삭제 하시겠습니까?')) {
            DB_DIARY.remove({_id: this._id});
            alert('삭제 되었습니다.');
        }
    }
});