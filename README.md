1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans:getElementById=only support id selector
    getElementsByClassName= only support class selector
    querySelector / querySelectorAll= suport all valid css selector
    
2.How do you create and insert a new element into the DOM?
ans:  a.Create an element
      b.Set its properties 
        c.Insert it into the DOM using methods.
        
3.What is Event Bubbling and how does it work?
ans:Event Bubbling is a process where an event starts from the target element and bubbles upward through its ancestors in the DOM tree.

4.What is Event Delegation in JavaScript? Why is it useful?
ans:Event Delegation is a technique where a parent element handles events for its child elements, by leveraging event bubbling
    More efficient
    Avoids adding separate listeners to each child

5.What is the difference between preventDefault() and stopPropagation() methods?
ans:preventDefault()=>Prevents the default action of an event
    stopPropagation()=>Stops the event from bubbling up to parent elements
