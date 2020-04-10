 export class NavBarObserver{

     constructor(targetClass, ClassToToggle, yPos) {

             // this.selector contains the default parameters for the element to observe
               this.selector = {
                   class: 'js-intersection-nav-bar',
                   container: 'div',
                   y: yPos || innerHeight + 50
               }
               this.el = null
               this.targetClass = targetClass
               this.classToToggle = ClassToToggle

     }
     init(){
         this.el = document.createElement(`${this.selector.container}`);
         this.el.classList.add(`${this.selector.class}`)
         this.el.style.top = `${this.selector.y}px`;
         document.body.append(this.el);
         this.observer()
     }
     observer(){
         const that = this;
         const options = {
             threshold: 1.0
         }
         const observer = new IntersectionObserver(function(entries) {
             entries.forEach(entry => {
                 if (entry.isIntersecting === true) {
                     document.querySelector(`${that.targetClass}`).classList.remove(`${that.classToToggle}`)
                 } else if (scrollY < that.selector.y) {
                     document.querySelector(`${that.targetClass}`).classList.add(`${that.classToToggle}`)
                 }
             });
             },options);
         observer.observe(this.el);
     }
}

