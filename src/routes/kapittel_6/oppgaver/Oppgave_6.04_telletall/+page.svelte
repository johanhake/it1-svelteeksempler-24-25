<script>
	let tall = [];
	let oddetall = []
	let partall = []
	for (let i = 0; i<101; i++){
		tall.push(i)
		if (i % 2 ==0){
			partall.push(i)
		}else{
			oddetall.push(i)
		}
	}
</script>

<p>
	Antall tall mellom 0 og 100: {tall.length}
</p>
<p>
	Antall oddetall mellom 0 og 100: {oddetall.length}
</p>
<p>
	Antall partall mellom 0 og 100: {partall.length}
</p>


