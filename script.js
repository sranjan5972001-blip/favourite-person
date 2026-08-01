
document.querySelectorAll(".button").forEach(button=>{
    button.addEventListener("mouseenter",()=>{
        button.style.transform="scale(1.05)";
    });

    button.addEventListener("mouseleave",()=>{
        button.style.transform="scale(1)";
    });
});

const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";
        }
    });
});

document.querySelectorAll(".card,.photo,.end").forEach(item=>{
    item.style.opacity="0";
    item.style.transform="translateY(40px)";
    item.style.transition="0.8s";
    observer.observe(item);
});
