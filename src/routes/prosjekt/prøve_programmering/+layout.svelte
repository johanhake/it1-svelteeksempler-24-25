<script>
	import { page } from '$app/state';
	let { children } = $props();
</script>

<br>
<ul>
	<li><a href="/{page.url.pathname.split("/")[1]+"/"+page.url.pathname.split("/")[2]}">Hjem</a></li>
	<li><a href="/{page.url.pathname.split("/")[1]+"/"+page.url.pathname.split("/")[2]}/oppgave_1">Oppgave 1</a></li>
	<li><a href="/{page.url.pathname.split("/")[1]+"/"+page.url.pathname.split("/")[2]}/oppgave_2">Oppgave 2</a></li>
	<li><a href="/{page.url.pathname.split("/")[1]+"/"+page.url.pathname.split("/")[2]}/oppgave_3">Oppgave 3</a></li>
	<li><a href="/{page.url.pathname.split("/")[1]+"/"+page.url.pathname.split("/")[2]}/oppgave_4">Oppgave 4</a></li>
</ul>
<h4>Besvarelse fra {page.url.pathname.split("/")[1]}</h4>

<main>
	{@render children()}
</main>
<style>

	ul{
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
	}

	li{
		width: 150px;
	}

	li a{
		text-align: center;
		display: block;
		width: 100%;
		padding: 5px;
		text-decoration: none;
		background-color: darkblue;
		color: white;
	}

	li a:hover{
		background-color: orange
	}

</style>