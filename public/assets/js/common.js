$('#logout').on('click',function(){
    var isConfirm = confirm('您真的要退出吗');
    // if(isConfirm == true){
    //   location.href = 'login.html';
    // }  这样写也可以退出  但它不是真的退出，你重新在浏览器地址栏写入用户管理地址也还是能进去  所以要请求服务器退出
    if (isConfirm){
      $.ajax({
        type:'post',
        url:'/logout',
        success: function(){
          location.href = 'index.html'
        },
        error: function(){
          alert('推出失败')
        }
      })
    }

  })