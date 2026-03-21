const cube=document.getElementById("cube");let isDragging=!1,startX=0,startY=0,currentX=-20,currentY=-20,velocityX=0,velocityY=0;const baseSpeedX=.1*(Math.random()-.5),baseSpeedY=.1*(Math.random()-.5),accelerationFactor=.3,friction=.95;function updateRotation(){cube.style.transform=`rotateX(${currentX}deg) rotateY(${currentY}deg)`}function animate(){isDragging||(velocityX*=.95,velocityY*=.95,velocityX+=.05*baseSpeedX,velocityY+=.05*baseSpeedY),currentX+=velocityX,currentY+=velocityY,updateRotation(),requestAnimationFrame(animate)}cube.addEventListener("mousedown",(t=>{isDragging=!0,startX=t.clientX,startY=t.clientY,cube.style.cursor="grabbing",velocityX=0,velocityY=0})),document.addEventListener("mousemove",(t=>{if(!isDragging)return;const e=t.clientX-startX,n=t.clientY-startY;startX=t.clientX,startY=t.clientY,velocityY+=.3*e*.1,velocityX-=.3*n*.1})),document.addEventListener("mouseup",(()=>{isDragging=!1,cube.style.cursor="grab"})),cube.addEventListener("touchstart",(t=>{isDragging=!0;const e=t.touches[0];startX=e.clientX,startY=e.clientY,velocityX=0,velocityY=0})),document.addEventListener("touchmove",(t=>{if(!isDragging)return;const e=t.touches[0],n=e.clientX-startX,r=e.clientY-startY;startX=e.clientX,startY=e.clientY,velocityY+=.3*n*.1,velocityX-=.3*r*.1})),document.addEventListener("touchend",(()=>{isDragging=!1})),updateRotation(),animate();const bars=document.querySelectorAll(".percentage"),observer=new IntersectionObserver(((t,e)=>{t.forEach((t=>{if(t.isIntersecting){const n=t.target,r=n.querySelector(".percentagein"),o=n.getAttribute("data-progress");setTimeout((()=>{r.style.width=o+"%"}),200),e.unobserve(n)}}))}),{threshold:.5});bars.forEach((t=>observer.observe(t))),setTimeout((()=>{document.getElementById("myText").classList.add("show")}),1e4),document.getElementById("logo1").addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})}));

document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('marqueeTrack');
    
    // Clone the content enough times to fill the screen + buffer for smooth looping
    // We only need to clone once if the animation uses translateX(-50%)
    // because that assumes we have [Original Set][Clone Set] and we move halfway.
    
    const items = Array.from(track.children);
    
    // Clone all items and append them to the track
    items.forEach(item => {
        const clone = item.cloneNode(true);
        // Ensure clone doesn't have duplicate IDs if we had any (we don't here)
        track.appendChild(clone);
    });

    // Optional: If screen is very wide and content is short, we might need more clones.
    // For 5 items * 320px + gaps, it's about 1700px. Standard screens are covered.
    // But for 4k screens, we might need another set.
    // Let's add a safety check.
    
    const contentWidth = track.scrollWidth;
    const windowWidth = window.innerWidth;
    
    if (contentWidth < windowWidth * 2) {
         items.forEach(item => {
            const clone = item.cloneNode(true);
            track.appendChild(clone);
        });
    }
});
