var users = [
    {
        id:1,
        name:'Trần Văn Huy'
    },
    {
        id:2,
        name:'Đồng Viết Long'
    }
];
var comments = [
    {
        id:1,
        user_id:1,
        content:'Đẹp quá bạn'
    },
    {
        id:2,
        user_id:2,
        content:'ok bạn'
    }
]
function getComments(){
    return new Promise(function (resolve){
        resolve(comments);
    })
}
function getUserID(userIds){
    return new Promise(function(resolve){
        var result = users.filter(function(user){
            return userIds.includes(user.id)
        })
        resolve(result);
    })
}
getComments()
    .then(function(comments){
        var userIDs=comments.map(function(value){
            return value.user_id;
        });
        return getUserID(userIDs)
            .then(function(user){
                return {
                    user,
                    comments
                };
            });
    })
    .then(function(data){
        var html = '';
        var boxcoment = document.querySelectorAll('.box_comment');
        // var boxcoment2 = document.querySelector('.box_comment2');
        // var getComment=document.querySelector('.getComment');
        var arr=[];
        data.comments.forEach(function(comment){
            var users = data.user.find(function(valueUser){
                return valueUser.id == comment.user_id;
            });
            html += `<p class = "user_name">${users.name}</p>
                    <p>${comment.content}</p>`;
            arr.push(html);
        })
        console.log(arr);
        for(let i=0;i<arr.length;i++)
        {
            boxcoment[i].innerHTML=arr[i];
        }
    });