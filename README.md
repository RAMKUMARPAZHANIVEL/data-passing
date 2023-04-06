passing data from child to parent and parent child
 By context api,we can impelement data transfer from child to parent and parent to child.
 for achieving that,we have to certain steps 
 1. create context to handle state,
 2. wrap the higher order component with the context name and Provider keyword.
 3. pass data as the props with key name of value.
 4. the data can be acessed in the child level component by using the usecontex hook.
    thaty can be accessed from anywhere inside the higher order component.
