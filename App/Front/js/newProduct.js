$(document).ready(function(){
	$.ajax({
		"url":link+"tnewProductAjax",
		"type":"post",
		"data":{"i":"getCategories"},
		"dataType":"json",
		success:function(result){
			var add = "";
			for(var i=0; i<result.length;i++){
				categoryGroup = result[i];
				addPreend = '<select onChange="cat(this)">'; 
				addPreend = addPreend + "<option value='0'>Kategori Seçiniz</option>"
				for(var j=0; j<categoryGroup.length;j++){
					addPreend = addPreend + '<option value="'+categoryGroup[j].KategoriId+'">'+categoryGroup[j].KategoriAdi+'</option>';
				}
				addPreend = addPreend+ "</select>";
				add = addPreend + add;
			}
			$(".kategoriler").html(add);
		}
	});
});
function cat(obj){
	obj = $(obj);
	var sub = obj.val();
	$.ajax({
		"url":link+"tnewProductAjax",
		"type":"post",
		"data":{"i":"getCategories","sub":sub},
		"dataType":"json",
		success:function(result){
			var add = "";
			console.log(result.length);
			for(var i=0; i<result.length;i++){
				categoryGroup = result[i];
				addAppend = '<select onChange="cat(this)">'; 
				addAppend = addAppend + '<option value="0">Seçiniz</option>';
				$.each(categoryGroup,function(key,value){
					if(key != "selected"){
						addAppend = addAppend + '<option value="'+value.KategoriId+'">'+value.KategoriAdi+'</option>';
					}
					else{
						$("option[value='"+value+"']").attr("selected","selected")
					}
				});
				addAppend = addAppend+ "</select>";
				add = add + addAppend;
			}
			$(".kategoriler").html(add);
		},
		error:function(result){
			console.log("error : ");
			console.log(result);
		}
	});
}