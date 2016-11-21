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
.tab-span.active{
	color: #00d8ff;
	font-weight: bold;
	text-decoration: underline;
}

</style>
<div id="tabOps">
	<span class="tab-span active" data-idget="setup">Setup</span>
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
<section id="reactRails" style="display:none;">
	<strong>Files Overview:</strong>
</section>
<section id="reactRails" style="display:none;">
	<strong></strong>
</section>
<section id="es6intro" style="display:none;">
	
</section>