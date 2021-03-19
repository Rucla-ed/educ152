jQuery(function($){$('document').ready(function(){function showMenu(){var headerHeight="4.1em";$(window).on('click',function(e){$this=$(e.target);if($this.is('.click-icon.menu.closed')){e.preventDefault();$('header nav').animate({'top':headerHeight},200);$this.removeClass("closed");}else if($this.is('.click-icon.menu')||(!$this.is(".click-icon.expand-down"))){if($this.is('.click-icon.menu')){e.preventDefault();}
$('header nav').animate({'top':'-100em'},200);$('.click-icon.menu').addClass("closed");}});}
showMenu();function expandMenuItems(){$(window).on('click',function(e){$this=$(e.target);if($this.is('nav#mega-menu a.click-icon.expand-down.closed')){e.preventDefault();$this.parent().next().slideDown(100);$this.removeClass("closed");}else if($this.is('.mega-menu-section .click-icon.expand-down')){e.preventDefault();$this.parent().next().slideUp(100);$this.addClass("closed");}});}
function showSearch(){var headerHeight="4.1em";$(window).on('click',function(e){$this=$(e.target);if($this.is('.click-icon.search.closed')){e.preventDefault();$('#searchform').animate({'top':headerHeight},200);$this.removeClass("closed");}else if($this.is('.click-icon.search')||(!$this.is("input"))){if($this.is('.click-icon.search')){e.preventDefault();}
$('#searchform').animate({'top':'-100em'},200);$('.click-icon.search').addClass("closed");}});}
showSearch();function breadCrumbsUp(){if($(window).width()<=1400){$("nav#breadcrumbs").insertBefore("h1#main-title");}
else{$("article#the-content").prepend($("nav#breadcrumbs"));}}
function replaceByArrow(){if($(window).width()<=600){$("div#overview h3 span.view-tutorial a").html('<img class="icon" src="https://www.spss-tutorials.com/img/nav-arrow-right-thin-lblue-33a.png">');$("div#overview h3 span.view-tutorial").css({"padding":"0 0.25em 0 0.25em"});}}
replaceByArrow();function hideInlineComments(){$('.inline-comment').addClass('js').before("<span class='expand-inline-comment active' title='Show Remark'>*</span>");$('p,li').on('click','.expand-inline-comment',function(){$(this).removeClass('active').next().fadeIn(250).prepend("<span class='collapse-inline-comment' title='Hide Remark'>x</span>");});$(window).on('click',function(e){$this=$(e.target);if((!$this.is(".inline-comment")&&!$this.is('.expand-inline-comment'))||$this.is('.collapse-inline-comment')){$('.inline-comment').fadeOut(250);$('.collapse-inline-comment').remove();$('.expand-inline-comment').addClass('active');}});}
hideInlineComments();function pruneComments(){var comments=$('#commentul li'),em=parseInt(comments.css('font-size'));comments.each(function(){var $this=$(this),comHeight=$this.height();if(comHeight>10*em){$(this).css('height',10*em).append($("<div class='comment-expand-button' data-height='"+comHeight+"'>Expand <a class='expand-comment' href='#'>comment</a> | <a class='expand-all-comments' href='#'>all comments</a></div>"));}});comments.on('click','.expand-comment',function(e){e.preventDefault();var $this=$(this),comHeight=($this.parent().data('height'));$this.parent().fadeOut(250).parent().animate({'height':comHeight},250);});comments.on('click','.expand-all-comments',function(e){e.preventDefault();comments.each(function(){var $this=$(this),comHeight=$this.find('div.comment-expand-button').data('height');if(comHeight!=null){$this.animate({'height':comHeight},250);}});$('div.comment-expand-button').fadeOut(250);});}
pruneComments();$(window).resize(function(){replaceByArrow();expandMenuItems();});function showExcerpt(){$(window).on('click',function(e){$this=$(e.target);if($this.is('.click-icon.expand-down.closed')){e.preventDefault();$this.parent().next().slideDown(100);$this.removeClass("closed");}else if($this.is('.click-icon.expand-down')){e.preventDefault();$this.parent().next().slideUp(100);$this.addClass("closed");}});}
showExcerpt();});});