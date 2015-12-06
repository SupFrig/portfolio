<?php include('config.php'); ?>
<!doctype html>
<!--[if lte IE 7]> <html class="ie7" lang="fr"> <![endif]-->
<!--[if IE 8]> <html class="ie8" lang="fr"> <![endif]-->
<!--[if IE 9]> <html class="ie9" lang="fr"> <![endif]-->
<html lang="fr">
<?php $is_dev ? include('inc/head_dev.php') : include('inc/head.php'); ?>
<body>
    <header>
		<div class="valign">
			<div class="logo">
				<h1>Thomas Montet</h1>
				<strong>Le mec qu'a pas d'idées</strong>
			</div><!--
				--><nav class="menu">
				<ul>
					<li><a href="#">Porfolio</a></li>
					<li><a href="#">About me</a></li>
					<li><a href="#">Contact</a></li>
				</ul>
			</nav>
		</div>
		<nav class="filters">
			<ul>
				<li><a href="#" data-filter=".insect">Insectes</a></li>
				<li><a href="#" data-filter=".eye">Zyeux</a></li>
				<li><a href="#" data-filter=".baby">Baby</a></li>
				<li><a href="#" data-filter=".random">Random</a></li>
			</ul>
		</nav>
	</header>
	<section class="projects">
		<ul>
			<li class="grid-sizer"></li>
			<li class="item eye">
				<a href="#">
					<img src="img/data/dancing_alien.jpg"/>
				</a>
			</li><!--
			--><li class="item eye random">
				<a href="#">
					<div class="mask">
						<div class="inner">
							<hr/>
						</div>
					</div>
					<img src="img/data/psyche.jpg"/>
				</a>
			</li><!--
			--><li class="item random">
				<a href="#">
					<img src="img/data/rawr.jpg"/>
				</a>
			</li><!--
			--><li class="item random">
				<a href="#">
					<img src="img/data/realbaby.png"/>
				</a>
			</li><!--
			--><li class="item baby">
				<a href="#">
					<img src="img/data/1.jpg"/>
				</a>
			</li><!--
			--><li class="item baby">
				<a href="#">
					<img src="img/data/2.jpg"/>
				</a>
			</li><!--
			--><li class="item baby">
				<a href="#">
					<img src="img/data/3.jpg"/>
				</a>
			</li><!--
			--><li class="item baby">
				<a href="#">
					<img src="img/data/4.jpg"/>
				</a>
			</li><!--
			--><li class="item insect">
				<a href="#">
					<img src="img/data/scarab.jpg"/>
				</a>
			</li><!--
			--><li class="item eye">
				<a href="#">
					<img src="img/data/troizyeux.jpg"/>
				</a>
			</li><!--
			--><li class="item eye">
				<a href="#">
					<img src="img/data/warp.jpg"/>
				</a>
			</li><!--
			
			--><li class="item baby">
				<a href="#">
					<img src="img/data/5.jpg"/>
				</a>
			</li><!--
			--><li class="item baby">
				<a href="#">
					<img src="img/data/6.jpg"/>
				</a>
			</li><!--
			--><li class="item baby">
				<a href="#">
					<img src="img/data/7.jpg"/>
				</a>
			</li><!--
			--><li class="item baby">
				<a href="#">
					<img src="img/data/8.jpg"/>
				</a>
			</li><!--
			--><li class="item baby">
				<a href="#">
					<img src="img/data/9.jpg"/>
				</a>
			</li><!--
			--><li class="item baby">
				<a href="#">
					<img src="img/data/10.jpg"/>
				</a>
			</li><!--
			--><li class="item baby">
				<a href="#">
					<img src="img/data/11.jpg"/>
				</a>
			</li><!--
			--><li class="item baby">
				<a href="#">
					<img src="img/data/13.jpg"/>
				</a>
			</li><!--
			--><li class="item baby">
				<a href="#">
					<img src="img/data/14.jpg"/>
				</a>
			</li>
		</ul>
	</section>
	<?php $is_dev ? include('inc/scripts_dev.php') : include('inc/scripts.php'); ?>
</body>