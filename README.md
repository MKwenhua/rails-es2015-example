# README
<style>
#tabOps{
	box-sizing: border-box;
	overflow: hidden;
}
#tabOps span{
	display: inline-block;
	cursor: pointer;
}
.tab-span{
	text-align: center;
	padding: 4px;
	width:25%;
	float: left;
}
.tab-span:hover{
	color: #00d8ff;
	font-weight: bold;
}
.tab-span.readme-active{
	color: #00d8ff;
	font-weight: bold;
	text-decoration: underline;
}

</style>
<div id="tabOps">
	<span class="tab-span readme-active" data-idget="setup">Setup</span>
	<span class="tab-span" data-idget="file">File Overview</span>
	<span class="tab-span" data-idget="reactRails">React Guide</span>
	<span class="tab-span" data-idget="es6intro">React ES2015 Guide</span>
</div>
<section id="setup" style="display:block;">
<strong>Steps needed to set up:</strong>
<ol>
<li>npm install</li>
<li>bundle install</li>
</ol>

<strong>This demo has three key gems:</strong>
<blockquote>
	<strong><a href="https://github.com/reactjs/react-rails" target="_block" >gem 'react-rails'</a></strong>
	<p>React Rails to generate component scaffolding</p>
	<strong><a href="https://github.com/Shopify/sprockets-commoner" target="_block" >gem 'sprockets-commoner'</a></strong>
	<p>an actively maintained gem from Shopify to compile JavaScript modules for the browser in Sprockets with Babel.</p>
	<strong><a href="https://libraries.io/rubygems/sprockets/4.0.0.beta2" target="_block" >gem 'sprockets', '4.0.0.beta2'</a></strong>
	<p>Upcomming Sprockets version that supports plugins. Read: <a href="https://github.com/rails/sprockets/blob/master/UPGRADING.md#es6-support"  target="_block">ES6 Support</a></p>
	
</blockquote>
<p><b>FYI: </b> the <a href="https://github.com/MKwenhua/rails-es2015-example/tree/constructors">constructors branch</a> is the better solution.</p>
</section>
<section id="file" style="display:none;">
	<strong>Files Overview:</strong>

</section>
<section id="reactRails" style="display:none;">
	<strong>React Overview:</strong>
</section>
<section id="es6intro" style="display:none;">
	<strong>Some neat ES2015 Features:</strong>
</section>
<script>
 var readMe = {
 	onDisplay: 'setup',
 	spanDisplay: document.querySelector('.readme-active'),
 	file: document.getElementById('file'),
 	reactRails: document.getElementById('reactRails'),
 	es6intro: document.getElementById('es6intro'),
 	setup: document.getElementById('setup'),
 }
  document.getElementById('tabOps').onclick = function(e){
  	if(e.target.className === "tab-span"){
       readMe.spanDisplay.className = "tab-span";
       readMe[readMe.onDisplay].style.display = 'none';
       readMe.onDisplay = e.target.dataset.idget;
       readMe.spanDisplay = e.target;
       readMe[readMe.onDisplay].style.display = 'block';

  	}
  }
</script>