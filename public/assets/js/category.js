// 当添加分类表单发生提交行为的时候
$('#addCategory').on('submit', function () {
	// 获取用户在表单中输入的内容
	var formData = $(this).serialize();
	// 向服务器端发送请求 添加分类
	$.ajax({
		type: 'post',
		url: '/categories',
		data: formData,
		success: function () {
			location.reload();
		}
	})
	// 阻止表单默认提交行为
	return false;
});


$.ajax({
	type: 'get',
	url: '/categories',
	success: function (response) {
		// 将服务器端返回的数据和HTML模板进行拼接
		var html = template('categoryListTpl', {data: response});
		// 将拼接好的内容放到页面中
		$('#categoryBox').html(html);
	}
});


$('#categoryBox').on('click', '.edit', function () {
	// 获取要修改的分类数据的id
	var id = $(this).attr('data-id');
	// 根据id获取分类数据的详细信息
	$.ajax({
		type: 'get',
		url: '/categories/' + id,
		success: function (response) {
			console.log(response)
			var html = template('modifyCategoryTpl', response);
			$('#formBox').html(html);
		}
	})
});

// 当修改分类数据表单发生提交行为的时候
$('#formBox').on('submit', '#modifyCategory', function () {
	// 获取管理员在表单中输入的内容
	var formData = $(this).serialize();
	// 获取要修改的分类id
	var id = $(this).attr('data-id');
	// 发送请求 修改分类数据
	$.ajax({
		type: 'put',
		url: '/categories/' + id,
		data: formData,
		success: function () {
			location.reload();
		}
	})
	// 阻止表单的默认提交行为
	return false;
});