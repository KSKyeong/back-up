FlowRouter.template('/diary_post/:_id', 'diary_post');

Template.diary_post.onCreated(function() {
    var _id = FlowRouter.getParam('_id')

    DB_DIARY.update({_id: _id}, {
        $inc: {readCount: 1}  //조회수 1 증가 업데이트
    });
});

Template.diary_post.helpers({
    board: function() {
        var _id = FlowRouter.getParam('_id')
        return DB_DIARY.findOne({_id: _id});
    },
    createdAt: function() {
        return this.createdAt.toStringYMDHMS();
    }
});