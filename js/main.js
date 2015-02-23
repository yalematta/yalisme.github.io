/**
 * @author LayaleMatta
 */

$(document).ready(function(){
	showGitRepos("yalisme","fork","created","desc");
});

function showGitRepos(username,type,sort,direction)
{
	$.ajax({
		type:"GET",
		url:"https://api.github.com/users/"+username+"/repos?type="+type+"&sort="+sort+"&direction="+direction,
		dataType:"json",
		success:function(result)
		{
			$('.gitrepos .loader').css('display','none');
			$.each(result,function(){
				$('.gitrepos ul').append("<li><a href='"+this.clone_url+"' target='_null'>"+this.name+"</a> "+ this.description+"</li>");
			});
		}
	});
}
