window.addEventListener('load', function(){

	let about = document.getElementById('about');
	let ac = document.getElementById('ac');

	let what = document.getElementById('what');
	let wc = document.getElementById('wc');

	let projects = document.getElementById('projects');
	let pc = document.getElementById('pc');

	let skills = document.getElementById('skills');
	let sc = document.getElementById('sc');

	let team = document.getElementById('team');
	let tc = document.getElementById('tc');

	let get = document.getElementById('get');
	let gc = document.getElementById('gc');

	about.addEventListener('click', function(){
		if(ac.classList.contains("hide")){
			this.classList.add('active');
			ac.classList.remove("hide");
		}else{
			ac.classList.add("hide");
			this.classList.remove('active');
		}
	})

	team.addEventListener('click', function(){
		if(tc.classList.contains("hide")){
			this.classList.add('active');
			tc.classList.remove("hide");
		}else{
			tc.classList.add("hide");
			this.classList.remove('active');
		}
	})

	get.addEventListener('click', function(){
		if(gc.classList.contains("hide")){
			gc.classList.remove("hide");
			this.classList.add('active');
		}else{
			gc.classList.add("hide");
			this.classList.remove('active');
		}
	})

	projects.addEventListener('click', function(){
		if(pc.classList.contains("hide")){
			pc.classList.remove("hide");
			this.classList.add('active');
		}else{
			pc.classList.add("hide");
			this.classList.remove('active');
		}
	})

	skills.addEventListener('click', function(){
		if(sc.classList.contains("hide")){
			sc.classList.remove("hide");
			this.classList.add('active');
		}else{
			sc.classList.add("hide");
			this.classList.remove('active');
		}
	})

	what.addEventListener('click', function(){
		if(wc.classList.contains("hide")){
			wc.classList.remove("hide");
			this.classList.add('active');
		}else{
			wc.classList.add("hide");
			this.classList.remove('active');
		}
	})
})