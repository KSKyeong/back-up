FlowRouter.template('/pic_posting/:_id', 'pic_posting');


Template.pic_posting.onRendered(function() {
    $('#editor').summernote({
        popover: {},
        minHeight: 200,
        maximumImageFileSize: 1048576*10
    }),
        Session.set('Kategorie', fashion);
});

Template.pic_posting.helpers({
    post: function() {
        var _id = FlowRouter.getParam('_id');
        if(_id === 'newPosting') {
            return {};    //새글 작성일때는 화면에 비어있는 데이터를 제공. 아닌 경우는 '수정'의 경우
        }

        Meteor.setTimeout(function() { //화면 에디터에 편집 모드를 초기화 하기 위한 트릭
            $('#editor').summernote('reset')
        });

        return DB_DIARY.findOne({_id: _id});
    }

});

Template.pic_posting.events({
    'click #btn-fashion': function() {
        var Kategorie = $('#inp-fashion').val();
    },
    'click #btn-beauty': function() {
        var Kategorie = $('#inp-beauty').val();
    },
    'click #btn-baby': function() {
        var Kategorie = $('#inp-baby').val();
    },
    'click #btn-food': function() {
        var Kategorie = $('#inp-food').val();
    },
    'click #btn-kitchen': function() {
        var Kategorie = $('#inp-kitchen').val();
    },
    'click #btn-life': function() {
        var Kategorie = $('#inp-life').val();
    },
    'click #btn-home': function() {
        var Kategorie = $('#inp-home').val();
    },
    'click #btn-digital': function() {
        var Kategorie = $('#inp-digital').val();
    },
    'click #btn-sports': function() {
        var Kategorie = $('#inp-sports').val();
    },
    'click #btn-car': function() {
        var Kategorie = $('#inp-car').val();
    },
    'click #btn-book': function() {
        var Kategorie = $('#inp-book').val();
    },
    'click #btn-toy': function() {
        var Kategorie = $('#inp-toy').val();
    },
    'click #btn-fancy': function() {
        var Kategorie = $('#inp-fancy').val();
    },
    'click #btn-pet': function() {
        var Kategorie = $('#inp-pet').val();
    },
    'click #btn-health': function() {
        var Kategorie = $('#inp-health').val();
    },
    'click #btn-travel': function() {
        var Kategorie = $('#inp-travel').val();
    },
    'click #btn-else': function() {
        var Kategorie = $('#inp-else').val();
    },




    'click #btn-save': function() {
        var name = $('#inp-name').val();
        var title = $('#inp-title').val();
        var html = $('#editor').summernote('code');
        var Kategorie = Session.get('Kategorie');
        if(!title) {
            return alert('경매 시작 가격은 반드시 입력 해 주세요.');
        }
        var _id = FlowRouter.getParam('_id');
        if( _id === 'newPosting') {
            DB_DIARY.insert({  //새로운 정보 넣을 때 경매 매물 등록 시에 사용.
                createdAt: new Date(),
                name: name,
                title: title,
                content: html,
                Kategorie: Kategorie,
                readCount: 0

            })
        } else {
            var post = DB_DIARY.findOne({_id: _id});
            post.name = name;
            post.title = title;
            post.content = html;
            post.Kategorie = Kategorie;
            DB_DIARY.update({_id: _id}, post); //수정 된 내용 저장 "수정" 시에 사용.
        }

        alert('저장하였습니다.');
        $('#inp-name').val('');
        $('#inp-title').val('');
        $('#inp-Kategorie').val('');
        $('#editor').summernote('reset');
        window.history.back();
        window.history.back();
    }
})