//your JS code here. If required.
const p1=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve({p:"Promise 1",t:"2"})
	},2000)
})
const p2=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve({p:"Promise 2",t:"1"})
	},1000)
})
const p3=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve({p:"Promise 3",t:"3"})
	},3000)
})
const lastTime=new Date().getTime();
Promise.all([p1,p2,p3])
	.then((res)=>{
		document.getElementById('loading').style.display='none';
		const table=document.querySelector('thead');
		for(let i=0;i<res.length;i++){
			table.innerHTML+=
				`
				<tr>
		          <th>${res[i].p}</th>
		          <th>${res[i].t}</th>
		        </tr>
				`
		}
		table.innerHTML+=
			`
			<tr>
			  <th>Total</th>
			  <th>${(new Date().getTime()-lastTime)/1000}</th>
			</tr>
			`
	})










