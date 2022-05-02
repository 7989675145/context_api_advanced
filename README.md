# context_api_advanced
It is a part of online shopping, which means it adds the data we give and displays the count.
For this I used context api approach which uses createContext,useContext

createContext is used for store
we wrap whatever components uses the store in Provider also put the values in values attribute

useContext to access the store values
1.For the count we imported store from App.js in Count component
2.For displaying the store values imported store from App.js in Display component
we update the values in the store using useState
in the same way we update the values in the useState to store.

finally I displayed the store values using Map.
